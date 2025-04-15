1.	Підготовка: повідомлення, резервні копії
2.	Зупинка служб: pm2 stop all
3.	Розгортання нового коду
4.	Міграція: npm run db:migrate
5.	Оновлення конфігурацій
6.	Перевірка
7.	Rollback: git checkout ...


Резервне копіювання

cp -r /var/www/vgadaika-front /var/backups/vgadaika-$(date +%F)

 Оновлення коду

cd /var/www/vgadaika-front
git pull origin main
npm install

 Рестарт процесів
