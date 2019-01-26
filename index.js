//importing express framework
let express = require('express')

let app = express()

//Respond with hello world to the request that hit our root.
app.get('/',(req,res)=>{
    res.send('hello world')
})

//listen on 3000 by default
app.listen(process.env.PORT||3000)

module.exports = app