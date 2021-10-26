const habitsController = require('../../../controllers/habits')
const Habit = require('../../../models/Habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

    /* describe('index', () => {
        test('it shows all habits on the database with a 200 status code', async () => {
            jest.spyOn(Habit, 'all', 'get').mockResolvedValue(['habit1', 'habit2', 'habit3'])
            await habitsController.index(null, mockRes);
            expect(mockJson).toHaveBeenCalledWith(['habit1', 'habit2', 'habit3'])
            expect(mockStatus).toHaveBeenCalledWith(200);

        })
    }); */

    describe('show', () => {
        test('it returns a habit with a 200 status code', async () => {
            let testHabit = {
                id: 1, habit_name: 'Test habit 1', habit_frequency: 'Daily', user_id: 1
            }
            jest.spyOn(Habit, 'findHabitById')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { id: 1 } }
            await habitsController.show(mockReq, mockRes);
            //expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });
    
})