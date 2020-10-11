create table if not exists users (
    id serial primary key,
    username varchar(20),
    password text,
    profile_picture text
);

create table if not exists post (
    id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references users(id)
);

ALTER TABLE users
ALTER column password TYPE text;
