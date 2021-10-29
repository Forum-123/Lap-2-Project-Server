const logsControllers = require('../../../controllers/logs')
const Log = require('../../../models/Log');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('logs controller', () => {
    beforeEach(() => jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    describe('index', () => {
        test('it shows all logs on the database with a 200 status code', async () => {
            jest.spyOn(Log, 'all', 'get').mockResolvedValue(['log1', 'log2'])
            await logsControllers.index(null, mockRes);
            expect(mockJson).toHaveBeenCalledWith(['log1', 'log2']);
            expect(mockStatus).toHaveBeenCalledWith(200);
        });
    });

    describe('show', () => {
        test('it returns a log with a 200 status code', async () => {
            let testLog = {
                id: 1, habitId: 1,
                logDate: '2021-10-28',
                habitNotes: 'this is a test'
            }
            jest.spyOn(Log, 'findLogById')
                .mockResolvedValue(new Log(testLog));

            const mockReq = { params: { id: 1 } }
            await logsControllers.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Log(testLog));
        });
    });

    describe('show', function () {
        test('it returns a log from a habit ID with a 200 status code', async () => {
            let testLog = {
                id: 1, habitId: 1,
                logDate: '2021-10-28',
                habitNotes: 'this is a test'
            }
            jest.spyOn(Log, 'getLogsByHabitId')
                .mockResolvedValue(new Log(testLog));

            const mockReq = { params: { id: 1 } }
            await logsControllers.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Log(testLog));
        });
    });

    describe('create', () => {
        test('it returns a new log with a 201 status code', async () => {
            let testLog = {
                id: 2, habitId: 1,
                logDate: '2021-10-28',
                habitNotes: 'this is a creation test'
            }
            jest.spyOn(Log, 'create')
                .mockResolvedValue(new Log(testLog));

            const mockReq = { body: testLog }
            await logsControllers.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Log(testLog));
        });
    });
});