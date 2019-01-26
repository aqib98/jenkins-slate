let request =  require('supertest')
let app = require('../index')

describe('/GET',()=>{
    it('respond with hello world',(done)=>{
        //Make a get request to our express server
        request(app)
        .get('/')
        .expect('hello world',done)
    })
})