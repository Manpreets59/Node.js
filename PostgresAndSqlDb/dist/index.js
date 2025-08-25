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
        const { username, password, email, city, country, street, pincode } = req.body;
        // Validate input
        if (!username || !password || !email || !city || !street || !pincode || !country) {
            return res.status(400).json({
                error: "Missing required fields: username, password, email, city, country, street, and pincode are required"
            });
        }
        // Start transaction
        await pgClient.query("BEGIN");
        try {
            // Insert user and get the ID back
            const insertQuery = `INSERT INTO users (username, email, password) VALUES ($1, $2, $3) RETURNING id`;
            const userResponse = await pgClient.query(insertQuery, [username, email, password]);
            const userId = userResponse.rows[0].id;
            // Insert address with the user ID
            const addressInsertQuery = `INSERT INTO addresses (city, country, street, pincode, user_id) VALUES ($1, $2, $3, $4, $5)`;
            await pgClient.query(addressInsertQuery, [city, country, street, pincode, userId]);
            // Commit transaction
            await pgClient.query("COMMIT");
            res.status(201).json({
                message: "You have signed up successfully",
                userId: userId
            });
        }
        catch (transactionError) {
            // Rollback transaction on any error
            await pgClient.query("ROLLBACK");
            throw transactionError;
        }
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