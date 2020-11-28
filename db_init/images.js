const path = require('path');
const fs = require('fs');
const axios = require('axios');
const FormData = require('form-data');
const { uuid } = require('uuidv4');
const { exit } = require('process');
const { image } = require('faker');


const instance = axios.create({
    baseURL: 'http://localhost:5000',
    // headers: { 'X-Auth-Token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjozfSwiaWF0IjoxNjAyNzk2MjQ0LCJleHAiOjE2MDMxNTYyNDR9.TCyb0wk7_lWxkuZztckysx33bGJtuTOwpg23y2vhwEM' }
});

////////////////////////////////////////////////////////////////////////////////////////////
// CHANGE IMAGES FILENAMES (I think is useless)
//
// Get all users from a given gender and for each file change the filename

// const gender = 'male';

// const directoryPath = path.join(__dirname, `../data/images_profile/${gender}_pics`)
// const files = fs.readdirSync(directoryPath);

// files.forEach(fileName => {

//     const newFileName = `${uuid()}${path.extname(fileName)}`;
//     console.log(fileName, newFileName);
//     fs.rename(path.join(directoryPath, fileName), path.join(directoryPath, newFileName), function (err) {
//         if (err) throw err;
//         console.log(fileName, newFileName, 'renamed complete');
//     });
// })

//
////////////////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////////////////
// Upload 1 file

const getToken = async (email) => {
    const config = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const body = JSON.stringify({
        email,
        password: '123456'
    });
    const resp = await instance.post('/api/login', body, config);
    return resp.data.token;
};



// (uploadImages = async (gender) => {
//     // For each profile (with a given gender) create 1 image

//     const directoryPath = path.join(__dirname, `../data/images_profile/${gender}_pics`);


//     fs.readdir(directoryPath, async (err, files) => {

//         const resp = await instance.get(`/api/users?gender=${gender}`);
//         const profiles = resp.data

//         profiles.forEach(async ({ email }) => {

//             const image = files[Math.floor(Math.random() * files.length)]

//             const token = await getToken(email);


//             var formData = new FormData();
//             formData.append('file', fs.createReadStream(`../data/images_profile/${gender}_pics/${image}`));

//             const config = {
//                 headers: {
//                     'content-type': `multipart/form-data; boundary=${formData._boundary}`,
//                     'X-Auth-Token': token
//                 }
//             }

//             try {
//                 const resp = await instance.post('/api/image', formData, config);
//                 console.log(resp.data);
//             } catch (error) {
//                 console.log(error);
//             }

//         });

//     });

// })('female');

////////////////////////////////////////////////////////////////////////////////////////////
// FOR EACH USER (NO MATTER GENDER) GET ALL PICS, TAKE THE FIRST ONE
// AND PUT IT AS PROFILE PIC

(async function () {
    const resp = await instance.get('/api/users');

    const users = resp.data;
    // console.log(users);
    users.forEach(async ({ id, email }) => {

        //////////////////////////////////////////
        // 1. GET IMAGES FOR THE GIVEN USER
        let profile_pic = undefined
        try {
            const resp = await instance.get(`api/image?user_id=${id}`);
            if (!resp.data[0])
                return;
            profile_pic = resp.data[0].path;
        } catch (error) {
            console.log(error);
            exit();
        }

        //////////////////////////////////////////
        // 2. UPDATE GIVEN USER WITH ONE OF THE IMAGES (FIRST ONE resp.data[0])
        const token = await getToken(email);

        const config = {
            headers: {
                'content-type': `application/json`,
                'X-Auth-Token': token
            }
        }

        const formData = { profile_pic };

        try {
            const resp = await instance.put(`/api/users/${id}`, formData, config);
            console.log(resp.data);
        } catch (error) {
            console.log(error);
            exit();
        }


    })
})();


