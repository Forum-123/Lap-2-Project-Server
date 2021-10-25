const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());

const habitsRoutes = require('./routes/habits');

server.get('/', (req, res) => res.send('Welcome to Habit Tracker'));

server.use('/habits', habitsRoutes);

module.exports = server;