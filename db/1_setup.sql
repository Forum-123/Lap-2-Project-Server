DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id serial PRIMARY KEY,
    name varchar(12) NOT NULL,
    email varchar(40) NOT NULL UNIQUE,
    password varchar NOT NULL
);

DROP TABLE IF EXISTS habits;

CREATE TABLE habits (
    id serial PRIMARY KEY,
    habit_name varchar NOT NULL,
    habit_frequency varchar(10) NOT NULL,
    user_id int NOT NULL
);

DROP TABLE IF EXISTS logs;

CREATE TABLE logs (
    id serial PRIMARY KEY,
    habit_id int NOT NULL,
    log_date DATE NOT NULL,
    habit_notes varchar
);