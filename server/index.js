require("dotenv").config();
const express = require("express"),
      massive = require("massive"),
      session = require("express-session"),
      ctrl = require("./controller"),
    { SERVER_PORT, CONNECTION_STRING, SESSION_SECRET } = process.env,
      port = SERVER_PORT,
      app = express();

app.use(express.json());

app.use(
  session({
    resave: false,
    saveUninitialized: true,
    secret: SESSION_SECRET,
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 365 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set("db", db);
  console.log("db connected");
});

app.post("/api/register", controller.register);
app.post("/api/login", controller.login);
// app.get("/api/logout", controller.logout);

// //post endpoints
// app.post("/api/post", controller.createPost);
// app.get("/api/posts/:id", controller.getUserPosts);
// app.delete("/api/post/:id", controller.deletePost);

//user endpoints
// app.put("/api/user/:id", controller.updateUsername);

app.listen(port, () => console.log(` on port ${port}`));
