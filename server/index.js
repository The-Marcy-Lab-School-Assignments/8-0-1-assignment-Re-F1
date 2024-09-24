const express = require('express') // putting the express in the const express
const app = express(); // using express ; making an server application, making a server application
const path = require('path');

// app.get("/", (req, res) => {
    //     res.send('<h1>Hello</h1>')
    // })
    
// middleware is like a controller function - a route that returns something to the user
// middleware returns something back to the user
// a controller is 
const pathToDistFolder = path.join(__dirname, '../vite-project/dist') // gives me a absolute path to the directory

const serveStatic = express.static(pathToDist) // express.static takes in the path to the dist and it serves/sends back to the user

const logRoutes = (req, res, next) => {
    const time = new Date().toLocaleString();
    console.log(`${req.method}: ${req.originalUrl} - ${time}`);
    next(); // Passes the request to the next middleware/controller
};

app.use(logRoutes)
app.use(serveStatic) // serves the react project
// app.use because we are not using a specific route
// used for middleware

const port = 8080
app.listen(port, () => console.log(`Listening at http://localhost:${port}`)); 