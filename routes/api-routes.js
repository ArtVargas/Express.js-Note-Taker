const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require ("fs");

// This code should be able to define the get request to the routes end point // 

router.get('/api/notes', async (req, res) => {
 const dbJson = await JSON.parse(fs.readFileSync("db/db.json","utf8"));
res.json(dbJson);
});

// Defines the post request 