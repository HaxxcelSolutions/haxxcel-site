# syntax=docker/dockerfile:1

# ---------------------------------------------------------------------------
# Haxxcel Solutions — Next.js production image (multi-stage)
# Pins Node 20 so it never depends on the server's system Node (fixes the
# "Node v12 / Unexpected token '.'" build error).
# ---------------------------------------------------------------------------

FROM node:20-alpine AS base
# libc6-compat helps some native deps run on Alpine.
RUN apk add --no-cache libc6-compat
WORKDIR /app

# ---- Dependencies -----------------------------------------------------------
FROM base AS deps
COPY package.json package-lock.json ./
RUN npm ci

# ---- Build ------------------------------------------------------------------
FROM base AS builder
COPY --from=deps /app/node_modules ./node_modules
COPY . .
ENV NEXT_TELEMETRY_DISABLED=1
RUN npm run build

# ---- Runtime ----------------------------------------------------------------
FROM base AS runner
ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
# App listens on this port inside the container (NOT 3000).
ENV PORT=4000
ENV HOSTNAME=0.0.0.0

# Run as a non-root user for security.
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copy the standalone server + static assets produced by `output: "standalone"`.
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs
EXPOSE 4000
CMD ["node", "server.js"]
