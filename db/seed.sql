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

insert into users (username,password,profile_picture)
values ('test user','password','https://images.unsplash.com/photo-1602254510084-6c0d4b483e77?ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60');

insert into post (title, img, content, author_id)
values ('test post', 'https://images.unsplash.com/photo-1584772988869-dccc362700a6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' , 'test content ',3 );

insert into post (title, img, content, author_id)
values ('test post 2', 'https://images.unsplash.com/photo-1599925002316-82ab470937ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=60' , 'test content 2 ',2 );
