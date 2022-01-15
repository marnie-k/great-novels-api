CREATE DATABASE novels;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password

GRANT ALL ON heroes.* TO 'novels'@'localhost';


