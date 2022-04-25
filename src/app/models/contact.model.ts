export class Contact {

    public _id: string
    constructor(
        public name: string = '',
        public email: string = '',
        public phone: string = '') {

    }

    setId?(id: string): void {
        // Implement your own set Id
        this._id = id
    }
}

