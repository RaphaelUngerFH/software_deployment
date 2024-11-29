# Lab 3
This lab consists of the creation of containers for a MySQL database with wordpress in two different parts.

## Part 1
The first part is located in *Lab3/Teil1*.

Deployment:

```console
docker compose up -d
```
After the deployment, the webpage should run on localhost:8000 and port 80.

Shutdown:
```console
docker compose down
```

## Part 2
The second part is located in *Lab3/Teil2*. [MariaDB](https://mariadb.org/) is used as a database as it is simpler to be installed on Debian and is compatible with MySQL.