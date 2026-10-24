const express = require("express");
const CommentsController = require("../controllers/comments.controller");
const router = express.Router();

router.get("/", CommentsController.getAll);

router.get("/:id", CommentsController.getOne);

router.post("/", CommentsController.add);

router.patch("/:id", CommentsController.update);

router.delete("/:id", CommentsController.remove);

module.exports = router;