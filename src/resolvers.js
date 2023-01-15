import { tasks } from './sample' 

import User from './models/User'

export const resolvers = {
    Query: {
        hello: () => {
            return 'Hello world with graphql'
        },
        //args are what graphql sends me
        //context is an object passed
        greet(root, { name }, ctx) {
            console.log(ctx)
             return `hello ${name}!`
        },
        tasks() {
            return tasks;
        },
        async Users() {
            //bd consult
            return await User.find()
        }
    },
    //
    Mutation: {
        createTask(_, { input }) {
            input._id = tasks.length
            tasks.push(input)
            return input
        },
        async createUser(_, { input}) {
            const newUser = new User(input)
            await newUser.save()
            return newUser;
        },
        async deleteUser(_, { _id}) {
            return await User.findByIdAndDelete(_id)
        }
    }
}