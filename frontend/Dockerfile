# Используем официальный образ Node.js
FROM node:16-alpine

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем package.json и устанавливаем зависимости
COPY package.json package-lock.json ./
RUN npm install

# Копируем весь код проекта
COPY . .

# Собираем фронтенд
RUN npm run dev

# Устанавливаем сервер для статических файлов
RUN npm install -g serve

# Открываем порт
EXPOSE 3000

# Команда для старта
CMD ["serve", "-s", "build", "-l", "3000"]
