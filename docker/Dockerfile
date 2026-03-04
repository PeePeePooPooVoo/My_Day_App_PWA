# Используем многоступенчатую сборку
FROM node:18-alpine as builder

WORKDIR /app
COPY frontend/package*.json ./
RUN npm install
COPY frontend/ ./
# Здесь можно добавить сборку, если используете сборщик

# Этап с nginx
FROM nginx:alpine
RUN apk add --no-cache curl
COPY nginx/nginx.conf /etc/nginx/conf.d/default.conf
WORKDIR /usr/share/nginx/html

# Копируем файлы фронтенда
COPY --from=builder /app/src ./src
COPY frontend/public ./public

RUN chown -R nginx:nginx /usr/share/nginx/html && \
    chmod -R 755 /usr/share/nginx/html

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
    CMD curl -f http://localhost/ || exit 1

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]