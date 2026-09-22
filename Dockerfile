# 1. Gunakan web server Nginx versi Alpine yang sangat ringan
FROM nginx:alpine

# 2. Salin semua file project (HTML, CSS, JS) ke folder default Nginx
COPY . /usr/share/nginx/html

# 3. Buka port 80 di dalam kontainer untuk akses web
EXPOSE 80