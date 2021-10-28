const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());
server.use(express.urlencoded({ extended: true }));


const authRoutes = require('./api/routes/users');
const habitsRoutes = require('./api/routes/habits');
const logsRoutes = require('./api/routes/logs');

server.get('/', (req, res) => res.send('Welcome to Habit Tracker'));

server.use('/habits', habitsRoutes);
server.use('/logs', logsRoutes);
server.use('/auth', authRoutes);

module.exports = server;