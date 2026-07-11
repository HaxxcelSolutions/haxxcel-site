# ---------------------------------------------------------------------------
# Haxxcel Solutions — deployment & dev shortcuts
# Usage: `make <target>`   e.g. `make deploy`
# ---------------------------------------------------------------------------

# App runs on this port (NOT 3000).
PORT ?= 4000
COMPOSE = docker compose

.DEFAULT_GOAL := help

.PHONY: help
help: ## Show this help
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) \
		| awk 'BEGIN {FS = ":.*?## "}; {printf "  \033[36m%-18s\033[0m %s\n", $$1, $$2}'

# ---- Local development ------------------------------------------------------
.PHONY: install
install: ## Install dependencies (clean, from lockfile)
	npm ci

.PHONY: dev
dev: ## Run dev server on $(PORT)
	npm run dev -- -p $(PORT)

.PHONY: build
build: ## Production build
	npm run build

.PHONY: start
start: ## Start production server on $(PORT)
	PORT=$(PORT) npm run start

.PHONY: lint
lint: ## Lint the codebase
	npm run lint

.PHONY: type-check
type-check: ## TypeScript type-check (no emit)
	npm run type-check

# ---- Docker -----------------------------------------------------------------
.PHONY: docker-build
docker-build: ## Build the Docker image
	$(COMPOSE) build

.PHONY: up
up: ## Start container in background
	$(COMPOSE) up -d

.PHONY: down
down: ## Stop and remove container
	$(COMPOSE) down

.PHONY: logs
logs: ## Follow container logs
	$(COMPOSE) logs -f

.PHONY: restart
restart: down up ## Restart container

# ---- Deploy (pull latest + rebuild + run) -----------------------------------
.PHONY: deploy
deploy: ## Pull latest code, rebuild image, restart container
	git pull --ff-only
	$(COMPOSE) up -d --build
	$(COMPOSE) ps

.PHONY: update
update: deploy ## Alias for deploy
