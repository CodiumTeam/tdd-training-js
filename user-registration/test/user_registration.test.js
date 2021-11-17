let UserRegistration = require('../src/user_registration');
const UserIdGenerator = require('../src/user_id_generator');
const UserDatabase = require('../src/user_database');
const User = require('../src/user');

describe('UserRegistration', () => {
    const VALID_PASSWORD = 'valid_password';

    let userIdGenerator;
    let userDatabase;
    let userRegistration;

    beforeEach(() => {
        userIdGenerator = new UserIdGenerator();
        userDatabase = new UserDatabase();
        userRegistration = new UserRegistration(userDatabase, userIdGenerator);
    });

    it('persist the user with the id', () => {
        userIdGenerator.generateId = jest.fn().mockReturnValue('anId');
        jest.spyOn(userDatabase, 'save').mockName('save');

        userRegistration.execute('any@email.com', VALID_PASSWORD);

        let expectedUser = new User('anId', 'any@email.com', VALID_PASSWORD);
        expect(userDatabase.save).toHaveBeenCalledWith(expectedUser);
    });

    it('cannot exist two users with the same email', () => {
        userDatabase.findByEmail = jest.fn().mockReturnValue(true);
        jest.spyOn(userDatabase, 'save').mockName('save');

        userRegistration.execute('any@email.com', VALID_PASSWORD);

        expect(userDatabase.save).not.toHaveBeenCalled();
    });

    describe('with invalid passwords', () => {
        it('cannot register a user with a password shorter than 9 characters', () => {
            jest.spyOn(userDatabase, 'save').mockName('save');
            let shortPassword = 'asdf_123';

            userRegistration.execute('any@email.com', shortPassword);

            expect(userDatabase.save).not.toHaveBeenCalled();
        });

        it('cannot register a user with a password has not an underscore', () => {
            jest.spyOn(userDatabase, 'save').mockName('save');
            let passwordWithoutUnderscore = 'asdf56789';

            userRegistration.execute('any@email.com', passwordWithoutUnderscore);

            expect(userDatabase.save).not.toHaveBeenCalled();
        });
    });
});
