import { ModelStatic } from 'sequelize';
import Matches from '../database/models/Matches';
import Teams from '../database/models/Teams';
import IMatchesServ from '../interface/IMatches.service';
import WebToken from '../middlewares/ValidateToken';
import IAtributs from '../interface/IMatches';
import GenerateError from '../utils/GenerateError';

class MatcheService implements IMatchesServ {
  private _model: ModelStatic<Matches> = Matches;
  private _web: WebToken;

  constructor() {
    this._web = new WebToken();
  }

  public async findAll() {
    const matches = await this._model.findAll({
      include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] },
      }, { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }],
    });
    return matches;
  }

  async findProgress(filter: string): Promise<Matches[]> {
    const inProgress = filter === 'true';
    const result = await this._model.findAll({
      where: { inProgress },
      include: [{ model: Teams, as: 'homeTeam', attributes: { exclude: ['id'] },
      }, { model: Teams, as: 'awayTeam', attributes: { exclude: ['id'] } }],
    });
    return result;
  }

  public async matchesFinish(id: number, token: string): Promise<{ message: string }> {
    this._web.validateToken(token);
    await this._model.update({ inProgress: false }, { where: { id } });
    return { message: 'Finished' };
  }

  public async matchesUpdate(
    id: number,
    token: string,
    homeTeamGoals: string,
    awayTeamGoals: string,
  ): Promise<{ message: string }> {
    this._web.validateToken(token);
    this._model.update({ homeTeamGoals, awayTeamGoals }, { where: { id } });
    return { message: 'Finished' };
  }

  public async matchesCreate(atribut: IAtributs, token: string): Promise<Matches> {
    this._web.validateToken(token);
    const validateHomeTeam = await Teams.findOne({ where: { id: atribut.homeTeamId } });
    const validateAwayTeam = await Teams.findOne({ where: { id: atribut.awayTeamId } });

    if (!validateHomeTeam || !validateAwayTeam) {
      throw new GenerateError(404, 'There is no team with such id!');
    }
    if (atribut.homeTeamId === atribut.awayTeamId) {
      throw new GenerateError(422, 'It is not possible to create a match with two equal teams');
    }

    const result = await this._model.create({ ...atribut, inProgress: true });
    return result;
  }
}

export default MatcheService;
