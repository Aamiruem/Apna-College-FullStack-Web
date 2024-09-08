SHOW TABLES;


CREATE TABLE user(
id VARCHAR(50) PRIMARY KEY,
usename VARCHAR(50) UNIQUE,
email VARCHAR(50) UNIQUE NOT NULL ,
password VARCHAR(50) NOT NULL
);



CREATE TABLE users (
    id VARCHAR(50) PRIMARY KEY,
    username VARCHAR(50) UNIQUE,
    email VARCHAR(50) UNIQUE NOT NULL,
    password VARCHAR(50) NOT NULL
);

INSERT INTO users (id, username, email, password) VALUES (?, ?, ?, ?);
SELECT * FROM users WHERE email = ? AND password = ?;
