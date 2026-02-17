#!/bin/sh

# ============================================
# Docker Entrypoint Script for Development
# ============================================
# Este script se ejecuta cuando el contenedor inicia

set -e

echo "🚀 Iniciando API de Taller SAG..."
echo "📍 Entorno: ${NODE_ENV:-development}"
echo "✨ Ejecutando API..."

# Ejecutar el comando pasado al contenedor
exec "$@"
