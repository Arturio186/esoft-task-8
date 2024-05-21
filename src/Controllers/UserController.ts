import { Request, Response } from "express";
import UserGenerator from "../Utils/UserGenerator";
import CheckObjectProperties from "../Utils/CheckObjectProperties";

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
            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.json({status: 400, message: `Некорректный параметр ID`})
                return
            }
            
            const user = UserController.Users.find(user => user.id === id)

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
            if (!CheckObjectProperties(req.body, ['name', 'email', 'age'])) {
                res.json({status: 400, message: `Переданы не все параметры!`})
                return
            }

            const { name, email, age } = req.body

            const lastUserIndex = UserController.Users.length - 1
            const lastUser = UserController.Users[lastUserIndex]

            const newUser: IUser = { id: lastUser.id + 1, name: name, email: email, age: age }

            UserController.Users.push(newUser)

            res.json({status: 200, message: `Пользователь с id ${newUser.id} добавлен!`});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.json({status: 400, message: `Некорректный параметр ID`})
                return
            }

            const user = UserController.Users.find(user => user.id === id)

            if (user) {
                if (!CheckObjectProperties(req.body, ['name', 'email', 'age'])) {
                    res.json({status: 400, message: `Переданы не все параметры!`})
                    return
                }

                const { name, email, age } = req.body

                UserController.Users.forEach(user => {
                    if (user.id === id) {
                        user.name = name
                        user.email = email,
                        user.age = age
                    }
                })

                res.json({status: 200, message: `Информация о пользователя обновлена!`});
            }
            else {
                res.json({status: 404, message: `Пользователь не найден!`});
            }
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (isNaN(id)) {
                res.json({status: 400, message: `Некорректный параметр ID`})
                return
            }

            const user = UserController.Users.find(user => user.id === id)

            if (user) {
                UserController.Users = UserController.Users.filter(user => user.id !== id)

                res.json({status: 200, message: `Пользователь удален!`});
            }
            else {
                res.json({status: 404, message: `Пользователь не найден!`});
            }

        }
        catch (error) {
            console.log(error)
        }
    }
}

export default UserController