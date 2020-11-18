let PasswordValidator = require('../src/password_validator');

describe('Password validator', () => {
  it('change_this_name', () => {
    let passwordValidator = new PasswordValidator();

    expect(passwordValidator.changeThisName()).toBe(true);
  });
});
