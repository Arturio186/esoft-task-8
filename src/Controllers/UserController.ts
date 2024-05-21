import { Request, Response } from "express";
import UserGenerator from "../Utils/UserGenerator";

interface IUser {
    id: number,
    name: string,
    email: string,
    age: number
}

class UserController {
    private static Users: IUser[] = UserGenerator.generateUsers(100);

    static async GetAll(req: Request, res: Response) {
        try {
            
            res.json({status: 200, message: UserController.Users});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async GetByID(req: Request, res: Response) {
        try {
            const { id } = req.params;

            const user = UserController.Users.find(user => user.id === Number(id))

            if (user) {
                res.json({status: 200, message: user});
            }
            else {
                res.json({status: 404, message: `Пользователь не найден!`});
            }
            
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Add(req: Request, res: Response) {
        try {
            const { id, name, email, age } = req.body

            const newUser: IUser = { id: id, name: name, email: email, age: age }

            UserController.Users.push(newUser)

            res.json({status: 200, message: 'Пользователь добавлен!'});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Update(req: Request, res: Response) {
        try {
            const { id } = req.params;
            const { name, email, age } = req.body

            UserController.Users.forEach(user => {
                if (user.id === Number(id)) {
                    user.name = name
                    user.email = email,
                    user.age = age
                }
            })

            res.json({status: 200, message: `Информация о пользователя обновлена!`});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            UserController.Users = UserController.Users.filter(user => user.id !== Number(id))

            res.json({status: 200, message: `Пользователь удален!`});
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default UserController