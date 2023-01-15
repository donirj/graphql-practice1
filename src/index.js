import express from "express"
//midleware de express
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";

import { connect } from "./database";

const app = express();
connect()

//route that returns hello world
app.get('/', (req, res) => {
    res.json({
        message: 'Hello world'
    })
});

//route
app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema,
    context: {
        messageId: 'test'
    }
}))

app.listen(3000, () => console.log('srv on port 3000'))