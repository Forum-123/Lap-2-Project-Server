const authController = require('../../../controllers/auth');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../../../models/User');

const mockSend = jest.fn();
const mockJson = jest.fn();
const mockStatus = jest.fn(code => ({ send: mockSend, json: mockJson }))
const mockRes = { status: mockStatus }

describe('auth controller', () => {
    beforeEach(() => jest.clearAllMocks());
    afterAll(() => jest.resetAllMocks());

    describe('register', () => {
        test("it creates a new user and returns 'user created'", async () => {
            let testUser = {
                name: 'simon',
                email: 'simon@email.com',
                password: 'epicpass'
            }
            jest.spyOn(User, 'create');
            const testReq = { body: testUser }
            await authController.register(testReq, mockRes);
            expect(mockStatus).toHaveBeenCalledWith(201);
            expect(mockJson).toHaveBeenCalledWith({ msg: 'User created' });
        });
    });

    describe('login', () => {
        //Come back to this one
        test("it finds a user", async () => {
            let getUser = {
                name: 'simon',
                email: 'simon@email.com',
                password: 'epicpass'
            }
            jest.spyOn(User, 'findByEmail').mockResolvedValue(new User(getUser))
            await authController.login({ body: { email: getUser.email } }, mockRes);
            expect(mockJson).toHaveBeenCalledTimes(1);
            //expect(mockStatus).toHaveBeenCalledWith(200);
        });
    });
});