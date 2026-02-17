# 🐳 Docker Setup - Backend (API)

Guía completa para ejecutar el backend de la aplicación usando Docker.

## 📋 Requisitos Previos

Asegúrate de tener instalado:
- [Docker](https://www.docker.com/products/docker-desktop) (versión 20.10 o superior)
- [Docker Compose](https://docs.docker.com/compose/install/) (versión 1.29 o superior)

Verifica la instalación:
```bash
docker --version
docker-compose --version
```

## 🚀 Inicio Rápido

### 1. Configurar Variables de Entorno

Copia el archivo `.env.example` y renómbralo a `.env`:

```bash
# Desde la carpeta raíz del proyecto
cp api/.env.example api/.env
```

Edita `api/.env` y agrega tus credenciales de email (Gmail):
```env
MAIL_USER=tu-email@gmail.com
MAIL_PASS=tu-app-password
```

### 2. Iniciar los Servicios

Desde la carpeta raíz del proyecto:

```bash
docker-compose up -d
```

Esto iniciará:
- **MongoDB** en `mongodb://localhost:27017`
- **API** en `http://localhost:3001`

### 3. Ver Logs

Para ver los logs de la API en tiempo real:
```bash
docker-compose logs -f api
```

### 4. Detener los Servicios

```bash
docker-compose down
```

Para detener y eliminar volúmenes (datos de MongoDB):
```bash
docker-compose down -v
```

---

## 🔧 Comandos Útiles

### Ver estado de los contenedores
```bash
docker-compose ps
```

### Acceder a la terminal del contenedor API
```bash
docker-compose exec api sh
```

### Acceder a MongoDB
```bash
docker-compose exec mongodb mongosh
```

### Reiniciar solo la API
```bash
docker-compose restart api
```

### Reconstruir la imagen de la API (si hay cambios en Dockerfile)
```bash
docker-compose up -d --build
```

---

## 📦 Estructura de Docker

### Dockerfile
- **Base Stage**: Imagen base de Node.js (Alpine Linux - más ligero)
- **Development Stage**: Incluye todas las dependencias + nodemon para hot-reload
- **Production Stage**: Solo dependencias de producción

### docker-compose.yml
Servicios incluidos:
- **mongodb**: Base de datos MongoDB 6.0 Alpine
- **api**: Backend Node.js con hot-reload

### .dockerignore
Define qué archivos/carpetas excluir del build:
- `node_modules`
- `.git`
- `.env`
- `tests`
- Etc.

---

## 🐛 Solución de Problemas

### Error: "Cannot connect to MongoDB"
- Verifica que MongoDB esté corriendo:
  ```bash
  docker-compose ps
  ```
- Espera unos segundos a que MongoDB inicie (hay un healthcheck configurado)

### Error: "Port 3001 already in use"
- Cambia el puerto en `docker-compose.yml`:
  ```yaml
  ports:
    - "3002:3001"  # Host:Container
  ```

### Los cambios en el código no se reflejan
- Verifica que el volume esté correctamente configurado en `docker-compose.yml`
- Asegúrate de que no hay conflictos con `node_modules`

### Error de permisos en Linux
- Ejecuta Docker con `sudo`:
  ```bash
  sudo docker-compose up -d
  ```

---

## 🔐 Seguridad

### Para Producción

1. **Cambiar nombre de base de datos**:
   ```env
   MONGODB_URI=mongodb://mongodb:27017/tu-db-segura
   ```

2. **Usar credenciales de MongoDB**:
   ```yaml
   # En docker-compose.yml
   environment:
     MONGO_INITDB_ROOT_USERNAME: admin
     MONGO_INITDB_ROOT_PASSWORD: password-fuerte
   ```

3. **Usar secretos de Docker** (en el despliegue final):
   ```bash
   docker run --secret api_env --secret db_password ...
   ```

4. **Configurar HTTPS** (recomendado):
   - Usar reverse proxy (Nginx)
   - SSL/TLS certificates (Let's Encrypt)

---

## 📊 Monitoreo

### Ver estadísticas de recursos
```bash
docker stats
```

### Ver logs con timestamp
```bash
docker-compose logs --timestamps api
```

### Limpiar image y contenedores no usados
```bash
docker system prune
```

---

## 🔄 Desarrollo

### Hot Reload
Los cambios en `src/` se reflejarán automáticamente gracias a nodemon.

### Instalar nuevas dependencias
```bash
# Desde dentro del contenedor
docker-compose exec api pnpm add nombre-del-paquete

# Desde tu máquina (requiere pnpm instalado)
pnpm add nombre-del-paquete
```

### Ejecutar scripts personalizados
```bash
docker-compose exec api pnpm run test
```

---

## 📝 Variables de Entorno Disponibles

```env
# Servidor
PORT=3001
NODE_ENV=development|production

# Base de Datos
MONGODB_URI=mongodb://mongodb:27017/tallersag

# Email
MAIL_HOST=smtp.gmail.com
MAIL_PORT=465
MAIL_SECURE=true
MAIL_USER=tu-email@gmail.com
MAIL_PASS=tu-app-password

# JWT (si se implementa)
JWT_SECRET=tu-clave-secreta
JWT_EXPIRE=7d
```

---

## 🚢 Desplegar en Producción

### Opción 1: Docker Hub
```bash
docker build -t tu-usuario/tallersag-api:1.0.0 --target production .
docker push tu-usuario/tallersag-api:1.0.0
```

### Opción 2: Docker Swarm
```bash
docker swarm init
docker stack deploy -c docker-compose.yml tallersag
```

### Opción 3: Kubernetes
- Usa las imágenes de Docker Hub
- Configura Persistent Volumes para MongoDB
- Implementa Health Checks y Resource Limits

---

## 📚 Referencias Útiles

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose Docs](https://docs.docker.com/compose/)
- [MongoDB Docker Image](https://hub.docker.com/_/mongo)
- [Node.js Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)

---

**¿Problemas?** Revisa los logs con `docker-compose logs -f` y busca el error específico.
