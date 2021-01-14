class Pendrive {
    constructor(name, email) {
        this.name = name
        this.email = email
    }
    getInfo() {
        return this.name
    }
}
const obj = new Pendrive('sajeeb', 'sa@email.com')
console.log(obj.getInfo());