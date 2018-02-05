const express = require('express')
const app = express()

app.use('/favicon.ico', express.static('public/favicon.ico'));
app.use(express.static('public'));

app.listen(3000);
