const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const apiRoutes = require('./routes/Apiroute/noteroute.js');
const htmlRoutes = require('./routes/html routes/index.js');


// parse incoming string or array data
app.use(express.urlencoded({extended: true}));
// parse incoming JSON data
app.use(express.json());
app.use(express.static('public'));
// Use apiRoutes
app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}. Welcome!`);
  });