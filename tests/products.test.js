const request = require('supertest');
const app = require('../index');

describe('/products API', () => {
    let createdProductId;
    describe('POST /products', () => {
        test('should create a new product', async () => {
            const response = await request(app)
                .post('/products')
                .send({
                    name: 'Product 1',
                    price: 10000
                })
                .expect(201)

            createdProductId = response.body._id;
        })
    })

    describe('GET /products', () => {
        test('should get all products', async () => {
            const response = await request(app)
                .get('/products')
                .expect(200)
        })
    })

    describe('PUT /products/:id', () => {
        test('should update a product', async () => {
            const response = await request(app)
                .put('/products/' + createdProductId)
                .send({
                    name: 'Product Updated',
                    price: 10000
                })
                .expect(200)
        })
    })

    describe('DELETE /products/:id', () => {
        test('should delete a product', async () => {
            const response = await request(app)
                .delete('/products/' + createdProductId)
                .expect(200)
        })
    })

});