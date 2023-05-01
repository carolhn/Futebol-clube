import { Request, Response, NextFunction } from 'express';

const ValidateLogin = (req: Request, res: Response, next: NextFunction) => {
  const { password, email } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  if (password.length < 6) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  const loginRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const validateEmail = loginRegex.test(email);

  if (!validateEmail) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

export default ValidateLogin;
