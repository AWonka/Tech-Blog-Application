const User = require('./user');
const Post = require('./post');
const Comment = require('./comment');

// User data
User.hasMany(Post, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

User.hasMany(Comment, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

// Post data
Post.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

Post.hasMany(Comment, {
    foreignKey: 'postID',
    onDelete: 'CASCADE'
});

// Comment data
Comment.belongsTo(User, {
    foreignKey: 'userID',
    onDelete: 'CASCADE'
});

Comment.belongsTo(Post, {
    foreignKey: 'postID',
    onDelete: 'CASCADE'
});

module.exports = { User, Post, Comment };