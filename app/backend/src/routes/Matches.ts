import { Router, Request, Response } from 'express';
import MatcheController from '../controller/Matches';

const routesMatches = Router();
const controller = new MatcheController();

routesMatches.get('/', (req: Request, res: Response) => controller.findAll(req, res));

routesMatches
  .patch('/:id', (req: Request, res: Response) => controller.matchesUpdate(req, res));

routesMatches
  .patch('/:id/finish', (req: Request, res: Response) => controller.matchesFinish(req, res));

routesMatches.post('/', (req: Request, res: Response) => controller.matchesCreate(req, res));

export default routesMatches;
