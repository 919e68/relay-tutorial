import path from 'path'
import config from './config/server'
import express from 'express'
import session from 'express-session'
import bodyParser from 'body-parser'
import graphQLHTTP from 'express-graphql'

import sessionConfig from './config/session'
import schema from './graphql/schema'
import routes from './routes/routes.js'

const PORT = process.env.PORT ? process.env.PORT : config.port

let app = express()
app.use(session(sessionConfig))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('./client/public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/graphql', graphQLHTTP(req => ({
  schema: schema,
  pretty: true,
  graphiql: true,
  rootValue: req.session
})))


app.use('/', routes)

app.listen(PORT, () => {
  console.log(`app started http://localhost:${PORT}`)
})
