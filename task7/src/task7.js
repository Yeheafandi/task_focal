require("dotenv").config();

const express = require("express");
const morgan = require("morgan");
const notFound = require("./middlewares/notFound");

const app = express();

app.use(express.json());
app.use(morgan("dev"));

app.get("/", (req, res) => {
    res.send("Hello World");
});

app.use("/api/v1/users", require("./routes/users.routes"));
app.use("/api/v1/posts", require("./routes/posts.routes"));
app.use("/api/v1/comments", require("./routes/comments.routes"));
app.use(notFound);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
