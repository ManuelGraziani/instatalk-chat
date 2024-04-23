#!/usr/bin/env bash
echo "Running composer"
composer global require hirak/prestissimo
composer install --no-dev --working-dir=/var/www/html

echo "Installing node modules"
npm install --prefix=/var/www/html
npm run build --prefix=/var/www/html
npm run dev --prefix=/var/www/html

echo "Caching config..."
php artisan config:cache

echo "Caching routes..."
php artisan route:cache

echo "Running migrations..."
php artisan migrate --force