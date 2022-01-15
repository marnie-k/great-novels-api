CREATE DATABASE novels;

CREATE USER 'novels'@'localhost' IDENTIFIED WITH mysql_native_password BY 'L0gM31n';

GRANT ALL ON novels.* TO 'novels'@'localhost';

CREATE DATABASE great_novels;

USE great_novels;

CREATE TABLE genres (
    id INT auto_increment,
    name VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
CREATE TABLE authors (
    id INT auto_increment,
    nameFirst VARCHAR(255) NOT NULL,
    nameLast VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id)
);
CREATE TABLE novels (
    id INT auto_increment,
    authorId INT,
    title VARCHAR(255) NOT NULL,
    novelGenre VARCHAR(255) NOT NULL,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(id),
    FOREIGN KEY authorId REFERENCES authors(id)
);

CREATE TABLE linking (
    novelId INT,
    genreId INT,
    createdAt DATETIME DEFAULT NOW(),
    updatedAt DATETIME DEFAULT NOW() ON UPDATE NOW(),
    deletedAt DATETIME,
    PRIMARY KEY(novelId, genreId),
    FOREIGN KEY(novelId) REFERENCES novels(id),
    FOREIGN KEY(genreId) REFERENCES genres(id)
);

