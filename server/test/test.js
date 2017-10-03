let chai = require("chai");
let chaiHttp = require("chai-http");
let server = require('../app.js');
let should = chai.should();
chai.use(chaiHttp);

const recipes = {
  rice: {
    data: ['pepper', 'maggi', 'tomato'],
    upvotes: 14
  }, 
  beans: {
    data: ['beans', 'nek', 'sss'],
    upvotes: 16
    },
  noodles: {
    data: ['indo', 'mie', 'ciois'],
    upvotes: 8
  },
  chicken: {
    data: ['water', 'curry'],
    upvotes: 10
  }
}


const bodyToUpdate = {
  recipe: 'dfmkdldld',
  content: 'dfljndfjld'
}

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
        .end((err, res) => {
          res.body.should.be.a('object');
          res.body.message[0].should.be.equal('recipe added successfully');
          res.should.have.status(200);
        done()
        })
     })
  })
  describe('/api/recipes/:recipeId', () => {
    it('it should Update a new recipe', (done) => {
      chai.request(server)
        .put('/api/recipes/:recipeId')
        .end((err, res, bodyToUpdate) => {
          recipes['rice'].should.be.equal('object')
          res.body.message.should.be.equal('recipe updated successfully');
          res.should.have.status(200);
        done()
        })
     })
  })
})