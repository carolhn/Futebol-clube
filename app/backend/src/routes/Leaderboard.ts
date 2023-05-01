import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/Leaderboard';

const routerLeaderboard = Router();

routerLeaderboard.get(
  '/home',
  (req: Request, res:Response) => LeaderboardController.getHome(req, res),
);

export default routerLeaderboard;
