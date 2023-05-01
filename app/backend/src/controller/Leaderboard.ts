import { Request, Response } from 'express';
import LeaderboardService from '../services/Leaderboard';

class LeaderboardController {
  private _service: LeaderboardService;

  constructor() {
    this._service = new LeaderboardService();
  }

  static async getHome(req: Request, res: Response) {
    const result = await LeaderboardService.getHome();
    return res.status(200)
      .json(result);
  }
}

export default LeaderboardController;
