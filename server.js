const express = require('express')
const bodyParser = require('body-parser')
const app = express()
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))

const server = app.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    

})
app.get('/',(req, res, next) => {              
    res.render('index.ejs', {})          
})

// Wenn die Login-Seite im Browser aufgerufen wird,...

app.get('/login',(req, res, next) => {              
   
    // ... dann wird die login.ejsvom Server gerendert an den 
   // Brwser zurückgegeben 
    res.render('login.ejs', {})          

// Wenn die Login-Seite im Browser aufgerufen wird,...#
})

// Die app.post("login") wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird

app.post('/login',(req, res, next) => {              
    res.render('index.ejs', {})          
})