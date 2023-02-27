CREATE USER 'username'@'ip' IDENTIFIED WITH mysql_native_password BY 'password';
GRANT ALL PRIVILEGES ON database_name.* TO 'username'@'localhost';
