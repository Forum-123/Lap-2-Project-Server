const app = require("./api/server");
const resetDB = require("./api/dbConfig");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express now departing from port ${port}!`))
resetDB();