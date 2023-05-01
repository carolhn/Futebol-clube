import { Router, Request, Response } from 'express';
import LoginController from '../controller/Login';
// import ValidateLogin from '../middlewares/ValidateLogin';

const routerLogin = Router();
const controller = new LoginController();

routerLogin.post(
  '/',
  (req: Request, res: Response) => controller.createLogin(req, res),
);

routerLogin.get('/role', (req: Request, res: Response) => controller.loginRole(req, res));

export default routerLogin;
