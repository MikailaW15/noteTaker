const fs = require('fs')

module.exports = function(app) {
app.get('/api/notes', (req, res) => {
    fs.readFile('./db/db.json', (err, data) => {
        if (err) throw err;
        res.send(data) 
    })
})
app.post('/api/notes', (req, res) => {
// Log that a POST request was received
console.info(`${req.method} request received to add a note`);

// Prepare a response object to send back to the client
let response;

// Check if there is anything in the response body
if (req.body && req.body.product) {
  response = {
    status: 'success',
    data: req.body,
  };
  res.json(`notes ${response.data.product} has been added!`);
} else {
  res.json('Request body must at least contain a word');
}




    console.log(req.body)
})

}