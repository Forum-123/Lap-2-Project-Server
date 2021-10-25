const app = require("./api/server");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Express now departing from port ${port}!`))
