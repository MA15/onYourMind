//imports

const express = require('express');
const htmlRoutes = require('./routes/htmlroutes.js');
const apiRoutes = require('./routes/apiroutes.js');

//app decoration and ports
const app = express();
const PORT = process.env.PORT || 3001;

//Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));


// routes
app.use(htmlRoutes);
app.use(apiRoutes);


// listener 
app.listen(PORT, () => console.log(` Listening on http://localhost:${PORT}`));