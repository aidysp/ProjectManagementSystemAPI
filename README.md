# Project management system server 🚀

Простой бэкенд для управления задачами и досками на TypeScript.

## Быстрый старт

```bash
npm install
npm run dev
```

## API Эндпоинты


## Аутентификация

```bash
POST /api/auth/register - Регистрация
POST /api/auth/login - Вход
GET /api/auth/me - Профиль
```


## Доски

```bash
GET /api/boards - Все доски
POST /api/boards - Создать доску
GET /api/boards/:id - Доска по ID
PUT /api/boards/:id - Обновить
DELETE /api/boards/:id - Удалить
```

## Тест

```bash
GET /health - Статус сервера
GET /api/test - Тест API
GET /api/test/db - Тест БД
```

## Переменные окружения

```bash
PORT=8000
JWT_SECRET=your-secret-key
DATABASE_URL=./database.sqlite
```

## Технологии
- Node.js + TypeScript
- Express
- SQLite
- JWT аутентификация



## Скрипты

```bash
npm run dev    # Запуск в разработке
npm run build  # Сборка проекта
npm start      # Запуск продакшена
```
