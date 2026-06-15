PokeAPI: https://pokeapi.co/

---

# Checkliste Pokedex: https://docs.google.com/document/d/1mzYdtIavD1VMwNmJV8XdBhIeVLt6jFkmK7hFYLtXzG4/edit?tab=t.0 

Bitte erfülle alle Punkte auf dieser Liste, bevor du das Projekt einreichst. Solltest du weitere Extras eingebaut haben, erwähne das kurz, damit sich die Mentoren dies bei Bedarf anschauen können.

1. ## **Git-Workflow für dein Projekt**
- [x] Nutze GitHub von Anfang an. 
- [ ] Denk dran: Dein GitHub-Profil ist deine Visitenkarte für Arbeitgeber – nutze diese Chance\!  
- [x] Committe nach jeder Coding-Session  
- [x] Verwende klare, aussagekräftige Commit-Messages  
- [x] Verwende *.gitignore*, um unnötige Dateien auszuschließen  
- [x] Halte dein Repository aktuell und gepflegt


2. ## **Allgemein:**
- [x] Es soll eine bestimmte Anzahl an Pokemon Karten direkt gerendert werden, am besten zwischen 20 und 40\.  
      - [x] Berücksichtige dabei folgende **Prinzipien**:  
            a) **Lazy-Loading**: Lade Daten nur dann, wenn sie wirklich gebraucht werden (z. B. Evo-Chain, da neue fetch-url, erst beim klicken auf eine Pokemonkarte).  
            b) **Fetch-then-Render**: Erst laden, dann rendern.  
            c) **Caching:** Speichere heruntergeladene Inhalte ab und lade sie nicht mehrfach.  
              
- [x] Für dieses Projekt gibt es kein Mockup, dein Design kann gerne kreativ sein.  
- [x] Unten auf der Seite gibt es einen Button, um weitere 20-40 Pokemon zu laden.   
      - [x] Es erscheint ein Loadingscreen (Userfeedback).  
      - [x] Der Button kann während des Ladens nicht erneut angeklickt werden.

**Kleine Pokemonkarte (Listenansicht):**
- [x] Werte der kleinen Pokemonkarte:  
      - [x] Name (Groß geschrieben!)  
      - [x] Typ/en  
      - [x] Bild des Pokemons  
      - [x] Hintergrundfarbe passend zum Typ  
      - [x] ID (optional)  
- [x] Die Karte hat einen Hovereffekt.

--> See PDF for Images

**Große Ansicht (Overlay):**
- [x] Beim Klicken auf die kleine Pokemonkarte soll sich diese in groß öffnen.  
- [x] Benutze ein transparentes Overlay.
- [x] Wenn man neben die Karte klickt, sollte sie geschlossen werden.  
- [x] Der Hintergrund ist nicht scrollbar in der großen Ansicht.  
- [x] Wie du diese gestaltest und welche du hier alle anzeigen lässt, ist dir überlassen, jedoch sollten hier mindestens gewisse Werte wie z.B.
     - [x] hp
     - [x] attack
     - [x] defense
     - [x] etc. des Pokemon angezeigt werden, weiteres ist optional.  
- [x] Es gibt Pfeile oder ähnliches, um zwischen den Karten in der großen Ansicht zu wechseln (wie bei der Fotogalerie).

--> See PDF for Images


3. ## **Code**
- [x] Aussagekräftige Namen für Funktionen und Variablen  
- [x] camelCase für die Benennung   
- [x] Code ist formatiert  
- [x] Höchstens 14 Zeilen pro Funktion  
- [x] Gleicher Abstand zwischen Funktionen (1 oder 2 Leerzeilen)  
- [x] Lagere HTML Templates aus in extra-Funktionen


4. ## **data-id Attribute einbauen**	 	
Beispiel: wie die data-id Attribute implementiert wird
html: <button data-id="search-button"> Suchen </button>

### **Pflichtattribute — diese müssen alle eingebaut werden**
--> See PDF for table

### **Checkliste für data-id**
- [x] data-id="content" auf dem \`\<main\>\`\-Tag  
- [x] data-id="search-input" auf dem Suchfeld  
- [x] data-id="not-found" auf dem "No match found."-Paragraphen (im JS)  
- [x] data-id="load-more-button" auf dem Load-More-Button  
- [x] data-id="dialog" auf dem \`\<dialog\>\`\-Element  
- [x] data-id="card" auf jedem Card-Button (im Dialog)  
- [x] data-id="card-image" auf dem Bild in der Card (im Dialog)  
- [x] data-id="overlay-pokemon-name" auf dem Dialog-Container (im Dialog)  
- [x] data-id="close-dialog-button" auf dem Schließen-Button (im Dialog)  
- [x] data-id="dialog-image" auf dem Bild im Dialog (im Dialog)  
- [x] data-id="prev-button" auf dem Zurück-Button (im Dialog)  
- [x] data-id="next-button" auf dem Vor-Button (im Dialog)  
- [x] data-id=”search-button” wenn ein Such-Button vorhanden


5. ## **Responsive**
- [x] Bis 320px Breite alles responsive ohne Scrollbalken  
- [x] Der Content ist auf 1920px oder 1440px begrenzt  
      --> See PDF for Images


6. ## **Sonstiges**
- [x] Favicon vorhanden  
- [x] Dokumenten Titel  
- [x] Die Hauptseite muss **index.html** heißen, damit sie standardmäßig geladen wird.  
- [x] Die Pokédex-API ist auf Englisch. Achte bei der Erstellung deiner App auf Sprachkonsistenz – alle Buttons und Felder sollten ebenfalls auf Englisch sein, es sei denn, du hast die API in eine andere Sprache übersetzt.  
- [x] Header mit:   
      - [x] Logo  
      - [x] Titel  
      - [x] Suchleiste  
            - [x] man soll mindestens 3 Buchstaben eingeben, bevor via Button gesucht werden kann  
            - [x] werden keine passenden Pokemon gefunden, zeige eine entsprechende Meldung an
- [ ] Online gegenchecken -> FTP
