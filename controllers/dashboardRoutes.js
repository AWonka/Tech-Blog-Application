const router = require('express').Router();
const { User, Post, Comment } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            },
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
                {
                    model: Comment,
                    attributes: ['content', 'userID', 'postID', 'created_at'],
                    include: {
                        model: User,
                        attributes: ['username'],
                    },
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
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
                logged_in: req.session.logged_in
            });
        }
    } catch (err) {
        res.status(500).json(err);
        res.redirect('dashboard');
    }
});

router.get('/new', withAuth, (req, res) => {
    res.render('new-post');
});

module.exports = router;