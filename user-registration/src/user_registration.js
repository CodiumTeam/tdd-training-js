const User = require('./user');

class UserRegistration {
    userDatabase;
    userIdGenerator;

    constructor(userDatabase, userIdGenerator) {
        this.userDatabase = userDatabase;
        this.userIdGenerator = userIdGenerator;
    }

    execute(email, password) {
        if (this.invalidPassword(password)) {
            return;
        }
        if (this.userDatabase.findByEmail(email)) {
            return;
        }
        let id = this.userIdGenerator.generateId();
        this.userDatabase.save(new User(id, email, password));
    }

    invalidPassword(password) {
        return password.length <= 8
            || !password.includes('_');
    }
}

module.exports = UserRegistration;
