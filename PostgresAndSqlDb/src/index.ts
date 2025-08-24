import Express from "express";
import { Client } from "pg";

const app = express();

const pgClient = new Client({
    user: "neondb_owner",
    password: "npg_6WEmRYMrQOn2",
    port: 5432,
    host: "ep-floral-mode-ad8aaasw-pooler.c-2.us-east-1.aws.neon.tech",
    database: "neondb",
    ssl: true,
});

async function main() {
    pgClient.connect();
    // const response = await pgClient.query("SELECT * FROM users;")
    // console.log(response.rows);
    const response = await pgClient.query("UPDATE users SET username='Singh' WHERE id = 3" )
    console.log(response.rows);
}

main()

