import { Router } from "express";
import UserController from "../Controllers/UserController";

const UserRouter = Router();

UserRouter.get('/', UserController.GetAll)
UserRouter.get('/:id', UserController.GetByID)
UserRouter.post('/', UserController.Add)
UserRouter.put('/:id', UserController.Update)
UserRouter.delete('/:id', UserController.Delete)

export default UserRouter;
