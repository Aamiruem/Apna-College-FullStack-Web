// ESM
// import { faker } from '@faker-js/faker';

// CJS
const { faker } = require("@faker-js/faker");

let createRandomUser = ()=> {
    return {
    userId: faker.string.uuid(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    avatar: faker.image.avatar(),
    password: faker.internet.password(),
    birthdate: faker.date.birthdate(),
    registeredAt: faker.date.past(),
    };
}
console.log(createRandomUser)

// export const users = faker.helpers.multiple(createRandomUser, {
//   count: 5,
// });
