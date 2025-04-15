. Стратегія резервного копіювання
•	Тип: Повне
•	Частота: щоденно о 02:00
•	Ротація: зберігати останні 7 копій
3. Приклад скрипту backup.sh
#!/bin/bash
DATE=$(date +"%F")
BACKUP_DIR="/var/backups/vgadaika"
mkdir -p $BACKUP_DIR/$DATE
cp -r /var/www/vgadaika-front $BACKUP_DIR/$DATE/code
cp /etc/nginx/sites-available/vgadaika $BACKUP_DIR/$DATE/
cp -r /etc/letsencrypt $BACKUP_DIR/$DATE/ssl
find $BACKUP_DIR -maxdepth 1 -type d -mtime +7 -exec rm -rf {} \;

