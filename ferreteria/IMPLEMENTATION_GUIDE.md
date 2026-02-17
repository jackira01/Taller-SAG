# Implementación de Sistema de Registro y Roles (Admin/User)

## ✅ Cambios Realizados

### Backend (API)

#### 1. **Schema Users** (`api/src/schemas/Users.js`)
- ✅ Agregada propiedad `rol` con enum: `['admin', 'user']`
- ✅ Valor por defecto: `'user'`
- ✅ Campo `user` ahora es `unique: true`

#### 2. **Controladores**
- ✅ **POST Register** (`api/src/controllers/users/post.user.js`)
  - Valida que usuario no exista
  - Valida que las contraseñas coincidan
  - Hashea la contraseña con bcryptjs
  - Crea usuario con rol `'user'` por defecto
  
- ✅ **GET Login** (`api/src/controllers/users/get.user.js`)
  - Ahora usando bcryptjs para comparar contraseñas
  - Retorna objeto con: `isLoggedIn`, `user`, `rol`
  - Validaciones mejoradas con mensajes de error

#### 3. **Rutas** (`api/src/routes/users.router.js`)
- ✅ `POST /users/register` - Registro de usuarios
- ✅ `POST /users/login` - Login de usuarios

### Frontend (Client)

#### 1. **Redux**
- ✅ **AdminSlice** - Refactorizado con estructura:
  ```javascript
  {
    isLoggedIn: boolean,
    user: string,
    rol: string
  }
  ```
  - Nueva acción `logout` para cerrar sesión

- ✅ **userThunk** - Nuevas acciones:
  - `loginVerify()` - Actualizada para nuevo endpoint
  - `registerUser()` - Nueva acción para registro

- ✅ **errorSlice** - Ajustado para usar `errorMessage`

#### 2. **Componentes**
- ✅ **RegisterForm** (`client/src/Components/Login/RegisterForm.jsx`)
  - Formulario de registro con validaciones
  - Campos: usuario, contraseña, confirmar contraseña
  - Mensajes de éxito/error
  - Link para cambiar a login

- ✅ **LoginForm** - Modificado
  - Mejor manejo de errores
  - Link para cambiar a registro
  - Indicador de carga

- ✅ **LoginPage** - Refactorizado
  - Toggle entre LoginForm y RegisterForm
  - Redirección automática si está logeado

- ✅ **ProtectedRoute** (`client/src/Components/ProtectedRoute.jsx`)
  - Protege rutas solo para admins
  - Redirige a `/login` si no cumple requisitos

- ✅ **Dashboard** (`client/src/Views/Dashboard/Dashboard.jsx`)
  - Nueva página separada para administración
  - Solo accesible para usuarios con rol `'admin'`
  - Contiene el DataTable que antes estaba en LoginPage

- ✅ **NavBar** - Actualizado
  - Link "Dashboard" solo visible para admins
  - Botón de logout
  - Lógica para mostrar/ocultar según autenticación

#### 3. **Rutas** (`client/src/App.jsx`)
- ✅ Nueva ruta `/dashboard` protegida por ProtectedRoute

## 🚀 Pasos para Usar

### 1. Dependencias (Ya Instaladas ✅)

bcryptjs ya se encuentra en las dependencias del proyecto, así que no hay que instalar nada adicional.

```bash
# Verificar en api/package.json:
# "bcryptjs": "^2.4.3"
```

### 2. Crear el Primer Usuario Admin

```bash
# Desde el directorio raíz del proyecto
cd api
node src/init-admin.js
```

Esto creará un usuario admin con:
- **Usuario:** `admin`
- **Contraseña:** `admin123`
- **Rol:** `admin`

⚠️ **IMPORTANTE:** Cambia esta contraseña después de la primera vez que inicies sesión.

### 3. Iniciar el Proyecto

**Backend:**
```bash
cd api
pnpm start
```

**Frontend:**
```bash
cd client
pnpm start
```

## 📝 Flujo de Uso

### Para Nuevos Usuarios (Registro)
1. Ir a `/login`
2. Hacer clic en "Regístrate"
3. Completar formulario de registro
4. Se crea usuario con rol `'user'`
5. Después de registrase, ir a login e iniciar sesión
6. Será redirigido a `/inicio` (página principal)

### Para Administrador
1. Ir a `/login`
2. Iniciar sesión con cuenta admin
3. Automáticamente redirigido a `/dashboard`
4. Verá link "Dashboard" en el NavBar
5. Puede acceder a la gestión de productos, categorías, etc.

### Protección de Rutas
- Ruta `/dashboard` está protegida
- Solo usuarios con `rol === 'admin'` pueden acceder
- Si intenta acceder sin cumplir requisitos, redirige a `/login`

## 🔐 Seguridad

- ✅ Contraseñas hasheadas con bcryptjs (salt rounds: 10)
- ✅ Validación de usuario único
- ✅ Protección de rutas en frontend
- ✅ Sistema de roles diferenciado

## 📋 Próximas Mejoras Recomendadas

1. **Tokens JWT** - Reemplazar boolean por tokens JWT para mayor seguridad
2. **Middleware de Autenticación** - Validar rol en cada request
3. **Cambio de Contraseña** - Feature para que usuarios cambien su contraseña
4. **Recuperación de Contraseña** - Sistema de reset de contraseña
5. **Validación Email** - Verificar correo al registrarse
6. **Persistencia en LocalStorage** - Guardar información de sesión

---

## 📲 Componentes Utilizados

- React Router para navegación y rutas protegidas
- Redux Toolkit para gestión de estado
- Redux Persist para persistencia de sesión entre recargas
- bcryptjs para hashing de contraseñas
- Material Tailwind para UI

## ✨ Resumen Visual de Cambios

```
┌─────────────────────────────────────┐
│     Sistema de Autenticación        │
├─────────────────────────────────────┤
│                                     │
│  FRONTEND                           │
│  ├─ LoginPage (toggle login/reg)   │
│  ├─ LoginForm                       │
│  ├─ RegisterForm (NUEVO)            │
│  ├─ Dashboard (NUEVO)               │
│  ├─ ProtectedRoute (NUEVO)          │
│  ├─ NavBar (actualizado)            │
│  └─ Redux (actualizado)             │
│                                     │
│  BACKEND                            │
│  ├─ POST /users/register (NUEVO)   │
│  ├─ POST /users/login (actualizado) │
│  ├─ Schema Users (actualizado)      │
│  └─ init-admin.js (NUEVO)          │
│                                     │
└─────────────────────────────────────┘
```
