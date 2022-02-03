// Programme verarbeiten oft Objekte der realen Welt.
// Objekte haben Eigenschaften.
// In unserem Bankingprogramm interessieren uns Objekte, 
// wie z.B. Kunde, Konto, Filiale, Bankautomat...
// Alle Kunden unserer Bank haben dieselben Eigenschaften, aber
// unterschiedliche Eigenschaftswerte 
class Kunde{
    constructor(){
        this.IdKunde
        this.Vorname
        this.Nachname
        this.Kennwort
        this.Kontostand
        this.Geburtsdatum
        this.Mail
    }
}

// Von der Kunden-Klasse wird ene konkrete Instanz
// gebildet

let kunde = new Kunde()

// Die Konkrete Instanz bekommt Eigenschaftswerte
// zugewiesen

kunde.IdKunde = "154293"
kunde.Vorne = "John"
kunde.Nachname = "Trever" 
kunde.Geburtsdatum = "22.02.2005"
kunde.Mail = "Treverinho@gmx.de"
kunde.Kennwort = "48734"
const express = require('express')
const bodyParser = require('body-parser')
const meineApp = express()
meineApp.set('view engine', 'ejs')
meineApp.use(express.static('public'))
meineApp.use(bodyParser.urlencoded({extended: true}))

const server = meineApp.listen(process.env.PORT || 3000, () => {
    console.log('Server lauscht auf Port %s', server.address().port)    
})

meineApp.get('/',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    
    const idKunde = browserAnfrage.body.IdKunde
    const kennwort = browserAnfrage.body.Kennwort
    
console.log("ID des Kunden: " + kennwort)
console.log("Kennwort des Kunden: " + kennwort)

if(idKunde == kunde.idKunde){
    serverAntwort.render()

}

    serverAntwort.render('index.ejs', {})          
})

// Wenn die login-Seite im Browser aufgerufen wird, ...

meineApp.get('/login',(browserAnfrage, serverAntwort, next) => {              

    // ... dann wird die login.ejs vom Server gerendert an den
    // Browser zurückgegeben:

    serverAntwort.render('login.ejs', {})          
})

// Die meineApp.post('login') wird ausgeführt, sobald der Button
// auf dem Login-Formular gedrückt wird.

meineApp.post('/login',(browserAnfrage, serverAntwort, next) => {              
    serverAntwort.render('index.ejs', {})          
})