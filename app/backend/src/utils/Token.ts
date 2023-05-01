import * as jwt from 'jsonwebtoken';
import IUser from '../interface/IUser';

const secret = process.env.JWT_SECRET;

function createToken(payload: IUser) {
  const config: jwt.SignOptions = {
    expiresIn: '6m',
    algorithm: 'HS256',
  };
  const token = jwt.sign(payload, secret as string, config);
  return token;
}

export default createToken;
