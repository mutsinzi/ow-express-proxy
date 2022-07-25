// import statements
const express = require('express')
const dotenv = require('dotenv');
const cors = require('cors');

// initialize environment variables
dotenv.config();

const PORT = process.env.PORT || 7000;

const app = express();

// disable fingerprinting
app.disable('x-powered-by');

// enable proxy server
app.set('trust proxy', 1);

// enable cors
app.use(cors());

// set up routes
// we will create our routes folder in the next step
app.use('/api', require('./routes'))

// start server
app.listen(PORT, () => console.log(`app is listening on port ${PORT}`));