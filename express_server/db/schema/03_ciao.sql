DROP TABLE IF EXISTS posts CASCADE;
DROP TABLE IF EXISTS cards CASCADE;
DROP TABLE IF EXISTS recipients CASCADE;
DROP TABLE IF EXISTS contributors CASCADE;
DROP TABLE IF EXISTS users CASCADE;

CREATE TABLE users(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL 
);

CREATE TABLE recipients(
    id SERIAL PRIMARY KEY NOT NULL,
    first_name VARCHAR(255) NOT NULL,
    last_name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL
    
);

CREATE TABLE cards(
    id SERIAL PRIMARY KEY NOT NULL,
    title VARCHAR(255),
    background_image VARCHAR(255),
    time_created TIMESTAMP,
    time_sent TIMESTAMP,
    owner_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    recipient_id INTEGER REFERENCES recipients(id) ON DELETE CASCADE
);


CREATE TABLE contributors(
    id SERIAL PRIMARY KEY NOT NULL,
    con_name VARCHAR(255),
    email VARCHAR(255) NOT NULL,
    card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE
);

CREATE TABLE posts(
    id SERIAL PRIMARY KEY NOT NULL,
    image VARCHAR(500),
    gif VARCHAR(255),
    video VARCHAR(255),
    text VARCHAR(255) ,
    card_id INTEGER REFERENCES cards(id) ON DELETE CASCADE,
    user_id INTEGER REFERENCES users(id) ON DELETE CASCADE,
    contributor_id INTEGER REFERENCES contributors(id) ON DELETE CASCADE
);



