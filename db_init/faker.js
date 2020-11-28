
const axios = require('axios');
const faker = require('faker');
const path = require('path');
const fs = require('fs');

const instance = axios.create({
    baseURL: 'http://localhost:5000',
});

const createRandomUser = () => {
    const email = faker.internet.email();
    // const password = faker.internet.password();
    const password = '123456';
    const firstname = faker.name.firstName();
    const lastname = faker.name.lastName();
    const age = Math.floor(Math.random() * (50 - 18 + 1)) + 18;
    const gender = ['female', 'male'][Math.floor(Math.random() * ['female', 'male'].length)];
    const gender_target = ['female', 'male', 'bi'][Math.floor(Math.random() * ['female', 'male', 'bi'].length)];

    /////////////////////////////////////////////////////////////////
    // RANDOM IMAGE
    const files = fs.readdirSync(path.join(__dirname, `../data/images_profile/${gender}_pics`));

    const profile_pic = files[Math.floor(Math.random() * files.length)]
    const bio = faker.lorem.sentence();

    return { email, password, firstname, lastname, age, gender, gender_target, bio }

};

////////////////////////////////////////////////////////////////
// Create n users

const n = 100;
for (let step = 0; step < n; step++) {
    const user = createRandomUser();
    console.log(user);
    instance.post('/api/users', user)
        .then(response => {
            console.log(response.data)
        })
        .catch(error => { console.log(error.response.data) })
}