import should from  'should';
import request from 'supertest';
import app from '../server';

let agent = request.agent(app);

describe('Base routes Tests', () => {

  it('should return a json list of creatives', (done) => {
    agent.get('/api/').expect(200).end((err, res) => {
      res.body.should.be.json;
      done();
    });
  });

});