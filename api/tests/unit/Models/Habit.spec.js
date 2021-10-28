const Habit = require('../../../models/Habit');

const pg = require('pg');
jest.mock('pg');

const db = require('../../../dbConfig');

describe('Habit', () => {
    beforeEach(() => jest.clearAllMocks())
    
    afterAll(() => jest.resetAllMocks())

    describe('all', () => {
        test('it resolves with habits on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ rows: [{}, {}, {}]});
            const all = await Habit.all;
            expect(all).toHaveLength(3)
        })
    });

    describe('findById', () => {
        test('it resolves with habit on successful db query', async () => {
            let habitData = { id: 1, habitName: 'Test habit' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ habitData] });
            const result = await Habit.findHabitById(1);
            expect(result).toBeInstanceOf(Habit)
        })
    });


    //find by user id 
    describe('findHabitsByUserId', () => {
        test('it resolves with a habit found from user id', async () => {
            let habitData = { id: 1, habitName: 'Test habit', userId: 3 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ habitData] });
            const result = await Habit.findHabitsByUserId(3);
            expect(result).toBeInstanceOf(Array)
        })
    });
        // should this pass? does make sense for habitS by user id to be an array of habits


    describe('create', () => {
        test('it resolves with a new habit on successful db query', async () => {
            let habitData = { habitName: 'Test Habit', habitFrequency: 'Daily', userId: 1 }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ { ...habitData, id: 1 }] });
            const result = await Habit.create(habitData);
            expect(result).toHaveProperty('id')
        })
    });

    // update 

    describe('update', () => {
        test('it resolves with an updated habit on successful db query', async () => {
            let habitData = { id: 1, habitName: 'Updated Test Habit' }
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({rows: [ habitData] });
            let testHabit = new Habit({ id: 1, habitName: 'Test Habit 1'})
            const result = await testHabit.update(habitData);
            expect(result).toBeInstanceOf(Habit)
        })
    });


    // destroy
    describe('destroy', () => {
        test('it resolves with message on successful db query', async () => {
            jest.spyOn(db, 'query')
                .mockResolvedValueOnce({ id: 1 });
            let testHabit = new Habit({ id: 1, habitName: 'Test Habit 1'})
            const result = await testHabit.destroy();
            expect(result).toBe( 'Habit 1 successfully deleted')
        })
    });


});