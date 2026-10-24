const users = require("../models/users");
const posts = require("../models/posts");
const comments = require("../models/comments");

class UsersControllers {
    getAll = (req, res) => {
        res.status(200).json({
            message: "Fetched All data",
            data: users
        })
    }

    getOne = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        res.status(200).json({
            message: "Get user successfully",
            data: user
        })
    }

    add = (req, res) => {
        const { username, fullName, email, bio, avatar } = req.body;

        const emailIsExist = users.find(e => e.email === email);

        if(emailIsExist)
            return res.status(400).json({ message: "Invalid Email" })

        const usernameIsExist = users.find(e => e.username === username);

        if(usernameIsExist)
            return res.status(400).json({ message: "Invalid Username" })

        const data = {
            id:Math.random()*Math.random(), // pk
            username, fullName, email, bio, avatar,
            role: "member",
            createdAt: new Date()
        }

        users.push(data);

        res.status(201).json({
            message: "Added user successfully",
            data
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        const { fullName, bio, avatar } = req.body;

        user.fullName = fullName || user.fullName;
        user.bio = bio || user.bio;
        user.avatar = avatar || user.avatar;

        res.status(200).json({
            message: "User Updated",
            data: user
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        users.splice(users.indexOf(user), 1);

        const postIds = posts.filter(e => e.userId === id).map(e => e.id);
        posts.splice(0, posts.length, ...posts.filter(e => e.userId !== id));
        comments.splice(0, comments.length, ...comments.filter(e => e.userId !== id && !postIds.includes(e.postId)));

        res.status(200).json({
            message: "User is Deleted"
        })
    }

    getPosts = (req, res) => {
        const id = +req.params.id;

        const user = users.find(e => e.id === id);

        if(!user) return res.status(404).json({
            message: "User Not Found"
        })

        res.status(200).json({
            message: "Fetched user posts",
            data: posts.filter(e => e.userId === id)
        })
    }
}

module.exports = new UsersControllers();
