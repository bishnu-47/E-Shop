const bcrypt = require('bcryptjs')

const users = [{
    name: "admin",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true
}, {
    name: "wishnu",
    email: "wishnu@example.com",
    password: bcrypt.hashSync("123456", 10),
}, {
    name: "naruto",
    email: "naruto@example.com",
    password: bcrypt.hashSync("123456", 10),
}, ]

module.exports = users