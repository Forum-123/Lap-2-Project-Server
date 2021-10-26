const db = require('../dbConfig/seedDev');
const Habit = require('./Habit');

class Log {
    constructor(data) {
        this.id = data.id;
        this.habitId = data.habit_id;
        this.logDate = data.log_date;
        this.habitNotes = data.habit_notes;
    };

    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT * FROM logs;`);
                let logs = data.rows.map(l => new Log(l));
                resolve(logs);
            }
            catch (err) {
                reject('Logs not found');
            };
        });
    };

    static findLogById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let data = await db.query(`SELECT logs.*
                                            FROM logs
                                            JOIN habits ON logs.habit_id = habits.id
                                            WHERE logs.id = $1;`, [id]);
                let log = new Log(data.rows[0]);
                resolve(log);
            }
            catch (err) {
                reject(`Log ${id} not found`);
            };
        });
    };

    static create(data) {
        return new Promise(async (resolve, reject) => {
            try {
                const habitId = data.habit_id;
                const logDate = data.log_date;
                const habitNotes = data.habit_notes;
                let newLogData = await db.query(`INSERT INTO logs (habit_id, log_data, habit_notes) VALUES ($1, $2, $3) RETURNING *;`, [habitId, logDate, habitNotes])
                let newLog = new Log({ ...newLogData.rows[0] });
                resolve(newLog);
            }
            catch (err) {
                reject('New log could not be created');
            };
        });
    };
};

module.exports = Log;