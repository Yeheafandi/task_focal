
const posts = require("../models/posts");
const users = require("../models/users");
const comments = require("../models/comments");

class PostsControllers {
    getAll = (req, res) => {
        const { tag } = req.query;

        const data = tag ? posts.filter(e => e.tags.includes(tag)) : posts;

        res.status(200).json({
            message: "Fetched All data",
            data
        })
    }

    getOne = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        res.status(200).json({
            message: "Get post successfully",
            data: post
        })
    }

    add = (req, res) => {
        const { userId, title, content, tags } = req.body;

        const user = users.find(e => e.id === +userId);

        if(!user) return res.status(404).json({ message: "User Not Found" });

        const now = new Date();

        const data = {
            id: Math.random()*Math.random(), // pk
            userId: user.id,
            title, content, tags,
            likes: 0,
            createdAt: now,
            updatedAt: now
        }

        posts.push(data);

        res.status(201).json({
            message: "Added post successfully",
            data
        })
    }

    update = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        const { title, content, tags } = req.body;

        post.title = title || post.title;
        post.content = content || post.content;
        post.tags = tags || post.tags;
        post.updatedAt = new Date();

        res.status(200).json({
            message: "Post Updated",
            data: post
        })
    }

    remove = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        });

        posts.splice(posts.indexOf(post), 1);
        comments.splice(0, comments.length, ...comments.filter(e => e.postId !== id));

        res.status(200).json({
            message: "Post is Deleted"
        })
    }

    like = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        post.likes++;

        res.status(200).json({
            message: "Post liked",
            data: post
        })
    }

    getComments = (req, res) => {
        const id = +req.params.id;

        const post = posts.find(e => e.id === id);

        if(!post) return res.status(404).json({
            message: "Post Not Found"
        })

        res.status(200).json({
            message: "Fetched post comments",
            data: comments.filter(e => e.postId === id)
        })
    }
}

module.exports = new PostsControllers();
