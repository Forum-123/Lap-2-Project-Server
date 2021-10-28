const Log = require('../models/Log');

//index
async function index(req, res) {
    try {
        const allLogs = await Log.all;
        res.json(allLogs);
    }
    catch (err) {
        res.status(500).json(err);
    };
};

//show
async function show(req, res) {
    try {
        const log = await Log.findLogById(parseInt(req.params.id));
        res.json(log);
    }
    catch (err) {
        res.status(404).json(err);
    };
};

async function showByHabit(req, res) {
    try {
        const logs = await Log.getLogsByHabitId(parseInt(req.params.id));
        res.json(logs);
        // console.log(res.json(logs))
    }
    catch(err) {
        res.status(404).json(err);
    }
}

//create
async function create(req, res) {
    try {
        const newLog = await Log.create(req.body);
        res.status(201).json(newLog);
    }
    catch (err) {
        res.status(422).json(err);
    };
};

module.exports = { index, show, showByHabit, create };