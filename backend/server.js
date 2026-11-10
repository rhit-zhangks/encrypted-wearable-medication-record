
const express = require('express');
const cors = require('cors');
const path = require('path');
const MockDatabaseAdapter = require('./adapters/MockDatabaseAdapter');

const app = express();
const PORT = 3000;
const db = new MockDatabaseAdapter(); 


app.use(cors({ origin: 'http://localhost:4200' }));
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:4200'
}));

app.get('/api/health', (req, res) => {
    res.json({
        message: 'Backend is running!'
    });
});

app.post('/api/login', async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password) {
            return res.status(400).json({
                success: false,
                message: "Username and password are required"
            });
        }

        const user = await db.getUserLogin(username);

        if (!user || user.username !== username ||
            user.password !== password) {
            return res.status(401).json({
                success: false,
                message: "Invalid username or password"
            });
        }

        return res.json({
            success: true,
            message: "Login successful"
        });

    } catch (error) {
        console.error("Login error:", error);
        return res.status(500).json({
            success: false,
            message: "Internal server error"
        });
    }
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
