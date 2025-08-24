import express from "express";
import { Client } from "pg";
const app = express();
app.use(express.json());
const pgClient = new Client("postgresql://neondb_owner:npg_6WEmRYMrQOn2@ep-floral-mode-ad8aaasw-pooler.c-2.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require");
// Add error handling for database connection
pgClient.connect().catch(err => {
    console.error('Database connection error:', err);
    process.exit(1);
});
app.post("/signup", async (req, res) => {
    try {
        const { username, password, email } = req.body;
        // Validate input
        if (!username || !password || !email) {
            return res.status(400).json({
                error: "Missing required fields: username, password, and email are required"
            });
        }
        // Use proper parameterized queries to prevent SQL injection
        const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3)`;
        const response = await pgClient.query(insertQuery, [username, email, password]);
        res.status(201).json({
            message: "You have signed up successfully",
            userId: response.rowCount
        });
    }
    catch (error) {
        console.error('Database error:', error);
        // Handle specific PostgreSQL errors
        if (error.code === '23505') { // Unique constraint violation
            res.status(409).json({
                error: "Username or email already exists"
            });
        }
        else if (error.code === '23502') { // Not null constraint violation
            res.status(400).json({
                error: "Required field cannot be null"
            });
        }
        else {
            res.status(500).json({
                error: "Internal server error"
            });
        }
    }
});
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
//# sourceMappingURL=index.js.map