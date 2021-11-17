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
        if (this.userDatabase.findByEmail(email)) {
            return;
        }
        let id = this.userIdGenerator.generateId();
        this.userDatabase.save(new User(id, email, password));
        this.emailSender.sendConfirmationEmail(email);
    }

    invalidPassword(password) {
        return password.length <= 8
            || !password.includes('_');
    }
}

module.exports = UserRegistration;
