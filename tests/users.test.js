const request = require('supertest');
const index = require('../index');

describe('/users API', () => {
    describe('POST /users', () => {
        test('should create a new user', async () => {
            const response = await request(app)
                .post('/users')
                .send({
                    name: 'John Doe',
                    age: 25
                })
                .expect(201)
        })
    })

    describe('GET /users', () => {
        test('should get all users', async () => {
            const response = await request(app)
                .get('/users')
                .expect(200)
        })
    })
})