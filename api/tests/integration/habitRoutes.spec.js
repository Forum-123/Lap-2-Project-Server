describe('habits endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    })

    it('should return a list of all habits in the database', async () => {
        const res = await request(api).get('/habits');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(3);
    });

    it('should return all data for a specific habit', async () => {
        const res = await request(api).get('/habits/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.habitName).toEqual('Test habit 1');
    });

});