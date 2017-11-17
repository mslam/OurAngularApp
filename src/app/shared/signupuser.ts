export class Signupuser {
    constructor(
        public signup_user_id: number,
        public signup_user_name: string,
        public signup_user_email: string,
        public signup_user_birth_date: Date,
        public signup_user_phone_number?: string,
        public signup_user_address?: string
    ) {}
}
