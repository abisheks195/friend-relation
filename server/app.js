require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/db');

// Port for the backend server
const port = 8000;

const app = express();

// Enable all the CORS reqs
app.use(cors());

// Helmet Middleware for securing the HTTP headers
app.use(helmet());

// For parsing the incoming request bodies
app.use(bodyParser.json());

// Router variable
const router = require('./routes/router');
app.use('/user', router);

// Static folder
app.use(express.static('../client/build'));

// Sends the public/index.html as the response for any route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

// Create a server and listen to it in port 8000
app.listen(port, () => {
  console.log('Server running on port: ' + port);
})