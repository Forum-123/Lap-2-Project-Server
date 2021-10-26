//const { request } = require("../../server");

describe('habits endpoints', () => {
    let api;
    beforeEach(async () => {
        await resetTestDB()
    });

    beforeAll(async () => {
        api = app.listen(5000, () => console.log('Test server running on port 5000'))
        await resetTestDB()
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

    it('should create a new habit', async () => {
        const res = await request(api)
            .post('/habits')
            .send({
                habit_name: 'Sleep 8 hours',
                habit_frequency: 'Daily',
                user_id: 4
            })
        expect(res.statusCode).toEqual(201);
        expect(res.body).toHaveProperty("habitName");
        expect(res.body.habitName).toEqual('Sleep 8 hours')
    });

    it('should update a habit', async () => {
        const res = await request(api)
            .put('/habits/3')
            .send({
                habit_name: 'Updated habit'
            })
        expect(res.statusCode).toEqual(204);
        const updateCheck = await request(api).get('/habits/3');
        expect(updateCheck.body.habitName).toEqual('Updated habit');
    });

    it('should delete a habit', async () => {
        const res = await request(api)
            .delete('/habits/1')
        expect(res.statusCode).toEqual(204);

        const habitRes = await request(api).get('/habits/1');
        expect(habitRes.statusCode).toEqual(404);
        expect(habitRes.body).toEqual('Habit 1 not found.')
    })
});