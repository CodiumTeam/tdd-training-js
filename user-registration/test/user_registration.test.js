let UserRegistration = require('../src/user_registration');
const UserIdGenerator = require('../src/user_id_generator');
const UserDatabase = require('../src/user_database');
const User = require('../src/user');

describe('UserRegistration', () => {

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

    userRegistration.execute('any@email.com', 'validPassword');

    let expectedUser = new User('anId', 'any@email.com', 'validPassword');
    expect(userDatabase.save).toHaveBeenCalledWith(expectedUser);
  });
});
