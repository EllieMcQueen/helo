SELECT post.title, post.img, post.content, post.username, post.profile_picture, hp.author_id, post.id
FROM post post
JOIN user user ON user.author_id = user.user_id
WHERE post.post_id = $1;