const User = require('../../../models/User');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig');

describe('User', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('create', () => {
        test('it resolves with a new user on successful db query', async () => {
            let userData = { name: 'Test Name', email: 'test@email.com', password: 'testpass' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...userData, id: 1 }] });
            const result = await User.create(userData);
            expect(result).toHaveProperty('id')
        })
    });

    describe('findByEmail', () => {
        test('it resolves with user on successful db query', async () => {
            let userData = { name: 'Test Name', email: 'test@email.com', password: 'testpass' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ userData] });
            const result = await User.findByEmail("test@email.com");
            expect(result).toBeInstanceOf(User)
        })
    });
});