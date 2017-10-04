let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../app.js');
let should = chai.should();
chai.use(chaiHttp);


describe('Recipes', () => {
  describe('/api/recipes', () => {
    it('it should return a success response', (done) => {
    	chai.request(server)
    		.get('/api/recipes')
    		.end((err, res) => {
    			res.should.have.status(200);
    		done()
    		})
     })

    it('it should return an object', (done) => {
      chai.request(server)
        .get('/api/recipes')
        .end((err, res) => {
          res.body.should.be.a('object');
        done()
        })
     })
  })
  describe('/api/recipes', () => {
    it('it should post a new recipe', (done) => {
      chai.request(server)
        .post('/api/recipes')
        .send({ recipe: 'dfmkdldld', content: 'dfljndfjld'})
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.message[0].should.be.equal('recipe added successfully');
          res.should.have.status(200);
        done()
        })
     })
  })
  describe('/api/recipes/rice', () => {
    it('it should Update a new recipe', (done) => {
      chai.request(server)
        .put('/api/recipes/rice')
        .send({ valueToUpdate: 'Updating to this value'})
        .end((err, res) => {
          res.body.message[0].should.be.equal('recipe updated successfully');
          res.should.have.status(200);
        done()
        })
     })
  })
})