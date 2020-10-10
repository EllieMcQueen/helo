INSERT INTO helo_user(
    username,
    password,
    profile_picture
)
VALUES(
    ${username},
    ${hash},
    ${profilePicture}
)

returning user_id, username,  profile_picture;
