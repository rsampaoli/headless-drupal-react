# Drupal Headless Lab

Proyecto de práctica desarrollado con una arquitectura **Headless Drupal 10 + React**, separando el backend del frontend.

El objetivo principal del proyecto es consumir contenido administrado desde Drupal mediante API y renderizarlo en una aplicación frontend moderna construida con React y Vite.

---

## 🚀 Tecnologías utilizadas

### Backend

* Drupal 10
* PHP
* Composer
* JSON:API
* DDEV

### Frontend

* React
* Vite
* JavaScript
* HTML
* CSS
* React Router
* NPM

---

## 📌 Objetivo del proyecto

Este proyecto fue creado como laboratorio de práctica para trabajar con una arquitectura desacoplada, donde Drupal funciona como CMS y proveedor de datos, mientras que React se encarga de renderizar la interfaz del usuario.

La idea es simular una estructura moderna en la que el contenido se administra desde Drupal y luego es consumido por una aplicación externa.

---

## 🧱 Estructura del proyecto

```txt
drupal-headless-lab/
├── backend/
│   ├── web/
│   ├── vendor/
│   ├── composer.json
│   ├── composer.lock
│   └── .ddev/
│
├── frontend/
│   ├── public/
│   ├── src/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   └── .env
│
├── .gitignore
└── README.md
```

---

## ⚙️ Backend - Drupal 10

El backend está construido con Drupal 10 y funciona como CMS headless.

Desde Drupal se administra el contenido que luego es consumido por el frontend mediante endpoints de API.

### Funcionalidades principales del backend

* Administración de contenido desde Drupal.
* Exposición de datos mediante JSON:API.
* Separación entre lógica de contenido y capa visual.
* Configuración local mediante DDEV.

---

## 🎨 Frontend - React + Vite

El frontend está desarrollado con React y Vite.

La aplicación consume datos provenientes del backend Drupal y los muestra en una interfaz independiente.

### Funcionalidades principales del frontend

* Consumo de datos desde Drupal.
* Renderizado dinámico de páginas.
* Estructura basada en componentes.
* Manejo de estados de carga y errores.
* Ruteo mediante React Router.

---

## 🔧 Instalación del proyecto

### 1. Clonar el repositorio

```bash
git clone https://github.com/rsampaoli/drupal-headless-lab.git
cd drupal-headless-lab
```

---

## 🐘 Instalación del backend

Ingresar a la carpeta del backend:

```bash
cd backend
```

Instalar dependencias de Composer:

```bash
composer install
```

Levantar el entorno con DDEV:

```bash
ddev start
```

Instalar Drupal o importar una base de datos existente según corresponda.

---

## ⚛️ Instalación del frontend

Ingresar a la carpeta del frontend:

```bash
cd frontend
```

Instalar dependencias:

```bash
npm install
```

Crear el archivo `.env` con la URL del backend Drupal:

```env
VITE_DRUPAL_BASE_URL=https://tu-backend-drupal.ddev.site
```

Ejecutar el entorno de desarrollo:

```bash
npm run dev
```

---

## 🔗 Conexión entre frontend y backend

El frontend consume los datos expuestos por Drupal mediante API.

Ejemplo conceptual de consumo:

```js
fetch(`${import.meta.env.VITE_DRUPAL_BASE_URL}/jsonapi/node/page`)
```

De esta forma, React obtiene el contenido desde Drupal y lo renderiza en la aplicación.

---

## 📂 Archivos no incluidos en el repositorio

Por seguridad y buenas prácticas, el repositorio no incluye:

```txt
backend/vendor/
frontend/node_modules/
frontend/.env
backend/web/sites/default/files/
backend/web/sites/default/settings.php
```

Estos archivos deben generarse o configurarse localmente en cada entorno.

---

## 🧪 Estado del proyecto

Proyecto en desarrollo y práctica.

Actualmente funciona como laboratorio para experimentar con:

* Drupal como CMS headless.
* React como frontend desacoplado.
* Consumo de APIs.
* Componentización de interfaces.
* Separación entre backend y frontend.

---

## 👨‍💻 Autor

**Ramiro Sampaoli**

GitHub: https://github.com/rsampaoli
