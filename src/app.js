const express = require('express')
const cors = require('cors')

require('dotenv-safe').config()

const db = require('./database/mongoConfig')

const estabelecimentoRoutes = require('./routes/estabelecimentoRoutes')

db.connect()

const app = express();

app.use(cors());
app.use(express.json());
app.use("/estabelecimento", estabelecimentoRoutes);

module.exports = app