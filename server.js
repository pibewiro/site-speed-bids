const express = require('express');
const path = require('path');
const port = process.env.PORT || 3000;
const history = require('connect-history-api-fallback');

const app = express();
app.use(history());

app.use(express.static(path.join(__dirname, 'dist')));

app.listen(port, () => console.log('Listening to Port:', port))