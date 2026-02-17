# ============================================
# Base Stage - Node.js base image
# ============================================
FROM node:18-alpine AS base

WORKDIR /app

# Instalar utilidades necesarias
RUN apk add --no-cache netcat-openbsd

# Habilitar corepack para usar pnpm
RUN corepack enable

# Copiar archivos de dependencias
COPY package*.json pnpm-lock.yaml* ./

# ============================================
# Development Stage
# ============================================
FROM base AS development

# Instalar todas las dependencias (incluyendo devDependencies)
RUN pnpm install

# Copiar código de la aplicación
COPY . .

# Copiar entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Exponer puerto
EXPOSE 3001

# Usar entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["pnpm", "start"]

# ============================================
# Production Stage
# ============================================
FROM base AS production

# Instalar solo dependencias de producción
RUN pnpm install --prod

# Copiar código de la aplicación
COPY . .

# Copiar entrypoint script
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/docker-entrypoint.sh

# Exponer puerto
EXPOSE 3001

# Variable de ambiente
ENV NODE_ENV=production

# Usar entrypoint script
ENTRYPOINT ["docker-entrypoint.sh"]
CMD ["node", "index.js"]
