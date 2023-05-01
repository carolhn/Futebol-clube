import { Request, Response } from 'express';
import MatcheService from '../services/Matches';

class MatcheController {
  private _service: MatcheService;

  constructor() {
    this._service = new MatcheService();
  }

  public async findAll(req: Request, res: Response) {
    const { inProgress } = req.query;
    const teste = inProgress ? await this
      ._service.findProgress(inProgress as string) : await this._service.findAll();
    return res.status(200).json(teste);
  }

  public async matchesFinish(req: Request, res: Response) {
    const { id } = req.params;
    const { authorization } = req.headers;
    const result = await this._service.matchesFinish(Number(id), authorization as string);
    return res.status(200).json(result);
  }

  public async matchesUpdate(req: Request, res: Response) {
    const { id } = req.params;
    const { authorization } = req.headers;
    const { homeTeamGoals, awayTeamGoals } = req.body;
    const result = await this
      ._service.matchesUpdate(Number(id), authorization as string, homeTeamGoals, awayTeamGoals);
    return res.status(200).json(result);
  }

  public async matchesCreate(req: Request, res: Response) {
    const atribut = req.body;
    const { authorization } = req.headers;
    const result = await this._service.matchesCreate(atribut, authorization as string);

    return res.status(201).json(result);
  }
}

export default MatcheController;
