const { Post } = require('../models');

const postData = [
    {
        title: 'First Post',
        content: 'This is my first post',
        userID: 1,
    },
    {
        title: 'Second post',
        content: 'this is my second post',
        userID: 2,
    },
    {
        title: 'Third post',
        content: 'this is my third post',
        userID: 3,
    },
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;