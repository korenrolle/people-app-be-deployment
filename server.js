const express = require('express');
const app = express();

// app dependencies
const cors = require('cors');
const morgan = require('morgan');

// controller imports
const peopleController = require('./controllers/people-controller');

require('dotenv').config();
require('./config/db.connection'); // node runs all of the code in db.connection

const { PORT } = process.env;

// express / app middleware
app.use(express.json());

// cors helper function
app.use(cors()); // allows for cross origin request - open channel
// morgan request logger (for dev)
app.use(morgan('dev'));
// router middleware
app.use('/people', peopleController);

// root - home / index route for api - redirects to the people index route
app.get('/', (req, res) => res.redirect('/people'));

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`));
