let UserRegistration = require('../src/user_registration');
const UserIdGenerator = require('../src/user_id_generator');
const UserDatabase = require('../src/user_database');
const User = require('../src/user');

describe('UserRegistration', () => {
  it('persist the user with the id', () => {
    const userIdGenerator = new UserIdGenerator();
    userIdGenerator.generateId = jest.fn().mockReturnValue('anId');
    const userDatabase = new UserDatabase();
    jest.spyOn(userDatabase, 'save').mockName('save');
    const userRegistration = new UserRegistration(userDatabase, userIdGenerator);

    userRegistration.execute('any@email.com', 'validPassword');

    expect(userDatabase.save).toHaveBeenCalledWith(new User('anId', 'any@email.com', 'validPassword'));
  });
});
