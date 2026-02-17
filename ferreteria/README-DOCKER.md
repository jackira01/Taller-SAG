# 🐳 Docker Configuration - Complete Guide

El backend (API) está completamente preparado para ejecutarse con Docker en desarrollo y producción.

## 📂 Archivos Creados

```
ferreteria/
├── api/
│   ├── Dockerfile                 # Multi-stage Dockerfile
│   ├── .dockerignore              # Exclusiones para Docker build
│   ├── .env.example               # Variables de entorno ejemplo
│   ├── docker-entrypoint.sh       # Script de inicio
│   └── package.json (actualizado) # Script "prod" agregado
│
├── docker-compose.yml             # Desarrollo (API + MongoDB)
├── docker-compose.prod.yml        # Producción (con Nginx)
├── .env.prod.example              # Variables para producción
├── .gitignore (actualizado)       # Seguridad y privacidad
│
├── nginx/
│   ├── README.md                  # Documentación Nginx
│   ├── nginx.dev.conf             # Config desarrollo
│   ├── nginx.prod.conf            # Config producción SSL
│   └── ssl/ (crear manualmente)   # Certificados SSL
│
├── Makefile                       # Comandos útiles
├── QUICK_START_DOCKER.md          # Inicio rápido
├── DOCKER.md                      # Documentación completa
└── DEPLOYMENT.md                  # Guía de despliegue
```

## 🚀 Inicio Rápido

### 1. Setup (Primera vez)
```bash
cp api/.env.example api/.env
# Editar credenciales de email
nano api/.env
```

### 2. Iniciar
```bash
docker-compose up -d
```

### 3. Verificar
```bash
docker-compose ps
# API debe estar en puerto 3001
# MongoDB debe estar saludable
```

## 📖 Documentación

| Documento | Descripción |
|-----------|------------|
| [QUICK_START_DOCKER.md](./QUICK_START_DOCKER.md) | ⚡ Inicio rápido (5 minutos) |
| [DOCKER.md](./DOCKER.md) | 📚 Documentación completa |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | 🚢 Guía de despliegue |
| [nginx/README.md](./nginx/README.md) | 🌐 Configuración Nginx |

## ⚙️ Características

### Desarrollo
- ✅ Hot-reload con nodemon
- ✅ MongoDB integrado
- ✅ Volúmenes para código fuente
- ✅ Variables de entorno automáticas
- ✅ Health checks

### Producción
- ✅ Multi-stage Docker build
- ✅ MongoDB con autenticación
- ✅ Nginx reverse proxy
- ✅ HTTPS/SSL support
- ✅ Rate limiting
- ✅ Gzip compression
- ✅ Security headers
- ✅ Resource limits
- ✅ Health checks avanzados

## 🛠️ Comandos Útiles

### Con Docker Compose

```bash
# Iniciar
docker-compose up -d

# Ver logs
docker-compose logs -f api

# Detener
docker-compose down

# Limpiar todo (incluyendo datos)
docker-compose down -v

# Ejecutar comandos
docker-compose exec api pnpm add nombre-paquete
```

### Con Make (más fácil)

```bash
make help        # Ver todos los comandos
make up          # Iniciar
make down        # Detener
make logs        # Ver logs
make shell-api   # Acceder a terminal
make restart     # Reiniciar
make clean       # Limpiar todo
```

## 🔗 URLs

| Servidor | URL | Notas |
|----------|-----|-------|
| API | `http://localhost:3001` | Desarrollo |
| MongoDB | `mongodb://localhost:27017` | Desarrollo |
| API Health | `http://localhost:3001/health` | Verificar salud |

## 📊 Verificación

### Logs de la API
```bash
docker-compose logs -f api
```

### Estado de contenedores
```bash
docker-compose ps
```

### Estadísticas de recursos
```bash
docker stats
```

### Conexión a MongoDB
```bash
docker-compose exec mongodb mongosh
```

## 🔒 Seguridad

### Desarrollo
- ✅ Variables en `.env` (no en código)
- ✅ Volúmenes separados
- ✅ Network local aislado

### Producción
- ✅ Variables de entorno seguras
- ✅ MongoDB con autenticación
- ✅ SSL/TLS obligatorio
- ✅ Rate limiting
- ✅ Security headers
- ✅ Resource limits
- ✅ Network segregation

## 🐛 Problemas Comunes

### MongoDB no conecta
```bash
# Esperar 5-10 segundos a que inicialice
docker-compose logs mongodb

# Verificar salud
docker-compose ps
```

### Puerto ya en uso
```bash
# Cambiar puerto en docker-compose.yml
ports:
  - "3002:3001"  # Host:Container
```

### Cambios en código no se reflejan
```bash
# Verificar volumen
docker-compose ps

# Reiniciar
docker-compose restart api
```

## 📚 Recursos Externos

- [Docker Documentation](https://docs.docker.com/)
- [Docker Compose](https://docs.docker.com/compose/)
- [Node.js + Docker Best Practices](https://nodejs.org/en/docs/guides/nodejs-docker-webapp/)
- [Nginx Documentation](http://nginx.org/en/docs/)
- [MongoDB Docker](https://hub.docker.com/_/mongo)

## ✅ Checklist - Primer Deploy

- [ ] Docker instalado y funcionando
- [ ] Variables de entorno configuradas
- [ ] `docker-compose up -d` ejecutado
- [ ] `docker-compose ps` muestra servicios sanos
- [ ] API responde en `http://localhost:3001`
- [ ] MongoDB accesible
- [ ] Hot-reload funciona (cambiar código en src/)
- [ ] Logs se ven con `docker-compose logs -f`

## 🎯 Próximos Pasos

1. **Desarrollo Local**: Usar `docker-compose.yml`
2. **Staging**: Usar `docker-compose.prod.yml` en servidor de staging
3. **Producción**: Configurar SSL, secretos y deploying a production

## 📞 Ayuda

Por problemas específicos:
1. Revisar logs: `docker-compose logs -f api`
2. Verificar salud: `curl http://localhost:3001/health`
3. Revisar [DOCKER.md](./DOCKER.md) - Sección "Solución de Problemas"

---

**¡El backend está listo para Docker! 🎉**

Comienza con: `docker-compose up -d`
