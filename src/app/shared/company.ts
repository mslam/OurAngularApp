export class Company {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public start_date: Date,
        public default_currency: string,
        public phone_number?: string,
        public address?: string
    ) {}
}