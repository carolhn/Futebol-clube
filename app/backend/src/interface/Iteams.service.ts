import ITeams from './Iteams';

interface IteamsServ {
  findAll(): Promise<ITeams[]>;
}

export default IteamsServ;
