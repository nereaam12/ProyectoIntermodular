FROM php:8.2-fpm-alpine

# Instalar dependencias del sistema
RUN apk add --no-cache \
    nginx \
    supervisor \
    icu-dev \
    oniguruma-dev \
    libzip-dev \
    zip \
    unzip \
    openssl

# Instalar extensiones PHP
RUN docker-php-ext-install \
    pdo_mysql \
    intl \
    zip \
    opcache \
    bcmath

# Instalar Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Directorio de trabajo
WORKDIR /var/www/html

# Copiar archivos del proyecto
COPY . .

# Instalar dependencias de Composer en modo producción
RUN composer install \
    --no-dev \
    --optimize-autoloader \
    --no-interaction \
    --no-progress

# Generar claves JWT (las crea en tiempo de build)
RUN mkdir -p config/jwt && \
    openssl genrsa -out config/jwt/private.pem -aes256 -passout env:JWT_PASSPHRASE 4096 && \
    openssl rsa -pubout -in config/jwt/private.pem -out config/jwt/public.pem \
    -passin env:JWT_PASSPHRASE

# Dar permisos a var/
RUN mkdir -p var/cache var/log && \
    chmod -R 777 var/

# Configurar Nginx
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Configurar Supervisor (gestiona nginx + php-fpm juntos)
COPY docker/supervisord.conf /etc/supervisord.conf

EXPOSE 80

CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
