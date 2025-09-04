import express from "express";
import { PrismaClient } from "@prisma/client";
const app = express();
const client = new PrismaClient();
app.get("/users", async (req, res) => {
    const users = await client.user.findMany();
    res.json({ users });
});
app.get("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const users = await client.user.findFirst({
        where: {
            id: parseInt(id)
        },
        select: {
            todos: true,
            username: true,
            password: true
        }
    });
    res.json({ users });
});
app.listen(3000);
// async function createUser() {
//   await client.user.create({
//     data: {
//         username: "arman",
//         password: "123123",
//         age: 22,
//         city: "Amritsar"
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
// async function createUser() {
//   const user = await client.user.findFirst({
//     where: {
//         id: 2
//     }
// });
// console.log(user);
// }
// async function createUser() {
//   const user = await client.user.findFirst({
//     where: {
//         id: 2
//     },
//     select: {
//         username: true
//     }
// });
// console.log(user);
// }
// async function createUser() {
//   const user = await client.user.findFirst({
//     where: {
//       id: 2,
//     },
//     include: {
//       todos: true,
//     },
//   });
//   console.log(user);
// }
// createUser();
//# sourceMappingURL=index.js.map