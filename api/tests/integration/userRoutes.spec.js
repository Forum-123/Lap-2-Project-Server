describe('users endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'));
        await resetTestDB()
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    });

    it('should register a user', async () => {
        const res = await request(api)
            .post('/auth/register')
            .send({
                name: 'Jeff',
                email: 'jeff@email.com',
                password: 'qualitypassword'
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty('msg');
        expect(res.body.msg).toEqual('User created');
    });

    it('should login a user', async () => {
        const res = await request(api)
            .post('/auth/register')
            .send({
                name: 'Jeff',
                email: 'jeff@email.com',
                password: 'qualitypassword'
            })
        expect(res.statusCode).toEqual(201);
        const login = await request(api)
            .post('/auth/login')
            .send({
                email: 'jeff@email.com',
                password: 'qualitypassword'
            })
            console.log(login)
        expect(login.statusCode).toEqual(200);
        expect(login.body).toHaveProperty('token');
    });
});