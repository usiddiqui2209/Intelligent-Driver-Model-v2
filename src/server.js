const express = require('express');
const path = require('path');

// Config variables
const PORT = process.env.PORT || 3000;
const PUBLIC = path.join(__dirname, '../public');

const app = express();
app.use('/', express.static(PUBLIC));
app.get('/', (req, res) => { res.sendFile(path.join(PUBLIC, 'index.html')); });

app.listen(PORT, () => {
    console.log(`App running on localhost:${PORT}`);
});