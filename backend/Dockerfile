# Используем официальный образ Python
FROM python:3.12

# Устанавливаем рабочую директорию
WORKDIR /app

# Копируем зависимости
COPY requirements.txt .

# Устанавливаем зависимости
RUN pip install -r requirements.txt

# Устанавливаем Supervisor
RUN apt-get update && apt-get install -y supervisor

# Копируем код проекта
COPY . .

# Копируем конфигурацию для Supervisor
COPY supervisord.conf /etc/supervisord.conf

# Открываем порты
EXPOSE 8000

# Запуск контейнера через Supervisor
CMD ["/usr/bin/supervisord", "-c", "/etc/supervisord.conf"]
