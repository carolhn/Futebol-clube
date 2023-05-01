import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import Teams from '../database/models/Teams';
import { Response } from 'superagent';
import mockeTeams from './mock/teams.mock';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando rota /teams', () => {
  let chaiHttpResponse: Response;

  before(async () => {
     sinon
      .stub(Teams, "findAll")
      .resolves(mockeTeams as Teams[]);
  });

   after(()=>{
    (Teams.findAll as sinon.SinonStub).restore();
 })

  it('Testando se a requisição retornar status 200 e uma mensagem', async () => {
    chaiHttpResponse = await chai
       .request(app).get('/teams')

  expect(chaiHttpResponse.status).to.be.equal(200);
  expect(chaiHttpResponse.body).to.be.deep.equal(mockeTeams)
 });

 it('Testando se a requisição retornar status 200 e uma mensagem /:id', async () => {
  chaiHttpResponse = await chai
     .request(app).get('/teams/:id')

expect(chaiHttpResponse.status).to.be.equal(200);
expect(chaiHttpResponse.body).to.be.deep.equal(mockeTeams[0])
});

});
