const db = require('../dbConfig');

class Habit {
    constructor(data) {
        this.id = data.id;
        this.habitName = data.habit_name;
        this.habitFrequency = data.habit_frequency;
        this.userId = data.user_id;
    }

    //index
    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT * FROM habits;`);
                let habits = data.rows.map(h => new Habit(h));
                resolve(habits);
            }
            catch(err) {
                reject(`Habits not found.`);
            };
        });
    };

    //show
    static findHabitById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT * FROM habits WHERE id=$1;`, [ id ]);
                let habit = new Habit(data.rows[0]);
                resolve(habit);
            }
            catch(err) {
                reject(`Habit ${id} not found.`)
            };
        });
    };


    //create
    static create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const habitName = data.habit_name;
                const habitFrequency = data.habit_frequency;
                const userId = data.user_id; //need to locate userId from the client side
                let newHabitData = await db.query(`INSERT INTO habits (habit_name, habit_frequency, user_id) VALUES ($1, $2, $3) RETURNING *;`, [habitName, habitFrequency, userId]);
                let newHabit = new Habit({...newHabitData.rows[0]});
                resolve(newHabit);
            }
            catch(err) {
                reject(`New habit could not be created.`);
            };
        });
    };

    //destroy
    destroy() {
        return new Promise(async (resolve, reject) => {
            try {
                const habit = await db.query(`DELETE FROM habits WHERE id=$1 RETURNING id;`, [ this.id ]);
                resolve(habit);
            }
            catch(err) {
                reject(`Habit could not be deleted.`);
            };
        });
    };
}

module.exports = Habit;

