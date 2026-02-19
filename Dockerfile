# ── Stage 1: Build ──────────────────────────────────────────────────────────
FROM node:20-alpine AS builder

WORKDIR /app

# Instala dependências primeiro (cache layer)
COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copia o restante do código e faz o build
COPY . .
RUN npm run build

# ── Stage 2: Serve com Nginx ─────────────────────────────────────────────────
FROM nginx:1.27-alpine AS runner

# Remove config padrão do Nginx
RUN rm /etc/nginx/conf.d/default.conf

# Copia o nginx.conf customizado
COPY nginx.conf /etc/nginx/conf.d/app.conf

# Copia o build gerado pelo Vite
COPY --from=builder /app/dist /usr/share/nginx/html

# Expõe a porta 80
EXPOSE 80

# Healthcheck
HEALTHCHECK --interval=30s --timeout=5s --start-period=10s --retries=3 \
  CMD wget -qO- http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]
