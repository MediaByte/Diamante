-- Deploy database tables:
\i '/docker-entrypoint-initdb.d/tables/users.sql'
\i '/docker-entrypoint-initdb.d/tables/login.sql'
\i '/docker-entrypoint-initdb.d/tables/master.sql'
\i '/docker-entrypoint-initdb.d/tables/slave.sql'
