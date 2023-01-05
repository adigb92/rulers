export default class Task {
    constructor(description) {
        this.id = Math.floor(Math.random() * 1000);
        this.description = description;
        this.completed = false;
    }

    get(propName) {
        return this[propName];
    }
    set(propName, value) {
        this[propName] = value;
    }
}


