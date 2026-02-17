# 🚢 Deployment Guide - Backend

Guía completa para desplegar el backend en diferentes plataformas.

## 📋 Tabla de Contenidos

1. [Requisitos](#requisitos)
2. [Local Development](#local-development)
3. [Staging](#staging)
4. [Production](#production)
5. [Plataformas](#plataformas)
6. [CI/CD](#cicd)

---

## 📦 Requisitos

- Docker (20.10+)
- Docker Compose (1.29+)
- Git
- Credenciales de la plataforma de deployment

---

## 💻 Local Development

### Quick Start

```bash
# 1. Setup
cp api/.env.example api/.env

# 2. Editar variables
nano api/.env

# 3. Iniciar
docker-compose up -d

# 4. Verificar
docker-compose ps
docker-compose logs api
```

### Hot Reload Activated
Los cambios en `src/` se reflejan automáticamente.

---

## 🧪 Staging

Ambiente similar a producción pero para testing.

### Setup

```bash
# Crear archivo .env.staging
cp .env.prod.example .env.staging
nano .env.staging

# Editar variables de staging
NODE_ENV=staging
MONGODB_URI=mongodb://mongodb-staging:27017/tallersag
```

### Iniciar

```bash
docker-compose -f docker-compose.prod.yml \
  --project-name tallersag-staging \
  up -d
```

### Verificar

```bash
docker ps | grep staging
curl http://localhost:3001/health
```

---

## 🏭 Production

### Pre-Deployment Checklist

- [ ] Todos los tests pasando `docker-compose exec api pnpm test`
- [ ] Variables de entorno configuradas
- [ ] MongoDB upgradeable (replica set recomendado)
- [ ] Certificados SSL válidos
- [ ] Backups automáticos configurados
- [ ] Monitoring en lugar

### Arquitectura Recomendada

```
                    ┌─────────────────┐
                    │   Certificados  │
                    │   SSL (DNS,     │
                    │   Load Balancer)│
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Nginx Reverse  │
                    │  Proxy Layer    │
                    └────────┬────────┘
                             │
            ┌────────────────┼─────────────────┐
            │                │                 │
    ┌───────▼──────┐ ┌──────▼────────┐ ┌──────▼────────┐
    │   API Pod 1  │ │   API Pod 2   │ │   API Pod 3   │
    │ (tallersag-  │ │ (tallersag-   │ │ (tallersag-   │
    │   api-1)     │ │   api-2)      │ │   api-3)      │
    └──────────────┘ └───────────────┘ └───────────────┘
            │                │                 │
            └────────────────┼─────────────────┘
                             │
                    ┌────────▼────────┐
                    │  MongoDB        │
                    │  Replica Set    │
                    │  (3 nodes)      │
                    └─────────────────┘
```

### Deployment

```bash
# 1. Construir imagen
docker build -f api/Dockerfile -t tu-registry/tallersag-api:1.0.0 \
  --target production \
  ./api

# 2. Push a registry
docker push tu-registry/tallersag-api:1.0.0

# 3. Configurar variables
cp .env.prod.example .env.prod.local

# 4. Actualizar docker-compose.prod.yml
# - Cambiar imagen a tu-registry/tallersag-api:1.0.0
# - Configurar secretos de MongoDB
# - Configurar SSL en Nginx

# 5. Iniciar servicios
docker-compose -f docker-compose.prod.yml up -d

# 6. Verificar
docker-compose -f docker-compose.prod.yml ps
docker-compose -f docker-compose.prod.yml logs api
```

### Monitoreo en Producción

```bash
# Logs
docker-compose -f docker-compose.prod.yml logs -f api

# Estadísticas
docker stats

# Health check
curl https://tu-dominio.com/health
```

### Backups Diarios

```bash
# Script backup automático
#!/bin/bash
BACKUP_DIR="backups/$(date +%Y-%m-%d)"
mkdir -p $BACKUP_DIR

docker-compose -f docker-compose.prod.yml exec -T mongodb \
  mongodump --out=/backups/dump_$(date +%Y%m%d_%H%M%S)

# Agregar a cron
0 2 * * * /path/to/backup.sh
```

---

## 🌐 Plataformas

### Heroku

```bash
# 1. Login
heroku login

# 2. Crear app
heroku create tallersag-api

# 3. Agregar buildpack Docker
heroku stack:set container

# 4. Crear Dockerfile.heroku
FROM node:18-alpine
WORKDIR /app
# Habilitar corepack para usar pnpm
RUN corepack enable
COPY package*.json pnpm-lock.yaml ./
RUN pnpm install --prod
COPY . .
EXPOSE $PORT
CMD ["node", "index.js"]

# 5. Deploy
git push heroku main
```

### AWS (ECS)

```bash
# 1. Crear repositorio ECR
aws ecr create-repository --repository-name tallersag-api

# 2. Push imagen
docker build -t tallersag-api:latest .
docker tag tallersag-api:latest 123456789.dkr.ecr.us-east-1.amazonaws.com/tallersag-api:latest
docker push 123456789.dkr.ecr.us-east-1.amazonaws.com/tallersag-api:latest

# 3. Crear cluster ECS y task definition
# 4. Usar AWS RDS para MongoDB (Atlas es más fácil)
```

### DigitalOcean App Platform

```bash
# 1. Crear archivo app.yaml
name: tallersag-api
services:
  - name: api
    github:
      repo: usuario/tallersag
      branch: main
    dockerfile_path: api/Dockerfile
    http_port: 3001
databases:
  - name: mongodb
    engine: MONGODB
    version: "6"

# 2. Deploy
doctl apps create --spec app.yaml

# 3. Ver status
doctl apps describe APP_ID
```

### Google Cloud Run

```bash
# 1. Configurar autenticación
gcloud auth login

# 2. Construir y push
gcloud builds submit --tag gcr.io/PROJECT-ID/tallersag-api

# 3. Deploy
gcloud run deploy tallersag-api \
  --image gcr.io/PROJECT-ID/tallersag-api \
  --platform managed \
  --region us-central1 \
  --memory 512Mi \
  --set-env-vars NODE_ENV=production
```

### Docker Swarm

```bash
# 1. Inicializar swarm
docker swarm init

# 2. Crear secrets
echo "mongodb-password" | docker secret create mongo_root_password -

# 3. Deploy
docker stack deploy -c docker-compose.prod.yml tallersag

# 4. Ver servicios
docker service ls
docker service logs tallersag_api
```

### Kubernetes

```bash
# 1. Crear deployment.yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: tallersag-api
spec:
  replicas: 3
  selector:
    matchLabels:
      app: tallersag-api
  template:
    metadata:
      labels:
        app: tallersag-api
    spec:
      containers:
      - name: api
        image: tallersag-api:1.0.0
        ports:
        - containerPort: 3001
        env:
        - name: NODE_ENV
          value: "production"
        - name: MONGODB_URI
          valueFrom:
            secretKeyRef:
              name: api-secrets
              key: mongodb-uri
        livenessProbe:
          httpGet:
            path: /health
            port: 3001
          initialDelaySeconds: 30
          periodSeconds: 10

# 2. Deploy
kubectl apply -f deployment.yaml

# 3. Ver pods
kubectl get pods
kubectl logs deployment/tallersag-api
```

---

## 🔄 CI/CD

### GitHub Actions

```yaml
# .github/workflows/deploy.yml
name: Deploy API

on:
  push:
    branches: [main]
    paths:
      - 'api/**'
      - '.github/workflows/deploy.yml'

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: docker/setup-docker@v2
      - run: docker-compose run api pnpm test

  deploy:
    needs: test
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: docker/setup-docker@v2
      - run: |
          docker build -t tallersag-api:${{ github.sha }} api/
          # Push a registry
          # Deploy a Kubernetes/Heroku/etc
```

### GitLab CI

```yaml
# .gitlab-ci.yml
stages:
  - test
  - build
  - deploy

test:
  stage: test
  image: docker:latest
  script:
    - docker-compose run api pnpm test

build:
  stage: build
  image: docker:latest
  script:
    - docker build -t registry.example.com/tallersag-api:latest api/
    - docker push registry.example.com/tallersag-api:latest

deploy:
  stage: deploy
  image: alpine:latest
  script:
    - kubectl set image deployment/tallersag-api api=registry.example.com/tallersag-api:latest
```

---

## 📊 Monitoreo

### Prometheus + Grafana

```yaml
# docker-compose.prod.yml - agregar servicios
prometheus:
  image: prom/prometheus
  volumes:
    - ./prometheus.yml:/etc/prometheus/prometheus.yml
    - prometheus_data:/prometheus

grafana:
  image: grafana/grafana
  ports:
    - "3000:3000"
  environment:
    GF_SECURITY_ADMIN_PASSWORD: admin
```

### ELK Stack (Elasticsearch, Logstash, Kibana)

```yaml
elasticsearch:
  image: docker.elastic.co/elasticsearch/elasticsearch:7.14.0
  environment:
    - discovery.type=single-node

kibana:
  image: docker.elastic.co/kibana/kibana:7.14.0
  ports:
    - "5601:5601"
```

---

## 🔒 Seguridad - Checklist Final

- [ ] HTTPS/SSL configurado
- [ ] Secrets en variables de entorno (no en código)
- [ ] Rate limiting activado
- [ ] Logs y monitoreo en lugar
- [ ] Backups automáticos
- [ ] CORS restringido
- [ ] Credenciales de DB separadas del código
- [ ] Network policies en Kubernetes
- [ ] Secrets rotation policy
- [ ] Antivirus/Malware scanning en CI/CD

---

## 📞 Soporte

Para problemas específicos de deployment, revisar:
- [DOCKER.md](./DOCKER.md)
- [nginx/README.md](./nginx/README.md)
- Logs: `docker-compose logs -f api`

