require("dotenv").config();
const express = require("express"),
      massive = require("massive"),
      session = require("express-session"),
      ctrl = require("./controllers/controller"),
      auth = require("./controllers/authController"),
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



app.post("/api/register", auth.register);
app.post("/api/login", auth.login);
app.get("/api/logout", auth.logout);

// //post endpoints
app.post("/api/post", ctrl.createPost);
app.get("/api/posts", auth.getUserPost);
app.delete("/api/post", ctrl.deletePost);

//user endpoints
// app.put("/api/user/:id", controller.updateUsername);

app.listen(port, () => console.log(` on port ${port}`));
massive({
    connectionString: CONNECTION_STRING,
    ssl: { rejectUnauthorized: false },
  }).then((db) => {
    app.set("db", db);
    console.log("db connected");
  });