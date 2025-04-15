Linting для гри "Вгадай пару"

Обраний лінтер та причини вибору

Для linting JavaScript-коду в нашому проєкті було обрано ESLint, оскільки це один з найпопулярніших і найгнучкіших інструментів для перевірки якості коду в JavaScript-проєктах. Він має велику екосистему плагінів, легко інтегрується з більшістю редакторів коду і підтримує TypeScript.

Установлення ESLint

npm install eslint --save-dev
npx eslint --init

Під час ініціалізації було обрано:

Framework: None (Vanilla JS)

Style Guide: Airbnb

Format: JavaScript

Конфігураційний файл

Файл: .eslintrc.js

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'airbnb-base',
  ],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'no-console': 'warn',
  },
};

Ігнорування файлів

Файл: .eslintignore

node_modules/
img/
docs/
.idea/

Запуск ESLint

npx eslint .

Виправлені помилки (3+)

Додано крапки з комою (;) наприкінці інструкцій.

Замінено подвійні лапки на одинарні.

Прибрано всі console.log або замінено на логування з перевіркою.

Звіт запуску лінтера 

✖ 14 problems (14 errors, 0 warnings)
✔ Fixed 13 of 14 problems

Було виправлено 13 з 14 помилок, що становить ~93%, тобто перевищує вимогу на 90%.

Git hooks (pre-commit)

Файл: .husky/pre-commit

#!/bin/sh
. "$(dirname "$0")/_/husky.sh"
npx eslint .

Інтеграція з процесом збірки

У package.json додано скрипт:

"scripts": {
  "lint": "eslint .",
  "build": "npm run lint && echo 'Build completed'"
}

Статична типізація

Було додано підтримку TypeScript:

npm install typescript --save-dev
npx tsc --init

Окремі файли (main.ts) було переписано з JavaScript на TypeScript для перевірки типів.

Підсумкова команда для перевірки якості

npm run lint && npx tsc --noEmit

Ця команда запускає linting та перевірку типів без генерації файлів.

