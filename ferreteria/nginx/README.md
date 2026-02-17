# 🌐 Nginx Configuration

Configuraciones de Nginx para desarrollo y producción.

## 📁 Estructura

- `nginx.dev.conf` - Configuración para desarrollo
- `nginx.prod.conf` - Configuración para producción con SSL
- `ssl/` - Certificados SSL (crear manualmente)

## 🚀 Uso en Desarrollo

La configuración de desarrollo está incluida en `docker-compose.yml` pero es **opcional**.

Para usarla, descomentar la sección nginx en docker-compose.yml y ejecutar:

```bash
docker-compose up -d
```

Acceso:
- API: `http://localhost/api`
- Health: `http://localhost/health`

## 🔒 Configuración SSL para Producción

### Generar certificados autofirmados (testing)

```bash
mkdir -p nginx/ssl

# Generar key privada
openssl genrsa -out nginx/ssl/key.pem 2048

# Generar certificado
openssl req -new -x509 -key nginx/ssl/key.pem -out nginx/ssl/cert.pem -days 365
```

### Certificados reales (Let's Encrypt)

```bash
# Instalar Certbot (en el host)
sudo apt-get install certbot

# Generar certificado
sudo certbot certonly --standalone -d tu-dominio.com

# Copiar a nginx/ssl/
sudo cp /etc/letsencrypt/live/tu-dominio.com/fullchain.pem nginx/ssl/cert.pem
sudo cp /etc/letsencrypt/live/tu-dominio.com/privkey.pem nginx/ssl/key.pem
sudo chown $(USER):$(USER) nginx/ssl/*
```

### Renovación automática de certificados

```bash
# Crear cron job (cada 3 meses)
sudo certbot renew --quiet

# O usar docker-certbot para automatización
```

## 📊 Funcionalidades

### Desarrollo (nginx.dev.conf)
- ✅ Reverse proxy simple
- ✅ CORS básico
- ✅ Health check
- ✅ Compression

### Producción (nginx.prod.conf)
- ✅ HTTPS/SSL
- ✅ HTTP/2 support
- ✅ OCSP stapling
- ✅ Rate limiting
- ✅ Security headers
- ✅ Gzip compression (nivel 6)
- ✅ Cache control
- ✅ DNS resolver

## 🔧 Personalización

### Cambiar dominio
En `nginx.prod.conf`, edita:
```nginx
server_name tu-dominio.com www.tu-dominio.com;
```

### Rate limiting
```bash
# API: 10 peticiones por segundo (máx 20 en ráfagas)
limit_req_zone $binary_remote_addr zone=api_limit:10m rate=10r/s;

# General: 20 peticiones por segundo (máx 30 en ráfagas)
limit_req_zone $remote_addr zone=general_limit:10m rate=20r/s;
```

### Tamaño máximo de uploads
```nginx
client_max_body_size 50M;  # Cambiar a tu valor deseado
```

## 📋 Checklist para Producción

- [ ] Certificados SSL válidos
- [ ] Dominios correctamente configurados
- [ ] Rate limiting ajustado según necesidad
- [ ] Security headers evaluados
- [ ] Cache policies configuradas
- [ ] Monitoring y logs en lugar seguro
- [ ] CORS restringido a dominios específicos
- [ ] Certificados renovados automáticamente

## 🚨 Problemas Comunes

### SSL certificate not found
```bash
# Verificar permisos
ls -la nginx/ssl/
file nginx/ssl/cert.pem nginx/ssl/key.pem
```

### CORS not working
- Verificar que se está usando endpoint correcto `/api/...`
- Revisar headers en `nginx.prod.conf`
- Verificar CORS también en backend

### Rate limiting demasiado agresivo
- Aumentar `rate` en el upstream
- Ajustar `burst` según necesidad

## 📚 Referencias

- [Nginx Official Docs](http://nginx.org/en/docs/)
- [SSL/TLS Best Practices](https://wiki.mozilla.org/Security/Server_Side_TLS)
- [Rate Limiting Guide](http://nginx.org/en/docs/http/ngx_http_limit_req_module.html)
