const express = require("express");
// const bodyParser = require("body-parser"); /* deprecated */
const cors = require("cors");
const cron = require('node-cron')

const app = express();

var corsOptions = {
  origin: "http://localhost:8081"
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json()); /* bodyParser.json() is deprecated */

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true })); /* bodyParser.urlencoded() is deprecated */

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to bezkoder application." });
});

require("./app/routes/tutorial.routes.js")(app);
require("./app/routes/chat.routes.js")(app);
require("./app/routes/invit.routes.js")(app);

cron.schedule('*/3 * * * * *',function(){
  console.log('do every 3 seconds')
})

// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
