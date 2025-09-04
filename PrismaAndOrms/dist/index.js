import { PrismaClient } from "@prisma/client";
const client = new PrismaClient();
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
async function createUser() {
    const user = await client.user.findFirst({
        where: {
            id: 2
        },
        include: {
            todos: true
        }
    });
    console.log(user);
}
createUser();
//# sourceMappingURL=index.js.map