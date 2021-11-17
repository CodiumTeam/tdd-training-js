const User = require('./user');

class UserRegistration {
  userDatabase;
  userIdGenerator;
  constructor(userDatabase, userIdGenerator) {
    this.userDatabase = userDatabase;
    this.userIdGenerator = userIdGenerator;
  }

  execute(email, password) {
    let id = this.userIdGenerator.generateId();
    this.userDatabase.save(new User(id, email, password));
  }
}

module.exports = UserRegistration;
