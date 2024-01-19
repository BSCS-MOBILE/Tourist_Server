/**
 * Database seeder for User
 */
const User = require('../models/user.model');
const UserService = require('../services/user.service')

const users = [
    {"firstName": "Mark Louie", "lastName": "Manrique", "email":"mark@email.com", "password": "mark123"},
    {"firstName": "Patrick", "lastName": "Dela Cruz", "email":"patrick@email.com", "password": "patrick123"},
    {"firstName": "Greggy Jay", "lastName": "Agcanas", "email":"greggy@email.com", "password": "greggy123"},
    {"firstName": "John Karl", "lastName": "Nolasco", "email":"john@email.com", "password": "john123"}
];

const UserSeeder = {
    
    clear: function() {
        return User.collection.drop()
            .then(()=> console.log('User deleted'))
            .catch(err => console.error(err.errmsg))
    },

    seed: function() {
        const promises = [];
        users.forEach(user => {
            promises.push(UserService.saveUser(user));
        });

        return Promise.all(promises)
            .then(() => console.log('Successful'))
            .catch(err => console.error(err));
    },

    freshSeed: async function() {
        await this.clear();
        return this.seed();
    }

}

module.exports = UserSeeder


