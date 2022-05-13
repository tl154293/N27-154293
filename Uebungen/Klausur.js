// Klausur 

const { stdin } = require("nodemon/lib/config/defaults")

// Wenn eine Aufgabe nicht funktioniert, dann bitte auskommentieren: /*  */
console.log("Aufgabe 1")
// Bei der Landtagswahl ergeben sich vereinfacht folgende Prozentpunkte für die Parteien:
// Vergleichen Sie die Ergebnisse mit if/else.
// Geben Sie im Terminal in einem Antwortsatz an, welche Partei die Wahl gewonnen hat.

// Wenn die Werte sich ändern, muss ihr Antwortsatz sich automatisch anpassen.
// Hier Ihre Lösung:
let prozentpunkteSPD = 47
let prozentpunkteCDU = 53

if (prozentpunkteSPD < prozentpunkteCDU){
    console.log("CDU ist Gewinner")
}else{
    console.log("SPD ist Gewinner")
}


console.log("Aufgabe 2")
// Bei einem großen Unternehmen stehen 900.000 € Ausgaben Einnahmen von 1.000.000 € gegenüber.
// Prüfen Sie mit if/else, ob das Unternehmen Gewinn oder Verlust gemacht hat.
// Arbeiten Sie mit Variablen, die mit den genannten Werten initialisiert werden.
// Geben Sie Ihre Lösung im Terminal aus: 

let einnahmen = 1000000
let ausgaben = 900000

if(einnahmen-ausgaben){
    console.log("Wir machen Gewinn")
}else{
    console.log("Wir machen Verlust")
}


console.log("Aufgabe 3")
// In einem Handytest sollen Handys miteinander verglichen werden.
// a) Erstellen Sie die Klassendefinition mit mindestens 4 relevanten Eigenschaften:
class handys{
    constructor(){
        this.AkkulängeinH
        this.Kamera
        this.PreisinEuro
        this.SimkartenAnschlüsse

    }

}

// b) Instanzieren Sie zwei Objekte ("Samsung" und "Apple") der von Ihnen erstellten Klasse:
//let apple = new Apple()
// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:
// c) Initialisieren Sie beide Objekte mit geeigneten Eigenschaftswerten:

//apple.AkkulängeinH = 12
//apple.Kamera = 4
//apple.PreisinEuro = 980
//apple.SimkartenAnschlüsse = 1

//let samsung = new Samsung()

//samsung.AkkulängeinH = 15
//samsung.Kamera = 3
//samsung.PreisinEuro = 850
//samsung.SimkartenAnschlüsse = 2





// d) Vergleichen Sie mit if/else eine der relevanten Eigenschaften und geben Sie
//    im Terminal aus, ob Samsung oder Apple besser ist im Hinblick auf diese Eigenschaft:


console.log("Aufgabe 4")
// Änderung Sie für Ihre ganze Banking-App das Farbschema, indem Sie 
// den grünen Bereich oben und den grünen Bereich unten 
// in eine andere, ansprechende Farbe ändern, 
// so dass die weiße Schrift weiterhin gut lesbar bleibt.
console.log("Aufgabe 5")
// In Ihrer Banking-App Banking-App soll der Kunde die Kosten für einen Kredit berechnen können.
// Die Formel für die monatliche Zinsbelastung lautet: 
// Zinsen pro Monat = (Kreditbetrag x Zinssatz) ÷ (100 x 12)
// Formulieren Sie auf Papier den "Issue" und dazu 10 sinnvolle Tasks