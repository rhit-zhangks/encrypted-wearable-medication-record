
const express = require('express');
const cors = require('cors');
const path = require('path');
const MockDatabaseAdapter = require('./adapters/MockDatabaseAdapter');

const app = express();
const PORT = 3000;
const db = new MockDatabaseAdapter(); 


app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());


app.get('/api/health', (req, res) => {
    res.json({
        message: 'Backend is running!'
    });
});


app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
