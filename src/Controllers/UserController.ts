import { Request, Response } from "express";

class UserController {
    static async GetAll(req: Request, res: Response) {
        try {
            res.json({status: 200, message: 'Get all'});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async GetByID(req: Request, res: Response) {
        try {
            const { id } = req.params;

            res.json({status: 200, message: `GetByID ${id}`});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Add(req: Request, res: Response) {
        try {
            res.json({status: 200, message: 'Add'});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Update(req: Request, res: Response) {
        try {
            const { id } = req.params;

            res.json({status: 200, message: `Update ${id}`});
        }
        catch (error) {
            console.log(error)
        }
    }

    static async Delete(req: Request, res: Response) {
        try {
            const { id } = req.params;

            res.json({status: 200, message: `Delete ${id}`});
        }
        catch (error) {
            console.log(error)
        }
    }
}

export default UserController