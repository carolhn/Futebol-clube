import { Request, Response } from 'express';
import TeamsService from '../services/Teams.service';

export default class TeamsController {
  private service: TeamsService;

  constructor() {
    this.service = new TeamsService();
  }

  public findAll = async (req: Request, res: Response) => {
    const matches = await this.service.findAll();
    return res.status(200).json(matches);
  };

  public findById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const result = await this.service.findById(Number(id));
    return res.status(200).json(result);
  };
}
