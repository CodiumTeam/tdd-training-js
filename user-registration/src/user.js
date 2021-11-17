class User {
    id;
    email;
    password;
    constructor(id, email, password) {
        this.id = id;
        this.email = email;
        this.password = password;

    }

}

module.exports = User;