const db = require('./init');
const fs = require('fs');

const setup = fs.readFileSync(__dirname + '/1_setup.sql').toString();
const seed = fs.readFileSync(__dirname + '/2_seed.sql').toString();

db.query(setup, () => console.log('Database tables created'));
db.query(seed, () => console.log('Database seeded'));