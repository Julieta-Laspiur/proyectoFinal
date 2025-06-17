export class UserMockup{
    static users = [
        {
            id:1,
            username:'admin',
            password: '1234',
            hashPassword: '$2b$04$SaOkfzxzpJQQoolLNNxNdu33ec.RhljJafraZv2N63GFjRVyH0eB2',
            fullName:'Admin',
            email: 'admin@fake.com',
            roles: ['admin'],

        },
        {
            id:2,
            username: 'operator',
            password: '12345',
            hashPassword: '$2b$04$SaOkfzxzpJQQoolLNNxNdu33ec.RhljJafraZv2N63GFjRVyH0eB2',
            fullName:'Operator',
            email: 'operator@fake.com',
            roles: ['operator'],
        },
    ];

    static async getSingleOrNullByUsername(username){
        return this.users.find(u => u.username === username);

    }

    static async get() {
        return this.users;
    }
}
