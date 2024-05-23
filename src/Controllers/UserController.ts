import { Request, Response } from "express";

import Validator from "../Utils/Validator";
import UserGenerator from "../Utils/UserGenerator";
import CheckObjectProperties from "../Utils/CheckObjectProperties";

interface IUser {
    id: number;
    name: string;
    email: string;
    age: number;
}

class UserController {
    private static Users: IUser[] = UserGenerator.generateUsers(100);

    static async GetAll(req: Request, res: Response) {
        try {
            res.status(200).json({ message: UserController.Users });
        } catch (error) {
            console.log(error);
        }
    }

    static async GetByID(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (!Validator.CheckInteger(id)) {
                res.status(400).json({ message: `Некорректный параметр ID` });
                return;
            }

            const user = UserController.Users.find((user) => user.id === id);

            if (user) {
                res.status(200).json({ message: user });
            } else {
                res.status(404).json({ message: `Пользователь не найден!` });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async Add(req: Request, res: Response) {
        try {
            if (!CheckObjectProperties(req.body, ["name", "email", "age"])) {
                res.status(400).json({ message: `Переданы не все параметры!` });
                return;
            }

            const { name, email, age } = req.body;

            if (!Validator.CheckRequired(name)) {
                res.status(400).json({
                    message: `Некорректное имя!`,
                });
                return;
            }

            if (
                !Validator.CheckRequired(email) ||
                !Validator.CheckEmail(String(email))
            ) {
                res.status(400).json({ message: `Некорректный email!` });
                return;
            }

            if (!Validator.CheckRequired(age) || !Validator.CheckInteger(age)) {
                res.status(400).json({ message: `Некорректный возраст!` });
                return;
            }

            const lastUserIndex = UserController.Users.length - 1;
            const lastUser = UserController.Users[lastUserIndex];

            const newUser: IUser = {
                id: lastUser.id + 1,
                name: name,
                email: email,
                age: Number(age),
            };

            UserController.Users.push(newUser);

            res.status(200).json({ message: `Пользователь с id ${newUser.id} добавлен!` });
        } catch (error) {
            console.log(error);
        }
    }

    static async Update(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (!Validator.CheckInteger(id)) {
                res.status(400).json({ message: `Некорректный параметр ID` });
                return;
            }

            const user = UserController.Users.find((user) => user.id === id);

            if (user) {
                if (
                    !CheckObjectProperties(req.body, ["name", "email", "age"])
                ) {
                    res.status(400).json({ message: `Переданы не все параметры!` });
                    return;
                }

                const { name, email, age } = req.body;

                if (!Validator.CheckRequired(name)) {
                    res.status(400).json({ message: `Некорректное имя!` });
                    return;
                }

                if (
                    !Validator.CheckRequired(email) ||
                    !Validator.CheckEmail(String(email))
                ) {
                    res.status(400).json({ message: `Некорректный email!` });
                    return;
                }

                if (
                    !Validator.CheckRequired(age) ||
                    !Validator.CheckInteger(age)
                ) {
                    res.status(400).json({ message: `Некорректный возраст!` });
                    return;
                }

                UserController.Users.forEach((user) => {
                    if (user.id === id) {
                        user.name = name;
                        (user.email = email), (user.age = Number(age));
                    }
                });

                res.status(200).json({ message: `Информация о пользователя обновлена!` });
            } else {
                res.status(404).json({
                    message: `Пользователь не найден!`,
                });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async Delete(req: Request, res: Response) {
        try {
            const id = Number(req.params.id);

            if (!Validator.CheckInteger(id)) {
                res.status(400).json({ message: `Некорректный параметр ID` });
                return;
            }

            const user = UserController.Users.find((user) => user.id === id);

            if (user) {
                UserController.Users = UserController.Users.filter(
                    (user) => user.id !== id
                );

                res.status(200).json({ message: `Пользователь удален!` });
            } else {
                res.status(404).json({ message: `Пользователь не найден!` });
            }
        } catch (error) {
            console.log(error);
        }
    }

    static async GetOlderByAge(req: Request, res: Response) {
        try {
            const age = Number(req.params.age);

            if (!Validator.CheckInteger(age)) {
                res.status(400).json({ message: `Некорректный параметр age` });
                return;
            }

            const filtered = UserController.Users.filter(
                (user) => user.age > age
            );

            res.status(200).json({ message: filtered });
        } catch (error) {
            console.log(error);
        }
    }

    static async GetByDomain(req: Request, res: Response) {
        try {
            const domain = String(req.params.domain);

            const filtered = UserController.Users.filter((user) => {
                const [userEmailName, userEmailDomain] = user.email.split("@");

                return userEmailDomain === domain;
            });

            res.status(200).json({ message: filtered });
        } catch (error) {
            console.log(error);
        }
    }

    static async GetSortedByName(req: Request, res: Response) {
        try {
            const sorted = [...UserController.Users].sort((a, b) => {
                if (a.name.toLowerCase() < b.name.toLowerCase()) {
                    return -1;
                }
                if (a.name.toLowerCase() > b.name.toLowerCase()) {
                    return 1;
                }
                return 0;
            });

            res.status(200).json({ message: sorted });
        } catch (error) {
            console.log(error);
        }
    }
}

export default UserController;
