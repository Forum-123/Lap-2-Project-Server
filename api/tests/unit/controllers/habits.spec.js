const habitsController = require('../../../controllers/habits')
const Habit = require('../../../models/Habit');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson, end: jest.fn() }))
const mockRes = { status: mockStatus }

describe('habits controller', () => {
    beforeEach(() =>  jest.clearAllMocks());

    afterAll(() => jest.resetAllMocks());

     describe('index', () => {
        test('it shows all habits on the database with a 200 status code', async () => {
            jest.spyOn(Habit, 'all', 'get').mockResolvedValue(['habit 1', 'habit 2', 'habit 3'])
            await habitsController.index(null, mockRes);
            expect(mockJson).toHaveBeenCalledWith(['Test habit 1', 'Test habit 2', 'Test habit 3']);
            console.log(mockJson)
            expect(mockStatus).toHaveBeenCalledWith(200);
        })
    }); 

    describe('show', () => {
        test('it returns a habit with a 200 status code', async () => {
            let testHabit = {
                id: 1, habitName: 'Test habit 1', habitFrequency: 'Daily', userId: 1
            }
            jest.spyOn(Habit, 'findHabitById')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { id: 1 } }
            await habitsController.show(mockReq, mockRes);
            //expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });
    

    // show by user
    describe('show', () => {
        test('it returns a habit from a user id with a 200 status code', async () => {
            let testHabit = {
                id: 1, habitName: 'Test habit 1', habitFrequency: 'Daily', userId: 2
            }
            jest.spyOn(Habit, 'findHabitsByUserId')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { params: { id: 2 } }
            await habitsController.show(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(200);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    // create 
    describe('create', () => {
        test('it returns a new habit with a 201 status code', async () => {
            let testHabit = {
                id: 3, habitName: 'Test habit 3', habitFrequency: 'Daily', userId: 2
            }
            jest.spyOn(Habit, 'create')
                .mockResolvedValue(new Habit(testHabit));
                
            const mockReq = { body: testHabit }
            await habitsController.create(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith(new Habit(testHabit));
        })
    });

    // update 
    describe('update', () => {
        test('it updates a habit and returns a 204 status code', async () => {
            jest.spyOn(Habit.prototype, 'update')
                .mockResolvedValue('updated');

            const mockReq = { params: { id: 1 }, body: {habitName: "new test habit"} }
            await habitsController.update(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });

    // delete
    describe('destroy', () => {
        test('it returns a 204 status code on successful deletion', async () => {
            jest.spyOn(Habit.prototype, 'destroy')
                .mockResolvedValue('Deleted');
            
            const mockReq = { params: { id: 1 } }
            await habitsController.destroy(mockReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(204);
        })
    });
    
})