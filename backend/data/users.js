const bcrypt = require('bcryptjs');
const users = [
    {
        name: 'Solon',
        email: 'redstalion4@hotmail.com',
        password: bcrypt.hashSync('7ujm&UJM',10),
        isAdmin: true
    },
    {
        name: 'Panos',
        email: 'redstalion2@hotmail.com',
        password: bcrypt.hashSync('123456',10),

    },
    {
        name: 'Stratos',
        email: 'redstalion1@hotmail.com',
        password: bcrypt.hashSync('123456',10),
    },
];

module.exports=users;