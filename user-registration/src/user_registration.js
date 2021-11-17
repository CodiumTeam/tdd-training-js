const User = require('./user');

class UserRegistration {
    userDatabase;
    userIdGenerator;
    emailSender;

    constructor(userDatabase, userIdGenerator, emailSender) {
        this.emailSender = emailSender;
        this.userDatabase = userDatabase;
        this.userIdGenerator = userIdGenerator;
    }

    execute(email, password) {
        if (this.invalidPassword(password)) {
            return;
        }
        if (this.userAlreadyExists(email)) {
            return;
        }
        let user = this.createUser(email, password);
        this.userDatabase.save(user);
        this.emailSender.sendConfirmationEmail(email);
    }

    createUser(email, password) {
        let id = this.userIdGenerator.generateId();
        return new User(id, email, password);
    }

    userAlreadyExists(email) {
        return this.userDatabase.findByEmail(email);
    }

    invalidPassword(password) {
        return password.length <= 8
            || !password.includes('_');
    }
}

module.exports = UserRegistration;
