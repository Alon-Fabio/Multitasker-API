docker image name: firstsmart

To connect to the dockers DB:

1. Get to the docker-machine ip. Get the ip by running 'docker-machine ip default'(http://192.168.99.100:8080/).
2. Go to in the browser <machine-ip>:<adminer.port>. This will prompt a GUI.
3. Select type of DB, Server = DB name, user = DB user, pass = DB pass, database = database.

Add schema:

1. Remove postgres-data.
2. docker-compose down --volumes
3. docker-compose up -b

trying:

1. > docker volume prune
2. > docker-compose up -d

# FIX

~~Adding "PGDATA: /var/lib/postgresql/data/postgres-data" to the docker-compose.yml did it.~~
~~Postgres is now initing ! :D~~
Changing the docker-compose.yml triggered the init.
