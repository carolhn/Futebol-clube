function query() {
  return `
  SELECT teams.team_name as name,
  hm.drawns + (hm.victories * 3) as totalPoints,
  hm.totalg as totalGames, hm.victories as totalVictories,
  hm.drawns as totalDraws, hm.losses as totalLosses,
  hm.golsHome as goalsFavor, hm.own as goalsOwn,
  hm.golsBalance as goalsBalance,
  ROUND((hm.drawns + (hm.victories * 3)) / (hm.totalg * 3) * 100, 2) as efficiency
  FROM teams LEFT JOIN( SELECT mt.home_team_id, SUM(mt.home_team_goals) as golsHome,
    SUM(mt.home_team_goals > mt.away_team_goals) as victories,
    SUM(mt.home_team_goals = mt.away_team_goals) as drawns,
    SUM(mt.home_team_goals < mt.away_team_goals) as losses,
    COUNT(mt.home_team_id) as totalg, SUM(mt.away_team_goals) as own,
    SUM(mt.home_team_goals - mt.away_team_goals) as golsBalance
    FROM matches as mt WHERE mt.in_progress = 0 GROUP BY mt.home_team_id
    ) as hm ON teams.id = hm.home_team_id GROUP BY teams.id ORDER BY 
  totalPoints DESC,
  totalVictories DESC, goalsBalance DESC, goalsFavor DESC, goalsOwn DESC`;
}

export default query;

// 1º Total de Vitórias; 2º Saldo de gols; 3º Gols a favor; 4º Gols sofridos.

// (hm.totalPoints / (hm.totalg * 3)) * 100)as efficiency
// "goalsBalance": 12,
// "efficiency": 86.67
// Para o campo Aproveitamento do time (%), que é a porcentagem de jogos ganhos, use a seguinte fórmula:
// [P / (J * 3)] * 100, onde:
// P: Total de Pontos;
// J: Total de Jogos.
