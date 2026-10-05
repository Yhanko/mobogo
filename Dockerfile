# ==============================================================================
# Multi-stage Dockerfile para frontend React + Vite + TypeScript (moboGo Landing Page)
# ==============================================================================

# ------------------------------------------------------------------------------
# Estágio 1: Dependências e Build da Aplicação
# ------------------------------------------------------------------------------
FROM node:22-alpine AS builder

WORKDIR /app

# Copia os manifestos de dependências para aproveitar o cache de camadas do Docker
COPY package.json package-lock.json ./

# Instalação limpa e reproduzível das dependências
RUN npm ci

# Suporte a injeção de variáveis de ambiente do Vite no momento do build
ARG VITE_API_URL
ARG VITE_API_HASH
ENV VITE_API_URL=$VITE_API_URL \
    VITE_API_HASH=$VITE_API_HASH \
    NODE_ENV=production

# Copia o código-fonte da aplicação
COPY . .

# Compila os arquivos estáticos de produção na pasta /app/dist
RUN npm run build

# ------------------------------------------------------------------------------
# Estágio 2: Execução com Nginx Ultra-leve e Performático
# ------------------------------------------------------------------------------
FROM nginx:1.27-alpine AS runner

# Remove a configuração padrão do Nginx
RUN rm -rf /etc/nginx/conf.d/default.conf

# Aplica as configurações personalizadas (SPA fallback, Gzip, Caching, Segurança)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia os arquivos estáticos compilados do estágio builder
COPY --from=builder /app/dist /usr/share/nginx/html

# Define permissões adequadas
RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

# Porta exposta do servidor Web
EXPOSE 80

# Verificação de integridade do container
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD wget --spider -q http://localhost/ || exit 1

# Inicialização do Nginx em primeiro plano
CMD ["nginx", "-g", "daemon off;"]
