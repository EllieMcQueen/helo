const bcrypt = require("bcryptjs");

module.exports = {   

  createPost: (req, res) => {
      const { title, img, content } = req.body;
      const { id } = req.session.user; 
      const db = req.app.get('db');
      db.create_post(title, img, content, id).then( () => res.sendStatus(200));
  },
  getPosts: async (req, res) => {
    const db = req.app.get('db');
    const [posts] = await db.get_posts();
    return res.status(200).send([posts])
  },
  deletePost: async (req, res) => {
    const db = req.app.get('db)');
    const {id} = req.params;

    const [post] = await db.delete_post([id]);
    res.status(200).send('Delete successful')
  }
}
  