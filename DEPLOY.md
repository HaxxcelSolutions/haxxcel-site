# Deployment Guide — Haxxcel Solutions

Deploy this Next.js project on an **Oracle Cloud (OCI) Ubuntu VM** using Docker.

> **Why Docker?** The server's system Node may be too old (e.g. Node 12 causes
> `SyntaxError: Unexpected token '.'`). Docker pins **Node 20** inside the
> container, so deployment no longer depends on the server's Node version.

The app runs on **port 4000** (not 3000).

---

## 1. Create the VM (OCI Console)

1. **Menu → Compute → Instances → Create Instance**
2. Image: **Ubuntu 22.04** (or 24.04). Shape: `VM.Standard.A1.Flex` (Ampere/ARM,
   free tier) or `E2.1.Micro`.
3. Under **Networking**, keep "Assign public IPv4 address".
4. Download the **SSH private key** (or paste your own public key).
5. Create.

> The ARM (Ampere `A1`) shape works fine — the `node:20-alpine` base image is
> multi-arch.

---

## 2. Open port 4000 in the OCI firewall (Security List)

1. **Networking → Virtual Cloud Networks → your VCN → Subnet → Default Security List**
2. **Add Ingress Rule**:
   - Source CIDR: `0.0.0.0/0`
   - IP Protocol: `TCP`
   - Destination Port Range: `4000` (also `80` and `443` if you add Nginx)
3. Save.

---

## 3. Connect + open the OS-level firewall

Oracle Ubuntu images also block ports internally with `iptables`:

```bash
ssh -i /path/to/private.key ubuntu@<PUBLIC_IP>

# Allow the port through the local firewall and persist it
sudo iptables -I INPUT 6 -m state --state NEW -p tcp --dport 4000 -j ACCEPT
sudo netfilter-persistent save
```

---

## 4. Install Docker + Git + Make

```bash
sudo apt update && sudo apt upgrade -y
sudo apt install -y git make ca-certificates curl

# Docker (official convenience script)
curl -fsSL https://get.docker.com | sudo sh

# Run docker without sudo
sudo usermod -aG docker $USER
newgrp docker   # or log out and back in

docker --version && docker compose version
```

---

## 5. Clone the project

```bash
sudo mkdir -p /var/www && sudo chown $USER:$USER /var/www
cd /var/www
git clone <YOUR_REPO_URL> hx_site_code
cd hx_site_code
```

> **Private repo?** Set up a deploy key:
> `ssh-keygen -t ed25519 -f ~/.ssh/deploy_key`, add the `.pub` to
> GitHub → Repo → Settings → Deploy keys, then clone via the SSH URL.

---

## 6. Create the secrets file

```bash
cp .env.example .env.local
nano .env.local
```

Fill in real values:

```env
PORT=4000
HOST_PORT=4000
NEXT_PUBLIC_SITE_URL=https://www.haxxcelsolutions.com
RESEND_API_KEY=your_real_key
CONTACT_TO_EMAIL=contact@haxxcelsolutions.com
CONTACT_FROM_EMAIL=noreply@haxxcelsolutions.com
```

> `.env.local` is git-ignored and must be created on each server manually.

---

## 7. Build + run

```bash
make deploy
```

This runs `git pull` → build image → start container. Verify:

```bash
make logs                        # follow logs
docker compose ps                # STATUS should be "healthy"
curl http://localhost:4000/api   # -> {"message":"API route is working"}
```

Open `http://<PUBLIC_IP>:4000` in your browser. ✅

---

## 8. Future updates (the easy flow)

Whenever there's new code, run:

```bash
cd /var/www/hx_site_code
make deploy
```

Or set the GitHub Actions secrets below for **automatic deploy on every push**
to `master`:

| Secret      | Value                                  |
| ----------- | -------------------------------------- |
| `SSH_HOST`  | VM public IP                           |
| `SSH_USER`  | `ubuntu`                               |
| `SSH_KEY`   | Contents of the SSH **private** key    |
| `SSH_PORT`  | `22`                                   |
| `APP_DIR`   | `/var/www/hx_site_code`                |

---

## 9. (Recommended) Nginx + free SSL + no port number

So users visit `https://haxxcelsolutions.com` instead of `:4000`:

```bash
sudo apt install -y nginx

sudo tee /etc/nginx/sites-available/haxxcel > /dev/null <<'EOF'
server {
    listen 80;
    server_name haxxcelsolutions.com www.haxxcelsolutions.com;
    location / {
        proxy_pass http://127.0.0.1:4000;
        proxy_http_version 1.1;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}
EOF

sudo ln -s /etc/nginx/sites-available/haxxcel /etc/nginx/sites-enabled/
sudo nginx -t && sudo systemctl reload nginx

# Free HTTPS via Let's Encrypt
sudo apt install -y certbot python3-certbot-nginx
sudo certbot --nginx -d haxxcelsolutions.com -d www.haxxcelsolutions.com
```

Then:

- Add **ingress rules for ports 80 & 443** (step 2) and open them in iptables
  (step 3).
- Point your domain's **A record** to the VM's public IP.

---

## Available `make` commands

| Command           | Description                                   |
| ----------------- | --------------------------------------------- |
| `make deploy`     | Pull latest code, rebuild image, restart      |
| `make up`         | Start container in background                 |
| `make down`       | Stop and remove container                     |
| `make restart`    | Restart container                             |
| `make logs`       | Follow container logs                         |
| `make docker-build` | Build the Docker image                      |
| `make build`      | Local production build (no Docker)            |
| `make dev`        | Run dev server on port 4000                   |
| `make help`       | List all commands                             |

---

## Troubleshooting

- **Site not loading on `:4000`?** → 90% of the time it's the firewall. Recheck
  **both** the OCI Security List (step 2) **and** iptables (step 3).
- **Build killed / out of memory** on a small free-tier shape? → add swap:
  ```bash
  sudo fallocate -l 2G /swapfile && sudo chmod 600 /swapfile
  sudo mkswap /swapfile && sudo swapon /swapfile
  echo '/swapfile none swap sw 0 0' | sudo tee -a /etc/fstab
  ```
- **`SyntaxError: Unexpected token '.'` during build** → the server's system Node
  is too old. With Docker this can't happen; make sure you're building via
  `make deploy` (Docker), not `npm run build` directly on old Node.
