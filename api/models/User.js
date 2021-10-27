const db = require('../dbConfig/seedDev');

class User {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.email = data.email
        this.password = data.password
    }

    static create({ name, email, password }){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.query(`INSERT INTO users (name, email, password)
                                                VALUES ($1, $2, $3) RETURNING *;`,[ name, email, password ]);
                let user = new User(result.rows[0]);
                res(user)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }

    static findByEmail(email){
        return new Promise(async (res, rej) => {
            try {
                let result = await db.query(`SELECT * FROM users
                                                WHERE email = $1;`,[ email ]);
                let user = new User(result.rows[0])
                res(user)
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }
}

module.exports = User