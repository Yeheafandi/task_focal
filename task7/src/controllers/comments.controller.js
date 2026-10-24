const users = require("../models/users");
const posts = require("../models/posts");
const comments = require("../models/comments");

class CommentsControllers {
    getAll = (req, res) => {
        const { postId } = req.query;

        const data = postId ? comments.filter(e => e.postId === +postId) : comments;

        res.status(200).json({
            message: "Fetched All data",
            data
        })
    }

    getOne = (req, res) => {
        const id = +req.params.id;

        const comment = comments.find(e => e.id === id);

        if(!comment) return res.status(404).json({
            message: "Comment Not Found"
        })

        res.status(200).json({
            message: "Get comment successfully",
            data: comment
        })
    }

    add = (req, res) => {
        const { postId, userId, text } = req.body;

        const post = posts.find(e => e.id === +postId);

        if(!post) return res.status(404).json({ message: "Post Not Found" });

        const user = users.find(e => e.id === +userId);

        if(!user) return res.status(404).json({ message: "User Not Found" });

        if(!text) return res.status(400).json({ message: "text is required" });

        const data = {
            id: Math.random()*Math.random(), // pk
            postId: post.id,
            userId: user.id,
            text,
            createdAt: new Date()
        }

        comments.push(data);

        res.status(201).json({
            message: "Added comment successfully",
            data
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const comment = comments.find(e => e.id === id);

        if(!comment) return res.status(404).json({
            message: "Comment Not Found"
        })

        const { text } = req.body;

        comment.text = text || comment.text;

        res.status(200).json({
            message: "Comment Updated",
            data: comment
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const comment = comments.find(e => e.id === id);

        if(!comment) return res.status(404).json({
            message: "Comment Not Found"
        })

        comments.splice(comments.indexOf(comment), 1);

        res.status(200).json({
            message: "Comment is Deleted"
        })
    }
}

module.exports = new CommentsControllers();