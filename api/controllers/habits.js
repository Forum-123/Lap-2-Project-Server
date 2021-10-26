const { restart } = require('nodemon');
const Habit = require('../models/Habit');

//index
async function index(req, res) {
    try {
        const habits = await Habit.all;
        console.log(habits)
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

async function showByUser(req, res) {
    try {
        const habits = await Habit.findHabitsByUserId(parseInt(req.params.id));
        res.json(habits);
    }
    catch(err) {
        res.status(404).json(err);
    }
}

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

//update
async function update(req, res) {
    try {
        const habit = await Habit.findHabitById(parseInt(req.params.id));
        console.log(habit);
        const updatedHabit = await habit.update(req.body);
        res.status(204).json(updatedHabit);
    }
    catch (err) {
        res.status(400).json(err);
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

module.exports = { index, show, showByUser, create, update, destroy };