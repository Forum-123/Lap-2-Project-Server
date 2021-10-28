describe('logs endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'));
        await resetTestDB();
    });

    afterAll(async () => {
        console.log('Gracefully stopping test server')
        await api.close()
    });

    it('should return all logs in the database', async () => {
        const res = await request(api).get('/logs');
        expect(res.statusCode).toEqual(200);
        expect(res.body.length).toEqual(2);
    });

    it('should return a specific log', async () => {
        const res = await request(api).get('/logs/1');
        expect(res.statusCode).toEqual(200);
        expect(res.body.habitNotes).toEqual('test notes 1');
    });
});