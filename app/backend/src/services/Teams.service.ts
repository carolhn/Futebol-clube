import { ModelStatic } from 'sequelize';
import modelTeams from '../database/models/Teams';
import IteamsServ from '../interface/Iteams.service';
import Iteams from '../interface/Iteams';

export default class TeamsService implements IteamsServ {
  private _model: ModelStatic<modelTeams> = modelTeams;

  public async findAll(): Promise<Iteams[]> {
    const teams = await this._model.findAll();
    return teams;
  }

  public async findById(id: number): Promise<modelTeams | null> {
    const result = await this._model.findByPk(id);
    return result;
  }
}
