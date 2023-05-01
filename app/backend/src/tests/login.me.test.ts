import * as sinon from 'sinon';
import * as chai from 'chai';
//@ts-ignore
import chaiHttp = require('chai-http');

import { app } from '../app';
import User from '../database/models/Users';
import { Response } from 'superagent';
import { results, testUser } from './mock/login.mock';
import createToken from '../utils/Token';

chai.use(chaiHttp);
const { expect } = chai;

describe('Testando rota /login', () => {
  let chaiHttpResponse: Response;

  before(async () => { sinon.stub(User, "create").resolves(results as User)});

  it('1 - Testando se a requisição da rota /login retorna status 200 e token', async () => {
   const token = createToken(results);
   chaiHttpResponse = await chai.request(app).post('/login').send(testUser)
   after(()=>{sinon.restore() })

  expect(chaiHttpResponse.status).to.be.equal(200);
  expect(chaiHttpResponse.body).to.have.property('token');
 });
});

describe('Verifica se não é possível fazer login sem o campo de email', () => {
   let response: Response;

   before(async () => {
     response = await chai.request(app).post('/login').send({ password: 'secret_admin' });
   });

   it('2- Testando rota login sem email se retorna status 400 e mensagem', () => {
     expect(response.status).to.be.equal(400);
     expect(response.body).to.be.deep.equal({message: 'All fields must be filled'});
   });
});

describe('Verifica se não é possível fazer login sem o campo senha', () => {
   let response: Response;

   before(async () => {
     response = await chai.request(app).post('/login').send({ email: 'admin@admin.com',});
   });

   it('3- Testando rota login sem senha se retorna status 400 e mensagem', () => {
     expect(response.status).to.be.equal(400);
     expect(response.body).to.be.deep.equal({message: 'All fields must be filled'});
   });
});
