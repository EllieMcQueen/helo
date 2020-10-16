INSERT INTO users(username, password, profile_picture)
VALUES($1, $2, CONCAT('https://robohash.org/',$1))

returning id, username, profile_picture;
