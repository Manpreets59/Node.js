// to add dummy data to your database
import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();

async function createDummyUser(){
    await client.user.create({
        data: {
            username: "palwan",
            age: 21,
            password: "123123",
            city: "Delhi",
            todos: {
                create: {
                    description: "This is my first todo",
                    title : "first todo",
                    done: true
                }
            }

        }
    })
}

createDummyUser()