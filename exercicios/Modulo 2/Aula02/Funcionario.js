class Funcionario {

    constructor(email) {
        this.email = email;
        Object.freeze(this);
    }

    get email() {
        return this.email;
    }

    set email(email) {
        this.email = email;
    }
}
