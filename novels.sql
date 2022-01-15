CREATE DATABASE novels;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password

GRANT ALL ON novels.* TO 'novels'@'localhost';

CREATE DATABASE great_novels;

USE great_novels;

CREATE TABLE genres (
    id INT auto_increment,
    name VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
CREATE TABLE authors (
    id INT auto_increment,
    nameFirst VARCHAR(255),
    nameLast VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
CREATE TABLE novels (
    id INT auto_increment,
    title VARCHAR(255),
    novelGenre VARCHAR(255),
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
