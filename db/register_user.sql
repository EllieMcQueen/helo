INSERT INTO users(username, password, profile_picture)
VALUES($1, $2, $3)

returning id, username, profile_picture;
