# Modo de Mantenimiento - Página de Productos

## Descripción

La página de productos ahora incluye un modo de mantenimiento que permite mostrar un mensaje personalizado a los usuarios cuando el sistema está en mantenimiento, en lugar de mostrar la lista de productos.

## Configuración

### Activar el Modo de Mantenimiento

Para activar el modo de mantenimiento, edita el archivo `.env` en la carpeta `client` y cambia el valor de `REACT_APP_MAINTENANCE_MODE` a `true`:

```env
REACT_APP_MAINTENANCE_MODE=true
```

### Desactivar el Modo de Mantenimiento

Para desactivar el modo de mantenimiento y volver a mostrar los productos normalmente, cambia el valor a `false`:

```env
REACT_APP_MAINTENANCE_MODE=false
```

## Comportamiento

### Cuando el modo de mantenimiento está ACTIVADO (`true`)
- Se muestra un mensaje: "Estamos en mantenimiento - Estaremos de vuelta pronto"
- Los productos NO se cargan ni se muestran
- Incluye un ícono de advertencia en color amarillo

### Cuando el modo de mantenimiento está DESACTIVADO (`false`)
La página funciona normalmente con la siguiente lógica:

1. **Cargando**: Muestra el componente `Loader` mientras se cargan los productos
2. **Error**: Si hay un error, muestra el componente `ErrorCard` con el mensaje de error
3. **Sin productos**: Si no hay productos después de cargar, muestra el mensaje "No hay productos disponibles"
4. **Con productos**: Muestra la lista de productos normalmente

## Notas Importantes

- Después de cambiar el valor en el archivo `.env`, es necesario **reiniciar el servidor de desarrollo** para que los cambios surtan efecto
- El modo de mantenimiento tiene prioridad sobre cualquier otro estado (carga, error, productos vacíos)
- Los mensajes están en español y son amigables para el usuario

## Ejemplo de Uso

```bash
# 1. Editar el archivo .env
# REACT_APP_MAINTENANCE_MODE=true

# 2. Reiniciar el servidor de desarrollo
npm run dev

# 3. Visitar la página de productos
# Verás el mensaje de mantenimiento

# 4. Para volver a la normalidad, cambiar a false y reiniciar
# REACT_APP_MAINTENANCE_MODE=false
```
