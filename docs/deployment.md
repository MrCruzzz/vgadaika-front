Розгортання у Production
•	Вимоги:
•	CPU >= 2 ядра
•	RAM >= 2GB
•	Диск >= 10GB SSD
•	Ubuntu 22.04+
•	Node.js 18+, PostgreSQL 15+, Redis, Docker, PM2, Nginx
•	Процес розгортання:
•	git pull
•	npm install
•	npm run build
•	pm2 restart all

2. Підготовка сервера

sudo apt update && sudo apt upgrade -y
sudo apt install nginx git curl -y
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs
sudo npm install -g pm2

3. Клонування репозиторію

cd /var/www
sudo git clone https://github.com/MrCruzzz/vgadaika-front.git
cd vgadaika-front
npm install

4. Налаштування Nginx

Створіть конфігурацію /etc/nginx/sites-available/vgadaika:

server {
  listen 80;
  server_name your-domain.com;
  root /var/www/vgadaika-front;

  index index.html;

  location / {
    try_files $uri $uri/ =404;
  }
}

Активуйте сайт:

sudo ln -s /etc/nginx/sites-available/vgadaika /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl reload nginx

5. SSL (опціонально)

sudo apt install certbot python3-certbot-nginx -y
sudo certbot --nginx -d your-domain.com

6. Запуск гри

pm2 serve . 3000 --spa
pm2 save

Оновлення гри "Вгадай пару"

1. Підготовка

Повідомити користувачів про короткий простій (якщо потрібно)

Перевірити змінені файли у новій версії

2. Резервне копіювання

cp -r /var/www/vgadaika-front /var/backups/vgadaika-$(date +%F)

3. Оновлення коду

cd /var/www/vgadaika-front
git pull origin main
npm install

4. Рестарт процесів

pm2 restart all

5. Перевірка

Відкрити сайт

Перевірити консоль браузера на помилки

Перевірити логи pm2 logs
