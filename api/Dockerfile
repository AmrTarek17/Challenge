# Dockerfile for Laravel API
FROM php:8.1-fpm

# Set working directory
WORKDIR /var/www

# Install system dependencies
RUN apt-get update && apt-get install -y \
    build-essential \
    libpng-dev \
    libjpeg62-turbo-dev \
    libfreetype6-dev \
    libjpeg62-turbo-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    git \
    curl

# RUN apt-get update && apt-get install -y \
#     libpng-dev \
#     libjpeg-dev \
#     libfreetype6-dev \
#     libzip-dev \
#     unzip \
#     libonig-dev\
#     && docker-php-ext-configure gd --with-freetype --with-jpeg \
#     && docker-php-ext-install gd \
#     && docker-php-ext-install pdo pdo_mysql mbstring zip

# Clear cache
RUN apt-get clean && rm -rf /var/lib/apt/lists/*

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Install Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Copy the custom PHP-FPM configuration
COPY ./www.conf /usr/local/etc/php-fpm.d/www.conf

# Copy application files
COPY . .

# Install application dependencies, including CORS
RUN composer install --no-dev --optimize-autoloader


# Modify CORS settings in config/cors.php
RUN echo "<?php return [\
    'paths' => ['api/*', 'sanctum/csrf-cookie'],\
    'allowed_methods' => ['*'],\
    'allowed_origins' => ['*'], \
    'allowed_origins_patterns' => [],\
    'allowed_headers' => ['*'],\
    'exposed_headers' => [],\
    'max_age' => 0,\
    'supports_credentials' => false,\
];" > /var/www/config/cors.php

# Publish CORS config
RUN php artisan vendor:publish --provider="Fruitcake\\Cors\\CorsServiceProvider"

# Set permissions for Laravel
RUN chown -R www-data:www-data /var/www/storage /var/www/bootstrap/cache



# Expose port 8000 and start PHP-FPM server
EXPOSE 8000
CMD ["php-fpm", "--nodaemonize"]
