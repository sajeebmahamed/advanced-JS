class Dictionary {
    constructor() {
        this.dictionary = {}
    }
    add(key, value) {
        this.dictionary[key] = value
    }
    get(key) {
        return this.dictionary[key]
    }
}

const laptop = new Dictionary()
laptop.add('assus', '0.8')
laptop.add('hp', '0.9')
laptop.add('dell', '0.6')
console.log(laptop.dictionary);
console.log(laptop.get('hp'));