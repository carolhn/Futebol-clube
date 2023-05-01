import Matches from '../database/models/Matches';

interface IMatchesServ {
  findAll(): Promise<Matches[]>;
}

export default IMatchesServ;
