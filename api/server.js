const express = require("express");
const cors = require("cors");

const server = express();
server.use(cors());
server.use(express.json());


const authRoutes = require('./controllers/auth');
const habitsRoutes = require('./routes/habits');
const logsRoutes = require('./routes/logs');

server.get('/', (req, res) => res.send('Welcome to Habit Tracker'));

server.use('/habits', habitsRoutes);
server.use('/logs', logsRoutes);
server.use('/auth', authRoutes);

module.exports = server;