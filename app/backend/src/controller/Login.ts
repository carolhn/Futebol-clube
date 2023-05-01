import { Request, Response } from 'express';
import LoginService from '../services/Login';

class LoginController {
  private _service: LoginService;

  constructor() {
    this._service = new LoginService();
  }

  public async createLogin(req: Request, res: Response) {
    const { password, email } = req.body;
    const result = await this._service.createLogin(email, password);
    return res.status(200).json(result);
  }

  public async loginRole(req: Request, res: Response) {
    const token = req.headers.authorization;
    const result = await this._service.loginRole(token as string);
    return res.status(200).json(result);
  }
}

export default LoginController;
