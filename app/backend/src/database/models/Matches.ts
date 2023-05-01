import { Model, INTEGER, BOOLEAN } from 'sequelize';
import db from '.';
import Teams from './Teams';

class Matches extends Model {
  declare id: number;
  declare homeTeamId: number;
  declare homeTeamGoals: number;
  declare awayTeamId: number;
  declare awayTeamGoals: number;
  declare inProgress: boolean;
}

Matches.init({
  id: {
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
    type: INTEGER,
  },

  homeTeamId: {
    field: 'home_team_id',
    type: INTEGER,
    allowNull: false,
  },

  homeTeamGoals: {
    field: 'home_team_goals',
    type: INTEGER,
    allowNull: false,
  },

  awayTeamId: {
    field: 'away_team_id',
    type: INTEGER,
    allowNull: false,
  },

  awayTeamGoals: {
    field: 'away_team_goals',
    type: INTEGER,
    allowNull: false,
  },

  inProgress: {
    field: 'in_progress',
    type: BOOLEAN,
    allowNull: false,
  },
}, {
  underscored: true,
  sequelize: db,
  modelName: 'matches',
  timestamps: false,
});

Matches.belongsTo(Teams, { foreignKey: 'homeTeamId', as: 'homeTeam' });
Matches.belongsTo(Teams, { foreignKey: 'awayTeamId', as: 'awayTeam' });

Teams.hasMany(Matches, { foreignKey: 'id', as: 'homeTeam' });
Teams.hasMany(Matches, { foreignKey: 'id', as: 'awayTeam' });

export default Matches;
