const express = require("express");
const UsersControllers = require("../controllers/users.controller");
const router = express.Router();

router.get("/", UsersControllers.getAll);

router.get("/:id", UsersControllers.getOne);

router.post("/", UsersControllers.add);

router.patch("/:id", UsersControllers.update);

router.delete("/:id", UsersControllers.remove);

router.get("/:id/posts", UsersControllers.getPosts);

module.exports = router;