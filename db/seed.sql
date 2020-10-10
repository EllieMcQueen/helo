create table if not exists helo_user (
    user_id serial primary key,
    username varchar(20),
    password text,
    profile_picture text
);

create table if not exists post (
    post_id serial primary key,
    title varchar(45),
    img text,
    content text,
    author_id int references helo_user(user_id)
);

ALTER TABLE helo_user
ALTER password
set DATA TYPE text;

insert into helo_user (username,password,profile_picture)
values ('test user','password','https://upload.wikimedia.org/wikipedia/en/thumb/0/00/The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg/220px-The_Child_aka_Baby_Yoda_%28Star_Wars%29.jpg');
