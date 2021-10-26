const fs = require("fs");
const { Pool } = require('pg');

const setup = fs.readFileSync(__dirname + '/db/1_setup.sql').toString();
const seed = fs.readFileSync(__dirname + '/db/2_seed.sql').toString();

const resetDB = () => {
    return new Promise(async (resolve, reject) => {
        try {
            const pool = new Pool();
            await pool.query(setup);
            await pool.query(seed);
            resolve('Habit Tracker DB reset');
        } catch (err) {
            reject(`Habit Tracker DB could not be reset: ${err} in ${err.file}`);
        };
    });
}

module.exports = resetDB;