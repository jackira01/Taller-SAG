# 🚀 Quick Start con Docker

Guía rápida para iniciar el proyecto con Docker.

## 1️⃣ Primer Setup (Una sola vez)

```bash
# Clonar variables de entorno
cp api/.env.example api/.env

# Editar api/.env y agregar credenciales de Gmail
# MAIL_USER=tu-email@gmail.com
# MAIL_PASS=tu-app-password
```

## 2️⃣ Iniciar los Servicios

```bash
# Con Docker Compose
docker-compose up -d

# O si tienes Make instalado
make up
```

## 3️⃣ Verificar que está corriendo

```bash
# Con Docker Compose
docker-compose ps

# O si tienes Make instalado
make ps
```

## 📍 URLs Disponibles

- **API**: `http://localhost:3001`
- **MongoDB**: `mongodb://localhost:27017`

## 📝 Comandos Principales

### Con Docker Compose

```bash
# Ver logs
docker-compose logs -f api

# Detener
docker-compose down

# Reiniciar
docker-compose restart api

# Ejecutar comandos dentro del contenedor
docker-compose exec api pnpm install nombre-paquete
```

### Con Make (más fácil)

```bash
make help          # Ver todos los comandos disponibles
make logs          # Ver logs
make logs-api      # Ver logs de API
make restart       # Reiniciar servicios
make shell-api     # Acceder a la terminal
make clean         # Limpiar todo (incluye datos)
```

## 🛠️ Desarrollar

Los cambios en `src/` se reflejan automáticamente gracias a **hot-reload** con nodemon.

### Instalar dependencias
```bash
docker-compose exec api pnpm add nombre-paquete
```

## 🔍 Solucionar Problemas

### MongoDB no inicia
```bash
docker-compose logs mongodb
```

### API no se conecta a MongoDB
- Espera 5-10 segundos a que MongoDB inicie completamente
- Revisa que el `MONGODB_URI` sea correcto

### Limpiar todo y volver a empezar
```bash
docker-compose down -v
docker-compose up -d
```

## 📚 Documentación Completa

Ver [DOCKER.md](./DOCKER.md) para documentación detallada.

---

**¡Listo! Ya deberías tener el backend corriendo en Docker.** 🎉
