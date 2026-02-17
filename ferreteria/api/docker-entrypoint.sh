#!/bin/sh

# ============================================
# Docker Entrypoint Script for Development
# ============================================
# Este script se ejecuta cuando el contenedor inicia
# Asegura que MongoDB está listo antes de iniciar la API

set -e

echo "🚀 Iniciando API de Taller SAG..."
echo "📍 Entorno: ${NODE_ENV:-development}"

# Esperar a que MongoDB esté disponible (usando nc o sleep)
if [ "$NODE_ENV" != "production" ]; then
  echo "⏳ Esperando a MongoDB..."
  for i in 1 2 3 4 5; do
    if nc -z mongodb 27017; then
      echo "✅ MongoDB está disponible"
      break
    fi
    echo "⏳ Reintentando conexión a MongoDB ($i/5)..."
    sleep 2
  done
fi

echo "✨ Ejecutando API..."

# Ejecutar el comando pasado al contenedor
exec "$@"
