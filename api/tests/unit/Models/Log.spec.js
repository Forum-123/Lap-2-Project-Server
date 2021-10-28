const Log = require('../../../models/Log');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig');

describe('Log', () => {
    beforeEach(() => jest.clearAllMocks())

    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with logs on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}] });
            const all = await Log.all;
            expect(all).toHaveLength(3);
        });
    });

    describe('findLogById', () => {
        test('it resolves with log on successful db query', async () => {
            let logData = { id: 1, logDate: '2021-10-28', habitNotes: null, habitId: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [logData] });
            const result = await Log.findLogById(1);
            expect(result).toBeInstanceOf(Log);
        });
    });

    describe('getLogsByHabitId', () => {
        test('it resolves with a log found from habit id', async () => {
            jest.spyOn(db, 'query');
            const result = await Log.getLogsByHabitId(3);
            expect(result).toBeInstanceOf(Array);
        });
    });

    describe('create', () => {
        test('it resolves with a new log on successful db query', async () => {
            let logData = { logDate: '2021-10-28', habitNotes: null, habitId: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{ ...logData, id: 1 }] });
            const result = await Log.create(logData);
            expect(result).toHaveProperty('id')
        })
    });
});
