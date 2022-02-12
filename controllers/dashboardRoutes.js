const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                userID: req.session.userID
            },
            include: [User]
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            loggedIn: req.session.loggedIn
        });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/update/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);

        if(!postData) {
            res.status(404).json({
                message: "Post not found!"
            });
            return;
        } else {
            const post = postData.get({ plain: true });
            console.log(post);

            res.render('update-post', {
                post,
                loggedIn: req.session.loggedIn
            });
        }
    } catch (err) {
        res.status(500).json(err);
        res.redirect('dashboard');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('add-post');
});

module.exports = router;