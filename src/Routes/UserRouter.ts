import { Router } from "express";
import UserController from "../Controllers/UserController";

const UserRouter = Router();

UserRouter.get('/', UserController.GetAll)
UserRouter.get('/sorted', UserController.GetSortedByName)
UserRouter.get('/:id', UserController.GetByID)
UserRouter.post('/', UserController.Add)
UserRouter.put('/:id', UserController.Update)
UserRouter.delete('/:id', UserController.Delete)

UserRouter.get('/age/:age', UserController.GetOlderByAge)
UserRouter.get('/domain/:domain', UserController.GetByDomain)

export default UserRouter;
