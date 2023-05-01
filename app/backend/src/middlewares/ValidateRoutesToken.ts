import { Request, Response } from 'express';
import GenerateError from '../utils/GenerateError';

const ValidateRoutesToken = (req: Request, _res: Response) => {
  const auth = req.headers.authorization;
  if (!auth) throw new GenerateError(401, 'Token not found');
};

export default ValidateRoutesToken;
