const request = require('request');
const app = require('../index'); // assuming your Express app is defined in index.js

describe('User API', () => {
    let createdUserId;

    describe('GET /users', () => {
        test('GET /users should return an array of users', (done) => {
            const endpoint = 'http://localhost:3000/users'

            request.get(endpoint, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(JSON.parse(body)).toEqual(expect.any(Array));
                done();
            });
        })
    });

    describe('POST /users'), () => {
        test('POST /users should create a new user', (done) => {
            const endpoint = 'http://localhost:3000/users'; // Adjust the URL based on your API endpoint
            const user = {
                name: 'John Doe',
                age: 25
            };

            request.post(endpoint, {
                json: user
            }, (error, response, body) => {
                expect(response.statusCode).toBe(201);
                expect(body.data).toEqual(expect.objectContaining(user));
                done();
            });
        });
    }
});