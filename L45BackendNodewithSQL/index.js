const { faker } = require('@faker-js/faker');

let getRandomUser = () => {
    return {
        userId: faker.string.uuid(),
        username: faker.internet.userName(),
        email: faker.internet.email(),
        avatar: faker.image.avatar(),
        password: faker.internet.password()
    };
}

console.log(getRandomUser());
