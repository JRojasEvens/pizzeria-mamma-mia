🍕 Pizzería Mamma Mía

Aplicación web de una pizzería desarrollada con React, que permite ver el catálogo de pizzas, gestionar un carrito de compras y autenticarse con JWT.

---

## 🛠️ Tecnologías utilizadas

- **React** + **Vite**
- **React Router DOM** — navegación y rutas protegidas
- **Context API** — estado global (carrito y autenticación)
- **JWT** — autenticación con el backend
- **CSS inline** — estilos personalizados

---

## 📁 Estructura del proyecto

```
proyecto/
├── backend/                  # Servidor Express con API REST
└── mamma-mia-frontend/       # Aplicación React
    └── src/
        ├── components/
        │   ├── Header.jsx
        │   ├── Navbar.jsx
        │   ├── Footer.jsx
        │   └── CardPizza.jsx
        ├── context/
        │   ├── CartContext.jsx
        │   └── UserContext.jsx
        ├── pages/
        │   ├── Home.jsx
        │   ├── Pizza.jsx
        │   ├── Cart.jsx
        │   ├── Login.jsx
        │   ├── Register.jsx
        │   ├── Profile.jsx
        │   └── NotFound.jsx
        ├── App.jsx
        └── main.jsx
```

---

## ⚙️ Requisitos previos

Asegúrate de tener instalado:

- [Node.js](https://nodejs.org/) v18 o superior
- npm v9 o superior

Puedes verificarlo con:

```bash
node --version
npm --version
```

---

## 🚀 Instalación y ejecución

El proyecto tiene dos partes: **backend** y **frontend**. Ambos deben estar corriendo al mismo tiempo en terminales separadas.

### 1. Clonar o descargar el proyecto

```bash
git clone <url-del-repositorio>
cd proyecto
```

---

### 2. Levantar el Backend

```bash
# Entrar a la carpeta del backend
cd backend

# Instalar dependencias
npm install

# Iniciar el servidor
npm start
```

✅ El backend quedará corriendo en: `http://localhost:5000`

Puedes verificarlo abriendo en el navegador:
```
http://localhost:5000/api/pizzas
```

---

### 3. Levantar el Frontend

Abre una **nueva terminal** (sin cerrar la del backend):

```bash
# Entrar a la carpeta del frontend
cd mamma-mia-frontend

# Instalar dependencias
npm install

# Iniciar la aplicación
npm run dev
```

✅ La aplicación quedará disponible en: `http://localhost:5173`

---

## 📌 Endpoints del Backend

| Método | Ruta | Descripción |
|--------|------|-------------|
| GET | `/api/pizzas` | Lista todas las pizzas |
| GET | `/api/pizzas/:id` | Detalle de una pizza |
| POST | `/api/auth/register` | Registrar usuario |
| POST | `/api/auth/login` | Iniciar sesión |
| GET | `/api/auth/me` | Perfil del usuario autenticado |
| POST | `/api/checkouts` | Enviar carrito de compras |

### Body para login y register:
```json
{
  "email": "test@example.com",
  "password": "123123"
}
```

### Header para rutas protegidas:
```
Authorization: Bearer <token_jwt>
```

---

## 🔐 Rutas de la aplicación

| Ruta | Componente | Protección |
|------|------------|------------|
| `/` | Home | Pública |
| `/pizza/:id` | Pizza | Pública |
| `/cart` | Cart | Pública |
| `/login` | Login | Solo sin sesión |
| `/register` | Register | Solo sin sesión |
| `/profile` | Profile | Solo con sesión |
| `/404` | NotFound | Pública |

---

## 🧪 Credenciales de prueba

Puedes registrarte con cualquier email o usar estas credenciales de ejemplo:

```
Email:    test@example.com
Password: 123123
```

---

## ✨ Funcionalidades

- 🍕 Catálogo de pizzas cargado desde la API
- 🔍 Detalle de cada pizza con ingredientes y precio
- 🛒 Carrito de compras con agregar, quitar y modificar cantidades
- 💳 Checkout enviado al backend con autenticación JWT
- 🔐 Login y Register con validación
- 👤 Perfil del usuario autenticado
- 🔒 Rutas protegidas según estado de sesión
- 📱 Diseño responsive adaptable a distintas pantallas

---

## 🗒️ Notas

- El backend debe estar corriendo **antes** de iniciar el frontend.
- Ambos servidores deben estar activos al mismo tiempo.
- El backend corre en el puerto **5000** y el frontend en el **5173**.
- Las vulnerabilidades que aparecen al hacer `npm install` son advertencias de desarrollo y no afectan el funcionamiento.
