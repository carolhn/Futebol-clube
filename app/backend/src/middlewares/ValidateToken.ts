import * as jwt from 'jsonwebtoken';
import GenerateError from '../utils/GenerateError';
import IUser from '../interface/IUser';

class WebToken {
  private _secret: jwt.Secret;
  private _payload: IUser | undefined;
  private _auth: string | undefined;

  constructor(payload?: IUser) {
    this._payload = payload;
    this._secret = process.env.JWT_SECRET as jwt.Secret;
  }

  public validateToken(token: string): IUser {
    if (!token) throw new GenerateError(401, 'Token not found');
    try {
      this._auth = token;
      return jwt.verify(this._auth, this._secret) as IUser;
    } catch (error) {
      throw new GenerateError(401, 'Token must be a valid token');
    }
  }
}

export default WebToken;
