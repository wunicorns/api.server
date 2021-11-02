require('dotenv').config({ debug: process.env.DEBUG })

const express = require('express');

const { ApolloServer } = require('apollo-server-express');

const {typeDefs, resolvers} = require('./service');

const port = process.env.PORT || 4000;

(async ()=>{

    const app = express();

    const server = new ApolloServer({ typeDefs, resolvers })

    await server.start()

    server.applyMiddleware({ app, path: '/api' })

    app.listen({ port }, ()=>{
        console.log(`Server running :: http://localhost:${port}${server.graphqlPath}`);
    });

})();
