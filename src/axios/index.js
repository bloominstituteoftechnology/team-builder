import { v4 as uuid } from 'uuid';

// 👉 the shape of the list of users from API
const initialUsersList = [
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        username: 'Vasya',
        email: 'vasya@laptev.com',
        role: 'Student',
    },
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        username: 'Anna',
        email: 'anna@laptev.com',
        role: 'Manager',
    },
    {
        id: uuid(), // uuid is a lib to generate random, unique ids
        username: 'Alex',
        email: 'alex@laptev.com',
        role: 'Teacher',
    },
];

// 👉 simulating axios for [GET] and [POST]
export default {
    get()
    {
        return Promise.resolve({ status: 200, success: true, data: initialUsersList });
    },
    post(url, { username, email, role })
    {
        const newUser = { id: uuid(), username, email, role };
        return Promise.resolve({ status: 200, success: true, data: newUser });
    }
};
