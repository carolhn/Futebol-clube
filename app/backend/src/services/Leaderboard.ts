import { ModelStatic } from 'sequelize';
import Matches from '../database/models/Matches';
import sequelize from '../database/models';
import queryHome from '../utils/Query';

class LeaderboardService {
  private _model: ModelStatic<Matches> = Matches;

  static async getHome() {
    const [result] = await sequelize.query(queryHome());
    return result;
  }
}

export default LeaderboardService;
