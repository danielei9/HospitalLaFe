
const request = require('request');
const chai = require('chai');
const { expect } = require('chai');
const domainPort = "localhost:7878"
const subPath = "/api/V1_1"
const chaiHttp = require('chai-http');

chai.use(chaiHttp);

let user_id = "64f8cc65c794fd6cb51e5282";

const name = "jhondoe_66";
const password = "password";
const username = "jhondoe_66";
const email = "jhondoe_66@jhondoe.com";

describe('Auth Test:', () => {

  it('Create a new User', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .post(`/signup`)
      .send({
        username: username,
        password: password,
        email: email,
        name: name
      });

    const _name = res.body.name;
    const _email = res.body.email;
    const _username = res.body.username;
    const _password = res.body.password;
    user_id = res.body._id
    expect(res).to.have.status(201);
    expect(_name).to.equal(name);
    expect(_email).to.equal(email);
    expect(_password).to.not.equal(password);
    expect(_username).to.equal(username);
  });

  it('Login User', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .post(`/login`)
      .send({
        password: password,
        email: email,
      });

    authToken = res.body.token;
    expect(res).to.have.status(200);
  });
});

describe('User crud:', () => {

  it('Should get all users with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .get(`/user`)
      .set('Authorization', authToken)
      .send();

    expect(res).to.have.status(200);
  });
  it('Shouldn\'t get users without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .get(`/user`)
      .send();

    expect(res).to.have.status(401);
  });

  it('Shouldn\'t put users without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .put(`/user/${user_id}`)
      .send({
        username: "username",
        password: "password",
        email: "email",
        name: "name"
      });

    expect(res).to.have.status(401);
  });

  it('Should put users with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .put(`/user/${user_id}`)
      .set('Authorization', authToken)
      .send({
        username: "username1",
        password: "password1",
        email: "email12",
        name: "name"
      });

    expect(res).to.have.status(200);
  });

  it('Should delete users with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .delete(`/user/${user_id}`)
      .set('Authorization', authToken)
      .send();

    expect(res).to.have.status(200);
  });

  it('Shouldn\'t delete users without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .delete(`/user/${user_id}`)
      .send();

    expect(res).to.have.status(401);
  });
});


describe('Measure crud:', () => {
  let measure_id = "";
  it('Should post Measure with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .post(`/measure`)
      .set('Authorization', authToken)
      .send({
        username: "jhaneDoe12",
        surname: "jhaneDoe12",
        dni: "312312",
        password: "password12",
        email: "jhaneDoe12",
        name: "jhaneDoe12",
        state: "OK",
        data: 50
      });

    measure_id = res.body._id;

    expect(res).to.have.status(200);
  });


  it('Should get all Measure with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .get(`/measure`)
      .set('Authorization', authToken)
      .send();

    expect(res).to.have.status(200);
  });

  it('Shouldn\'t get measure without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .get(`/measure`)
      .send();

    expect(res).to.have.status(401);
  });

  it('Shouldn\'t put measure without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .put(`/measure/${measure_id}`)
      .send({
        username: "jhaneDoe",
        surname: "jhaneDoe",
        dni: "3123",
        password: "password",
        email: "jhaneDoe",
        name: "jhaneDoe",
        state: "OK",
        data: 50
      });

    expect(res).to.have.status(401);
  });

  it('Should put measure with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .put(`/measure/${measure_id}`)
      .set('Authorization', authToken)
      .send({
        username: "jhaneDoe",
        surname: "jhaneDoe",
        dni: "3123",
        password: "password",
        email: "jhaneDoe",
        name: "jhaneDoe",
        state: "OK",
        data: 50
      });

    expect(res).to.have.status(200);
  });

  it('Should delete measures with Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .delete(`/measure/${measure_id}`)
      .set('Authorization', authToken)
      .send();

    expect(res).to.have.status(200);
  });

  it('Shouldn\'t delete measures without Authorization', async () => {
    const res = await chai
      .request(`${domainPort}`)
      .delete(`/measure/${measure_id}`)
      .send();

    expect(res).to.have.status(401);
  });
});