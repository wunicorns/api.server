const mongoose = require('mongoose');

const {typeDefs, resolvers} = require('../model');

const database = require('../database/mongo');

database.connect(process.env.DB_HOST);




module.exports = {
    typeDefs, resolvers   
}