- npm init -y
- npm install typescript
- npx tsc --init 
-  // File Layout
    "rootDir": "./src",
    "outDir": "./dist",

-  "scripts": {
    "dev" : "tsc -b && node ./dist/index.js"
  },

npm install prisma 
npx prisma init 

// Every time schema is change or created 
npx prisma migrate dev

generating the prisma client
npx prisma generate

output   = "../src/generated/prisma" removed from generator 

Raw queries in database
RelationShip

Expressify it 
npm install express @types/express

seed.ts for dummy data 
{
  // ...existing code...
  "prisma": {
    "seed": "ts-node ./prisma/seed.ts"
  }
  // ...existing code...
}  add this to package.json

npm install -D ts-node typescript @types/node

npx prisma db seed 