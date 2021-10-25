const Habit = require('../models/Habit');

//index
async function index(req, res) {
    try {
        const habits = await Habit.all;
        res.json(habits);
    }
    catch(err) {
        res.status(500).json(err);
    };
};

//show
async function show(req, res) {
    try {
        const habit = await Habit.findHabitById(parseInt(req.params.id));
        res.json(habit);
    }
    catch(err) {
        res.status(404).json(err);
    };
};

//create
async function create(req, res) {
    try {
        const habit = await Habit.create(req.body);
        res.status(201).json(habit);
    }
    catch(err) {
        res.status(422).json(err);
    };
};

//delete
async function destroy(req, res) {
    try {
        const habit = await Habit.findHabitById(parseInt(req.params.id));
        await habit.destroy();
        res.status(204).end();
    }
    catch(err) {
        res.status(404).json(err);
    };
};

module.exports = {index, show, create, destroy};