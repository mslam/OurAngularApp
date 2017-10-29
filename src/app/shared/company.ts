export class Company {
    constructor(
        public id: number,
        public name: string,
        public email: string,
        public startDate: Date,
        public defaultCurrency: string,
        public phoneNumber?: string,
        public address?: string
    ) {}
}