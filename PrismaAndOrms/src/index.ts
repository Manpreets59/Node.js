import { PrismaClient } from "@prisma/client";

const client = new PrismaClient();

// async function createUser() {
//   await client.user.create({
//     data: {
//         username: "Alice",
//         password: "123123",
//         age: "21",
//         city: "Delhi"
//     }
//   });
// }

// async function createUser() {
//   await client.user.update({
//     where: {
//         id: 2
//     },
//     data: {
//         username: "Harkirat Singh"
//     }
//   });
// }

async function createUser() {
  const user = await client.user.findFirst({
    where: {
        id: 2
    }
    
});
console.log(user);
    
}

createUser();
