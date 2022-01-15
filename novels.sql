CREATE DATABASE novels;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password

GRANT ALL ON novels.* TO 'novels'@'localhost';

CREATE DATABASE great_novels;

USE great_novels;

