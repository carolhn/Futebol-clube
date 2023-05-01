import { compare } from 'bcryptjs';
import { ModelStatic } from 'sequelize';
import Users from '../database/models/Users';
import createToken from '../utils/Token';
import IUser from '../interface/IUser';
import GenerateError from '../utils/GenerateError';
import WebToken from '../middlewares/ValidateToken';

class LoginService {
  private _model: ModelStatic<Users> = Users;
  private _web: WebToken;

  constructor() {
    this._web = new WebToken();
  }

  public async createUser(name: string, email: string, password: string): Promise<Users> {
    const users = await this._model.create({ name, email, password });
    console.log('aqui é o user do create da service', users);
    return users;
  }

  public async createLogin(email: string, _password: string): Promise<{ token: string }> {
    const user = await this._model
      .findOne({ where: { email } });

    if (!user) {
      throw new GenerateError(401, 'Invalid email or password');
    }
    const teste = await compare(_password, user?.password as string);
    if (!teste) {
      throw new GenerateError(401, 'Invalid email or password');
    }

    const tokenLogin = createToken(user?.dataValues as IUser);
    return { token: tokenLogin };
  }

  public async loginRole(token: string) {
    const { role } = this._web.validateToken(token);
    return { role };
  }
}

export default LoginService;
