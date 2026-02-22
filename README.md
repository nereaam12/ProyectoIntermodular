# Angular + Symfony API

Aplicación full-stack con **Angular 21** (frontend) y **Symfony 7.4** (backend API REST) que implementa autenticación JWT y gestión de productos con subida de imágenes.

## Estructura del Proyecto

```
angular-api-symfony/
├── frontend/          # Angular 21 SPA
├── backend/           # Symfony 7.4 REST API
├── GUIA_API_SEGURA_JWT.md      # Guía completa de JWT
└── GUIA_SUBIDA_ARCHIVOS.md     # Guía de subida de archivos
```

## Requisitos

- **PHP** >= 8.2
- **Composer** >= 2.0
- **Node.js** >= 20
- **npm** >= 10
- **MySQL/MariaDB** (MariaDB 10.11 recomendado)

## Instalación y Configuración

### 1. Clonar el repositorio

```bash
git clone <url-del-repositorio>
cd angular-api-symfony
```

### 2. Configurar la Base de Datos

Crear una base de datos MySQL/MariaDB o importarla

`Para Windows:` Hay que entrar en Git Bash seleccionándolo al lado de una pestaña nueva de la terminal de PhpStorm para poder ejecutar el comando

```bash
docker exec -i servidor_db mariadb -u root -proot nombre_bbdd < data.sql
```

Para exportar:
```bash
docker exec servidor_db mariadb-dump -u root -proot nombre_bbdd > data.sql
```


### 3. Configurar el Backend (Symfony)

```bash
cd backend

# Instalar dependencias PHP
composer install

# Configurar variables de entorno
# Editar .env y ajustar la conexión a base de datos:
# DATABASE_URL="mysql://usuario:contraseña@127.0.0.1:3306/api_secure"

# Generar claves JWT (si no existen)
php bin/console lexik:jwt:generate-keypair

# Crear directorio de uploads
mkdir -p public/uploads
```

### 4. Configurar el Frontend (Angular)

```bash
cd frontend

# Instalar dependencias
npm install
```

## Ejecutar en Local

### Iniciar el Backend

```bash
cd backend

symfony serve --no-tls
```

El backend estará disponible en: `http://localhost:8000`

### Iniciar el Frontend

```bash
cd frontend

ng serve
```

El frontend estará disponible en: `http://localhost:4200`

## Endpoints de la API

| Método | Endpoint | Descripción | Autenticación |
|--------|----------|-------------|---------------|
| POST | `/api/register` | Registrar usuario | No |
| POST | `/api/login_check` | Iniciar sesión (obtener JWT) | No |
| GET | `/api/products` | Listar productos | Sí (JWT) |
| GET | `/api/products/{id}` | Obtener producto | Sí (JWT) |
| POST | `/api/products` | Crear producto con imágenes | Sí (JWT) |


## Troubleshooting

### Error CORS

Si recibes errores de CORS, verifica que el backend esté corriendo y que la configuración en `config/packages/nelmio_cors.yaml` permita el origen del frontend.

### Error JWT

Si el token no funciona:
1. Verifica que las claves JWT existen en `config/jwt/`
2. Regenera las claves: `php bin/console lexik:jwt:generate-keypair --overwrite`
3. Comprueba que el `JWT_PASSPHRASE` en `.env` coincide con el usado al generar las claves

## Documentación Adicional

- [GUIA_API_SEGURA_JWT.md](GUIA_API_SEGURA_JWT.md) - Guía completa sobre autenticación JWT y CORS
- [GUIA_SUBIDA_ARCHIVOS.md](../../Downloads/Angular-API-Symfony/GUIA_SUBIDA_ARCHIVOS.md) - Guía de implementación de subida de archivos

## Licencia

Este proyecto es para fines educativos.
