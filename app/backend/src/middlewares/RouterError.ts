import { Request, Response, NextFunction } from 'express';
import GenerateError from '../utils/GenerateError';

// rota de erros
const RouterError = (
  error: Error & Partial<GenerateError>,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => res.status(error._codeStatus || 500)
  .json({ message: error.message || 'Internal Server Error' });

export default RouterError;
