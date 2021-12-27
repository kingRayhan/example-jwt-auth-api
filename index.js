const express = require("express");
const app = express();
const routes = express.Router();
const jwt = require("jsonwebtoken");
const SECRET = "secret";

// ----------------- User -----------------
const email = "example@example.com";
const password = "password";

// user
const user = {
  _id: "61c904fb7475517aad390630",
  name: "John Doe",
  email,
  avatar: "https://avatars.githubusercontent.com/u/7611746?v=4",
};

// body parser middleware
app.use(express.json({ extended: false }));

const authMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader) {
    return res.status(401).json({ error: "Token not provided" });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Auth token is not supplied",
    });
  }

  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  });

  next();
};

routes.get("/", (req, res) => {
  res.json({
    message: "Hello World",
  });
});

routes.get("/protected", authMiddleware, (req, res) => {
  return res.json({
    message: "A very secret message",
  });
});

routes.post("/auth/login", (req, res) => {
  if (!req.body.email || !req.body.password) {
    return res.status(400).json({
      message: "Email and password are required",
    });
  }

  // check if email and password are correct
  if (email !== req.body.email || password !== req.body.password) {
    return res.status(401).json({
      message: "Invalid credentials",
    });
  }

  res.json({
    message: "Login Successful",
    token: jwt.sign(user, SECRET),
  });
});

routes.post("/auth/user", (req, res) => {
  // check if authorization header is present
  if (!req.headers.authorization) {
    return res.status(401).json({
      message: "Unauthorized",
    });
  }

  const token = req.headers.authorization.split(" ")[1];

  if (!token) {
    return res.status(401).json({
      message: "Auth token is not supplied",
    });
  }

  jwt.verify(token, SECRET, (err) => {
    if (err) {
      return res.status(401).json({
        message: "Invalid token",
      });
    }
  });

  res.json({
    message: "User info",
    user,
  });
});

app.use(routes);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log("http://localhost:" + port);
});
