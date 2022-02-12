const { User } = require('../models');

const userData = [
    {
        username: 'austin',
        password: 'austin1',
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