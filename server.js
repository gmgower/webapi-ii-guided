const express = require('express');
// s6 import
const hubsRouter = require('./hubs/hubs-router.js')



// s8 cut 

const server = express();

server.use(express.json());

// s9
server.use('/api/hubs', hubsRouter);
server.use('/thin/otherthing', hubsRouter);

server.get('/', (req, res) => {
  res.send(`
    <h2>Lambda Hubs API</h>
    <p>Welcome to the Lambda Hubs API</p>
  `);
});


// add an endpoint that returns all the messages for a hub
// add an endpoint for adding new message to a hub

//? s1 export
module.exports = server;