FROM debian:latest

# Install MariaDB
RUN apt update && apt install -y mariadb-server && apt clean

WORKDIR /var/lib/mysql

EXPOSE 3306

CMD ["mysqld", "--user=root"]