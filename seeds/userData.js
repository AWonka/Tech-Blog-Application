const { User } = require('../models');

const userData = [
    {
        username: 'austin',
        password: '$2a$10$nw1KtQxFbyklDj0Bhi/YaO.BIfjVmsB.XBGmzgfv5N7i3CxPW8AIC',
    },
    {
        username: 'casey',
        password: 'casey1',
    },
    {
        username: 'derek',
        password: 'derek1',
    },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;