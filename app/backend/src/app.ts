import 'express-async-errors';
import * as express from 'express';
import routesTeams from './routes/Teams';
import routesLogin from './routes/Login';
import GenerateError from './middlewares/RouterError';
import routesMatches from './routes/Matches';
import routerLeaderboard from './routes/Leaderboard';

class App {
  public app: express.Express;

  constructor() {
    this.app = express();

    this.config();

    // Não remover essa rota
    this.app.get('/', (req, res) => res.json({ ok: true }));
  }

  private config():void {
    const accessControl: express.RequestHandler = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    };

    this.app.use(express.json());
    this.app.use(accessControl);
    this.app.use('/teams', routesTeams);
    this.app.use('/login', routesLogin);
    this.app.use('/matches', routesMatches);
    this.app.use('/leaderboard', routerLeaderboard);

    this.app.use(GenerateError);
  }

  public start(PORT: string | number):void {
    this.app.listen(PORT, () => console.log(`Running on port ${PORT}`));
  }
}

export { App };

// Essa segunda exportação é estratégica, e a execução dos testes de cobertura depende dela
export const { app } = new App();
