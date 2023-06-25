const request = require('request');
const app = require('../index'); // assuming your Express app is defined in index.js
// Get app Port


describe('User API', () => {
    const endpoint = `http://localhost:${process.env.PORT}/users`

    describe('GET /users', () => {
        test('GET /users should return an array of users', (done) => {
            request.get(endpoint, (error, response, body) => {
                expect(response.statusCode).toBe(200);
                expect(JSON.parse(body.data)).toEqual(expect.any(Array));
                done();
            });
        })
    });

    describe('POST /users'), () => {
        test('POST /users should create a new user', (done) => {
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