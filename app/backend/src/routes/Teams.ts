import { Router, Request, Response } from 'express';
import TeamsController from '../controller/Team.controller';

const routesTeams = Router();
const controller = new TeamsController();

routesTeams.get('/', (req: Request, res: Response) => controller.findAll(req, res));
routesTeams.get('/:id', (req: Request, res: Response) => controller.findById(req, res));

export default routesTeams;
