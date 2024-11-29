# Dockerfile für MySQL
FROM debian:latest

RUN apt update && apt install -y mariadb-server && apt clean

VOLUME /var/lib/mysql

EXPOSE 3306

CMD ["mysqld"]