# Telegram Game Bot 🎮

## 📌 Мета  
Створити Telegram-бота, який дозволяє користувачам грати у міні-гру безпосередньо в Telegram.  
Проєкт реалізовано у рамках бакалаврської роботи з демонстрацією використання Git Flow.

## 🛠️ Технології

- Node.js  
- Express.js  
- [node-telegram-bot-api](https://github.com/yagop/node-telegram-bot-api)  
- Telegram Bot Platform

## 🚀 Початок роботи

### 1. Створення бота через BotFather:

- Відкрийте BotFather в Telegram  
- Створіть нового бота через команду `/newbot`  
- Увімкніть inline режим через `/setinline`  
- Створіть гру за допомогою `/newgame`

### 2. Клонування проєкту та налаштування

```bash
git clone https://github.com/your-username/telegram-game-bot.git
cd telegram-game-bot
npm install
3. Створіть файл index.js, додайте базовий код:
js
Копировать
Редактировать
const express = require("express");
const path = require("path");
const TelegramBot = require("node-telegram-bot-api");
Структура проєкту
bash
Копировать
Редактировать
telegram-game-bot/
├── index.js           # Головний файл бота
├── .gitignore         # Ігнорує node_modules, .env, .idea та ін.
├── README.md          # Документація
├── LICENSE            # Ліцензія (MIT)
├── docs/              # Згенерована документація
├── src/               # Основна логіка бота
.gitignore
bash
Копировать
Редактировать
node_modules/
.env
.idea/
 Документування коду
У проєкті використовується формат JSDoc для опису публічних функцій, класів та методів. Це дозволяє автоматично генерувати документацію та полегшує підтримку коду.

Основні правила:

Використовувати /** ... */ JSDoc-коментарі для всіх публічних функцій

Коментар повинен містити опис, перелік параметрів та повертається значення

Документуються лише функції, які експортуються або використовуються в інших модулях

Приклад:

js
Копировать
Редактировать
/**
 * Обробляє команду /start.
 * @param {TelegramBot} bot - Екземпляр бота Telegram
 * @param {Object} msg - Об'єкт повідомлення
 * @returns {void}
 */
function handleStart(bot, msg) {
  bot.sendMessage(msg.chat.id, "Вітаємо у грі!");
}
🧾 Інструкція з генерації документації
Документація генерується автоматично за допомогою JSDoc:

bash
Копировать
Редактировать
npm install --save-dev jsdoc
npx jsdoc -c jsdoc.conf.json
Згенерована документація зберігається у папці docs/ і може бути опублікована через GitHub Pages.

🔁 Інтеграція з CI/CD
Генерація документації автоматизована через GitHub Actions. Після кожного коміту до main відбувається:

Статичний аналіз ESLint

Генерація документації JSDoc

Деплой на GitHub Pages (якщо увімкнено)

⚖️ Ліцензія
Цей проєкт має ліцензію MIT. Деталі — у файлі LICENSE.

👤 Автор
Міщенко Кіріл
Група ІН-13
2025
