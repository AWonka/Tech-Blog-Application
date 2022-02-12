const { Comment } = require('../models');

const commentData = [
    {
        content: 'first comment',
        userID: 1,
        postID: 1,
    },
    {
        content: 'second comment',
        userID: 2,
        postID: 2,
    },
    {
        content: 'third comment',
        userID: 3,
        postID: 3,
    },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;