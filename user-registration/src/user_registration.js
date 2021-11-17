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
        this.ensureEmailIsNotUsed(email);
        let user = this.createUser(email, password);
        this.userDatabase.save(user);
        this.emailSender.sendConfirmationEmail(email);
    }

    ensureEmailIsNotUsed(email) {
        if (this.userDatabase.findByEmail(email)) {
            throw new Error('User already exists');
        }
    }

    createUser(email, password) {
        let id = this.userIdGenerator.generateId();
        return new User(id, email, password);
    }
    invalidPassword(password) {
        return password.length <= 8
            || !password.includes('_');
    }
}

module.exports = UserRegistration;
