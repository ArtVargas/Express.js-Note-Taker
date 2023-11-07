const router = require('express').Router();
const path = require('path');

// This will define the route that sends the index.html as a client response when a GET request has been made //

router.get('/',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
    });


// This will define the route that sends the notes.html as a client response when a GET request has been made //
// Make sure to use the same code for public index html. No need to create a new code //

router.get('/notes',(req,res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
    });

// Must use module.exports for router//

module.exports = router;
