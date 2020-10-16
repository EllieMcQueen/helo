SELECT post.id, post.title, user.username, user.profile_picture FROM post post
JOIN user user on post.author_id = post.id
WHERE post.author_id != $1
ORDER BY post.author_id DESC;