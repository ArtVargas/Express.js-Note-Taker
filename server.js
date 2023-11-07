const express = require('express');

//Need to link routes//
const html_routes = require('./routes/html-routes')
const api_routes = require ('./routes/api-routes')
const PORT = process.env.PORT || 3001;

// Must set the port //
const app = express ();

// The express middleware will run from top to bottom //

app.use(express.urlencoded({ extended: false }));

app.use(express.json());
app.use(express.static("Public"));
app.use(html_routes)
app.use(api_routes)

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    });