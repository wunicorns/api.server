const {gql} = require('apollo-server-express');

const values = [
    {id: '1', content: 'content 11', author: 'author1'},
    {id: '2', content: 'content 12', author: 'author2'},
    {id: '3', content: 'content 13', author: 'author3'},
    {id: '4', content: 'content 12', author: 'author2'},
];

const typeDefs = gql`
    type Note {
        id: ID!
        content: String!
        author: String!
    }

    type Query {
        hello: String,
        notes: [Note!]!
        note(id: ID!): Note!
    }

    type Mutation {
        newNote(content: String!): Note!
    }
`;


const resolvers = {
    Query: {
        hello: ()=> 'hello world!',
        notes: ()=> values,
        note: (parent, args) => {
            return values.find(note=>note.id === args.id);
        }
    },
    Mutation: {
        newNote: (parent, args) => {
            let noteValue = {
                id: String(values.length + 1),
                content: args.content,
                author: 'Adam Scott'
            };
            values.push(noteValue);
            return noteValue;
        }
    }
}

module.exports = {
    typeDefs, resolvers
}