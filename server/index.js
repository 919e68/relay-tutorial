require("babel-core/register")

const config = require('./config/server')
const sessionConfig = require('./config/session')

const path = require('path')
const express = require('express')
const session = require('express-session')
const bodyParser = require('body-parser')
const graphQLHTTP = require('express-graphql')

const schema = require('./graphql/schema')
const routes = require('./routes/routes.js')

const PORT = process.env.PORT ? process.env.PORT : config.port

const app = express()
app.use(session(sessionConfig))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static('public'))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

app.use('/graphql', graphQLHTTP(req => ({
  schema: schema,
  pretty: true,
  graphiql: true,
  rootValue: req.session
})))

// app.use('/', routes)

app.listen(PORT, () => {
  console.log(`app started http://localhost:${PORT}`)
})
