/**
 * CORS Configuration
 * Define las URLs permitidas para solicitudes cross-origin
 */

const getCorsOptions = () => {
  // Parsear URLs permitidas desde variable de entorno
  const allowedOrigins = process.env.CORS_ORIGINS
    ? process.env.CORS_ORIGINS.split(',').map((origin) => origin.trim())
    : ['http://localhost:3000'];

  return {
    origin: (origin, callback) => {
      // Permitir si no hay origin (requests sin origin, ej: mobile apps)
      if (!origin) {
        return callback(null, true);
      }

      if (allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error('CORS no permitido: ' + origin));
      }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS', 'PATCH'],
    allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
    exposedHeaders: ['X-Total-Count'], // Headers que el cliente puede leer
    maxAge: 86400, // 24 horas - tiempo de cacheo preflight
  };
};

module.exports = getCorsOptions;
