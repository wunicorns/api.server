
const {gql} = require('apollo-server-express');

const typeDefs = gql'
    type Query {
        name: String,
        message: String
    }
';


const resolvers = {
    Query: {
        name: () => 'hello my name',
        message: () => 'message ~!!'
    }
}

module.exports = {
    typeDefs, resolvers
}