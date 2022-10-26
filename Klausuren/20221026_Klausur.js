console.log("******** K L A U S U R 26.10.2022 ********")

// Aufgabe 1
// Grenzen Sie Datenschutz und Datensicherheit gegeneinader ab!
// 
// Beim Datenschutz geht es allgemein um den Schutz von Persönlichbezogenen Datem, damit diese nicht
// verfälscht, kopiert oder missbraucht werden und bei der Datensicherheit geht um die Sicherheitsvorkehrungen 
// die getroffen werden um die oben genannten dinge zu verhindern. Wird ein Punkt nicht gewährleistet, so
// ist die Datensicherheit nichtig
//
//
//
//
// 
// 
// 
// 
// 
// Aufgabe 2 a)
// Grenzen Sie symmetrische und asymmetrische Verschlüsselung gegeneinander ab! 
// Nennen Sie jeweils Vorteile! 
// Gehen Sie auch auf die Eigenschaften und Unterschiede von public key und private key ein!
// 
// Eine symmetrische Verschlüsselung hat einen Schlüssel zum schliesen und öffen 
// Eine asymmetrische Verschlüsselung besitz zwei Schlüssel, ein Schlüssel zum schliesen und einen zum öffnen
// 
// Der Vorteil bei der asymmetrischen Verschlüsselung ist der das eine Nachricht deutlich Sicherer ist den zum entschlüssen es einen
// seperaten Schlüssel zum entschlüssen wie zum Verschlüsseln gibt, dieser wird meist über die Post oder persönlich weitergegeben so
// ist der Schlüssel auch geschützt wenn jemand deine E-Mails abfängt, allerdings ist ein Vorteil bei symmetrischen Verschlüsselung, dass
// die viel scneller ankommt als eine asymmetrisch verschlüsselte Nachricht
// 
// 
// Aufgabe 2 b)
// Wie könnte eine Verschlüsselung aussehen, die die Vorteile symmetrischer und asymmetrischer
// Verschlüsselung miteinander verbindet?
// 
//  
// 
// 
// 
//
//
//
//
// Aufgabe 3)
// Grenzen Sie Deklaration, Instanziierung und Initialisierung voeinander ab!  
// 
// Mit der Deklaration gibt man dem Objekt bestimmmte Eigenschaften
// z.B. this.IdKunde
//      this.Name
//
// Mit der Instanziierung stellt man eine Instanz mit dem Objekt her
// z.B. let kunde = new kunde
//
// Mit der Initialisierung gibt gibt man den Eigenschaften aus der Deklaration Eigenschaftswerte
// z.B. kunde.IdKunde = 123456
//      kunde.Name = "Leon"
//
// 
// 
// 
//
//
//
//
//
//
// Aufgabe 5a)
// Sie werden beauftragt ein Programm zu entwicklen, dass alle Zeugnisse einer Schule digital verwaltet.  
// Entwerfen Sie eine Klasse mit relevanten Eigenschaften!

// Aufgabe 5b)
// Führen Sie Deklaration, Instanzzierung und Initialisierung für das Halbjahreszeugnis 
// des Schüler Pit Kiff durch. 
// Vergeben Sie realistische Eigenschaftswerte.  

// Aufgabe 5c)
// Geben Sie die Eigenschaftswerte aus 5b auf der Konsole wie folgt aus: Je Eigenschaft soll
// in jeweils einer Zeile die Eigenschaft und der zugehörige Wert angezeigt werden.
// Beispiel für:
// Schuhgröße: 40
// Haarfarbe: braun 

class Zeugnis {
    constructor(){
        this.Name
        this.Klasse
        this.Fehlstuden
        this.UnentschuldigteFehlstunden
        this.Klassenlehrer
        this.WINote
        this.BWLNote
    }
}

let zeugnis = new Zeugnis


zeugnis.Name = "Pit Kiff"
zeugnis.Klasse = "GW21A"
zeugnis.Fehlstunde = "30"
zeugnis.UnentschuldigteFehlstunden = "0"
zeugnis.Klassenlehrer = "Roland Frohmann"
zeugnis.WINote = "1"
zeugnis.BWLNote = "1"





// Aufgabe 6)
// Zwei Schüler haben bekommen Zeugnisse: 
// Pit: Punkte (Mathe: 15, Deutsch: 10, Englisch:  5) 
// Git: Punkte (Mathe: 10, Deutsch:  8, Englisch: 15) 
//
// Initialisieren Sie Variablen für alle genannten Eigenschaftswerte. 
// Programmieren Sie folgende Logik:
// * Wenn die Durchschnittspunktzahl von Pit größer ist, soll auf der Konsole stehen: 
//     "Pit hat das bessere Zeugnis" 
// * Wenn die Durchschnittspunktzahl von Git größer ist, soll auf der Konsole stehen: 
//     "Git hat das bessere Zeugnis"
// Wenn die Durchschnittspunktzahl gleich ist, dann soll auf der Konsole stehen: 
//     "Pit gleich Git" 
// Wenn die Durchschnittspunktzahl bei einem doppelt so groß oder größer ist, dann soll auf der Konsole stehen: 
//     "Git hat das viel bessere Zeugnis" bzw.
//     "Pit hat das viel bessere Zeugnis"
