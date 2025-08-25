## Postgress database with node.js backend
npm init -y 
npm install typescript 
npx tsc --init 
"rootDir": "./src",  "outDir": "./dist",
create src folder and inside this create index.ts
npm install pg @types/pg

how sql injection works
npm install express @types/express
sql injection queries: parameterized queries to prevent SQL injection
horizontal and vertical scaling , shading , master slave architecture , 

Relationships and transactions : Relationships let you store data in different tables and relate it with each other      
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username VARCHAR(50) UNIQUE NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE addresses (
    id SERIAL PRIMARY KEY,
    user_id INTEGER NOT NULL,
    city VARCHAR(100) NOT NULL,
    country VARCHAR(100) NOT NULL,
    street VARCHAR(255) NOT NULL,
    pincode VARCHAR(20),
    created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);

ON DELETE CASCADE : if we delete user then address also got deleted 
ON DELETE RESTRICT : this would restrict to delete the user till address related to user is present (not deleted)

Begin : to run query fully example payment transfer if amount deducted from one person account and server crash then the first query also got reverted back

joins: 