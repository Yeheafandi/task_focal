const express = require("express");
const PostsController = require("../controllers/posts.controller");
const router = express.Router();

router.get("/", PostsController.getAll); 

router.get("/:id", PostsController.getOne);

router.post("/", PostsController.add);

router.patch("/:id", PostsController.update);

router.delete("/:id", PostsController.remove);

router.post("/:id/like", PostsController.like);

router.get("/:id/comments", PostsController.getComments);

module.exports = router;