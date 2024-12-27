const express = require('express');
const path = require('path');

const app = express();

const pathFolder = path.join(__dirname,'crud');

app.use(express.static(pathFolder));
app.listen(4000);

