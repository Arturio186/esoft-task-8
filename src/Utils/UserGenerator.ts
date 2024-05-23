interface IUser {
    id: number,
    name: string,
    email: string,
    age: number
}

class UserGenerator {
    private static Names: string[] = [
        'Artur', 'Artyom', 'Kirill', 'Elena', 'Anastasia', 'Ernest', 'Ivan',
        'Michael', 'Dmitriy', 'Oleg', 'Nikolay', 'Nikita', 'Anatoliy', 'Maria',
        'Sofia', 'Eva', 'Sergey', 'Anton'
    ];

    private static Domains: string[] = [
        'gmail.com', 'yahoo.com', 'outlook.com', 'mail.ru', 'yandex.ru'
    ];

    private static getRandomInt(min: number, max: number): number {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    private static getRandomElement<T>(arr: T[]): T {
        const randomIndex = Math.floor(Math.random() * arr.length);
        return arr[randomIndex];
    }

    private static generateRandomUser(id: number): IUser {
        const name = this.getRandomElement(this.Names);
        const age = this.getRandomInt(16, 50);
        const domain = this.getRandomElement(this.Domains);
        const email = `${name.toLowerCase()}${age}@${domain}`;
        
        return {
            id: id,
            name: name,
            email: email,
            age: age
        };
    }

    public static generateUsers(count: number): IUser[] {
        const users: IUser[] = [];

        for (let i = 1; i <= count; i++) {
            users.push(this.generateRandomUser(i));
        }

        return users;
    }
}

export default UserGenerator