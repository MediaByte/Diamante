FROM postgres:11.1

ADD /tables /docker-entrypoint-initdb.d/tables
ADD /stored /docker-entrypoint-initdb.d/stored
ADD deploy_schemas.sql /docker-entrypoint-initdb.d/