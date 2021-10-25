const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const authRoutes = require('./controllers/auth');

server.use('/auth', authRoutes);

server.get('/', (req, res) => res.send('Welcome to Habit Tracker'));

module.exports = server;