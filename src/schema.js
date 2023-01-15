// type definition abreviation
//with typedef we define what we can consult from a graphql api
import { makeExecutableSchema } from 'graphql-tools'
import { resolvers } from './resolvers'


const typeDefs = `

    type Query {
        hello: String
        greet(name: String!): String
        tasks: [Task]
        Users: [User]
    }

    type Task {
        _id: ID
        title: String!
        description: String!
        number: Int
    }

    type User {
        _id: ID
        firstname: String!
        lastname: String!
        age: Int
    }

    type Mutation {
        createTask(input: TaskInput): Task
        createUser(input: UserInput): User
        deleteUser(_id: ID): User
    }

    input TaskInput {
        title: String!
        description: String!
        number: Int
    }

    input UserInput {
        firstname: String
        lastname: String
        age: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers:  resolvers
})