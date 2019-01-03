const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;

var app = express();

app.use('/static', express.static(path.join(__dirname, '../public')));

app.listen(port, () => {
    console.log(`Server started successfully on the port ${port}`);
});