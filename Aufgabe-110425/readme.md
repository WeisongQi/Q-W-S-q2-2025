# 🐾 Tier-API

Dies ist eine einfache API zur Verwaltung von Tieren und deren Besitzern. Die API basiert auf Node.js, Express und SQLite.

## 📋 Voraussetzungen

- Node.js (Version 14 oder höher)
- SQLite

## 🚀 Installation

1. Klone das Repository:

   ~~~bash
   git clone <repository-url>
   cd <repository-ordner>
   ~~~

2. Installiere die Abhängigkeiten:

   ~~~bash
   npm install
   ~~~

3. Starte den Server:

   ~~~bash
   node index.js
   ~~~

4. Der Server läuft unter: [http://localhost:3000](http://localhost:3000)

## 📚 API-Endpunkte

### Basisroute

- **GET /**
  Antwort: `🐾 Die Tier-API funktioniert!`

---

### Tiere

#### Alle Tiere abrufen

- **GET /tiere**
  Antwort: Liste aller Tiere.

#### Tiere suchen

- **GET /tiere/search**
  Query-Parameter:
  - `name` (optional): Name des Tieres.
  - `tierart` (optional): Tierart.
  Antwort: Gefilterte Liste der Tiere.

#### Tiere sortieren

- **GET /tiere/sort**
  Query-Parameter:
  - `sort` (optional): Sortierfeld (`age` oder `gewicht`).
  - `order` (optional): Sortierreihenfolge (`asc` oder `desc`).
  Antwort: Sortierte Liste der Tiere.

  ![Sortieren](/images/Screenshot%202025-04-11%20155012.png)

#### Tierstatistiken

- **GET /tiere/stats**
  Antwort: Statistiken wie Anzahl, Durchschnittsalter und Durchschnittsgewicht.

#### Neues Tier hinzufügen

- **POST /tiere**
  Body-Parameter:
  - `tierart` (erforderlich): Tierart.
  - `name` (erforderlich): Name des Tieres.
  - `krankheit` (erforderlich): Krankheit des Tieres.
  - `age` (erforderlich): Alter (muss eine positive Ganzzahl sein).
  - `gewicht` (erforderlich): Gewicht (muss eine positive Zahl sein).
  Antwort: Bestätigung der Erstellung.

#### Tier aktualisieren

- **PUT /tiere/:id**
  URL-Parameter:
  - `id`: ID des Tieres.
  Body-Parameter (optional):
  - `tierart`, `name`, `krankheit`, `age`, `gewicht`.
  Antwort: Bestätigung der Aktualisierung.

#### Tier löschen

- **DELETE /tiere/:id**
  URL-Parameter:
  - `id`: ID des Tieres.
  Antwort: Bestätigung der Löschung.

---

### Besitzer

#### Besitzer hinzufügen

- **POST /besitzer**
  Body-Parameter:
  - `name` (erforderlich): Name des Besitzers.
  Antwort: Bestätigung der Erstellung.

  ![Besitzer](/images/Screenshot%202025-04-11%20155648.png)

#### Tier einem Besitzer zuweisen

- **POST /tiere/:tierId/besitzer/:besitzerId**
  URL-Parameter:
  - `tierId`: ID des Tieres.
  - `besitzerId`: ID des Besitzers.
  Antwort: Bestätigung der Verknüpfung.

---

## 🗂️ Datenbankstruktur

Die Datenbank enthält folgende Tabellen:

1. **`tiere`**:
   - `id`: Primärschlüssel.
   - `tierart`: Tierart.
   - `name`: Name des Tieres.
   - `krankheit`: Krankheit des Tieres.
   - `age`: Alter.
   - `gewicht`: Gewicht.

2. **`besitzer`**:
   - `id`: Primärschlüssel.
   - `name`: Name des Besitzers.

3. **`tier_besitzer`**:
   - `tier_id`: Fremdschlüssel zu `tiere`.
   - `besitzer_id`: Fremdschlüssel zu `besitzer`.

---

## 🛠️ Fehlerbehandlung

Die API gibt entsprechende HTTP-Statuscodes und Fehlermeldungen zurück, wenn:

- Eingabedaten fehlen oder ungültig sind.
- Ein Datenbankfehler auftritt.
- Ein Tier oder Besitzer nicht gefunden wird.

---

## 📞 Support

Bei Fragen oder Problemen wenden Sie sich bitte an den Entwickler.
