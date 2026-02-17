.PHONY: help build up down logs restart clean test

# ============================================
# Makefile - Comandos útiles para Docker
# ============================================

# Variables
COMPOSE = docker-compose
DOCKER = docker
CONTAINER_API = tallersag-api
CONTAINER_DB = tallersag-mongodb

help: ## Mostrar esta ayuda
	@echo "🐳 Comandos disponibles para Docker:"
	@echo ""
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'

# ============================================
# Comandos de control
# ============================================

up: ## Iniciar todos los servicios
	$(COMPOSE) up -d
	@echo "✅ Servicios iniciados"
	@echo "📌 API: http://localhost:3001"
	@echo "📌 MongoDB: mongodb://localhost:27017"

down: ## Detener todos los servicios
	$(COMPOSE) down
	@echo "✅ Servicios detenidos"

restart: ## Reiniciar todos los servicios
	$(COMPOSE) restart
	@echo "✅ Servicios reiniciados"

rebuild: ## Reconstruir las imágenes sin caché
	$(COMPOSE) build --no-cache
	@echo "✅ Imágenes reconstruidas"

rebuild-up: rebuild up ## Reconstruir e iniciar servicios

# ============================================
# Logs
# ============================================

logs: ## Ver logs de todos los servicios
	$(COMPOSE) logs -f

logs-api: ## Ver logs de la API
	$(COMPOSE) logs -f api

logs-db: ## Ver logs de MongoDB
	$(COMPOSE) logs -f mongodb

logs-tail: ## Últimas 50 líneas de logs
	$(COMPOSE) logs --tail=50

# ============================================
# Gestión de servicios
# ============================================

ps: ## Ver estado de los contenedores
	$(COMPOSE) ps

stats: ## Ver estadísticas de recursos
	$(DOCKER) stats

shell-api: ## Acceder a la shell de la API
	$(COMPOSE) exec api sh

shell-db: ## Acceder a la shell de MongoDB
	$(COMPOSE) exec mongodb mongosh

# ============================================
# MongoDB
# ============================================

db-connect: ## Conectar a MongoDB
	$(COMPOSE) exec mongodb mongosh

db-backup: ## Hacer backup de la base de datos
	@mkdir -p backups
	$(DOCKER) run --rm -v tallersag_mongodb_data:/data -v $(PWD)/backups:/backups mongo:6.0-alpine \
		mongodump --out=/backups/dump_$(shell date +%Y%m%d_%H%M%S)
	@echo "✅ Backup realizado"

# ============================================
# Desarrollo
# ============================================

install: ## Instalar dependencias en el contenedor
	$(COMPOSE) exec api pnpm install

add: ## Instalar un paquete (usar: make add PKG=nombre-paquete)
	$(COMPOSE) exec api pnpm add $(PKG)

add-dev: ## Instalar un paquete de desarrollo (usar: make add-dev PKG=nombre-paquete)
	$(COMPOSE) exec api pnpm add -D $(PKG)

test: ## Ejecutar tests
	$(COMPOSE) exec api pnpm test

# ============================================
# Limpieza
# ============================================

clean: ## Detener servicios y limpiar volúmenes
	$(COMPOSE) down -v
	@echo "✅ Servicios y volúmenes eliminados"

clean-images: ## Eliminar imágenes de Docker
	$(DOCKER) rmi $$($(DOCKER) images -q)
	@echo "✅ Imágenes eliminadas"

prune: ## Limpiar todo lo no utilizado
	$(DOCKER) system prune -f
	@echo "✅ Sistema limpiado"

# ============================================
# Información
# ============================================

info: ## Mostrar información de los servicios
	@echo "🐳 Estado de Servicios:"
	@$(COMPOSE) ps
	@echo ""
	@echo "📊 Recursos utilizados:"
	@$(DOCKER) stats --no-stream

version: ## Ver versiones de Docker
	@echo "Docker version:"
	@$(DOCKER) --version
	@echo "Docker Compose version:"
	@$(COMPOSE) --version

# ============================================
# Valores por defecto
# ============================================

.DEFAULT_GOAL := help
