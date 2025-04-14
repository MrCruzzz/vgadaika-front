README.md (Документація до проєкту Telegram Game Bot)
Мета
Створити Telegram-бота, який дозволяє користувачам грати у міні-гру в Telegram. Проєкт реалізовано у рамках бакалаврської роботи з демонстрацією використання Git Flow.
Технології
- Node.js
- Express.js
- node-telegram-bot-api
- Telegram Bot Platform
Початок роботи
1. Створення бота через BotFather:
   - Відкрийте BotFather.
   - Створіть нового бота через команду /newbot.
   - Увімкніть inline режим через /setinline.
   - Створіть гру за допомогою /newgame.

2. Налаштування середовища:
   - Клонуйте репозиторій:
     git clone https://github.com/yourusername/telegram-game-bot.git
     cd telegram-game-bot
   - Ініціалізуйте проєкт:
     npm init -y
   - Встановіть залежності:
     npm install express node-telegram-bot-api
   - Створіть файл index.js та додайте базовий код:
Код для index.js
const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
Структура проєкту
telegram-game-bot/
├── index.js           # Головний файл бота
├── .gitignore         # Ігнорує node_modules, .env, .idea та ін.
├── README.md          # Документація
├── LICENSE            # Ліцензія (MIT)

.gitignore
node_modules/
.env
.idea/
Ліцензія
Цей проєкт має ліцензію MIT. Деталі в LICENSE.
Автор
Міщенко Кіріл
Група ІН-13
2025
