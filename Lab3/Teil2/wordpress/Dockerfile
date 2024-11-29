FROM debian:latest

# Install Apache and PHP
RUN apt update && apt install -y apache2 php php-mysql wget && apt clean

# Install Wordpress
RUN wget https://wordpress.org/latest.tar.gz && \
    tar -xzf latest.tar.gz && \
    mv wordpress/* /var/www/html/ && \
    chown -R www-data:www-data /var/www/html && \
    rm latest.tar.gz

COPY wp-config.php /var/www/html/wp-config.php

VOLUME /var/www/html

EXPOSE 80

CMD ["apachectl", "-D", "FOREGROUND"]
