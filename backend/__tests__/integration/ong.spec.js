const request = require('supertest');
const app = require('../../src/app')
const connection = require('../../src/database/connection')
 
describe('Ong', () => {
    beforeEach(async () => {
        await connection.migrate.rollback();
        await connection.migrate.latest();
    });

    afterAll(async () =>{
        await connection.destroy();
    })

    it('should be able to create a new ONG', async () => {

        const response = await request(app)
        .post('/ongs')
        //.set('authorization', 'idididi')
        .send({
            name: "ADA2",
            email: "contato@email.com",
            whatsapp: "05511988028817",
            city: "Florianopolis",
            uf: "SC"
        })

        console.log(response.body)

        expect(response.body).toHaveProperty('id');
        expect(response.body.id).toHaveLength(8)

    })
})  