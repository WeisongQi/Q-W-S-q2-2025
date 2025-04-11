const express = require("express")
const sqlite3 = require("sqlite3")
const { body, validationResult } = require("express-validator")

const app = express()
app.use(express.json())

const db = new sqlite3.Database("./tiere.db")

// Tabellen anlegen, falls nicht vorhanden
db.serialize(() => {
    db.run(`CREATE TABLE IF NOT EXISTS tiere (
        id INTEGER PRIMARY KEY,
        tierart VARCHAR(50),
        name VARCHAR(50),
        krankheit VARCHAR(100),
        age INT,
        gewicht REAL
    )`)

    db.run(`CREATE TABLE IF NOT EXISTS besitzer (
        id INTEGER PRIMARY KEY,
        name VARCHAR(100)
    )`)

    db.run(`CREATE TABLE IF NOT EXISTS tier_besitzer (
        tier_id INTEGER,
        besitzer_id INTEGER,
        FOREIGN KEY(tier_id) REFERENCES tiere(id),
        FOREIGN KEY(besitzer_id) REFERENCES besitzer(id)
    )`)
})

// Basisroute
app.get("/", (req, res) => {
    res.send("🐾 Die Tier-API funktioniert!")
})

// Alle Tiere abrufen
app.get("/tiere", (req, res) => {
    db.all("SELECT * FROM tiere", (err, rows) => {
        if (err) return res.status(500).send("Fehler in der Anfrage")
        res.json(rows)
    })
})

// Suche
app.get("/tiere/search", (req, res) => {
    const { name, tierart } = req.query

    if (!name && !tierart) {
        return res.status(400).send("Bitte gib 'name' oder 'tierart' an")
    }

    const conditions = []
    const values = []

    if (name) {
        conditions.push("name LIKE ?")
        values.push(`%${name}%`)
    }
    if (tierart) {
        conditions.push("tierart LIKE ?")
        values.push(`%${tierart}%`)
    }

    const query = `SELECT * FROM tiere WHERE ${conditions.join(" AND ")}`
    db.all(query, values, (err, rows) => {
        if (err) return res.status(500).send("Fehler bei der Suche")
        res.json(rows)
    })
})

// Sortierung
app.get("/tiere/sort", (req, res) => {
    const { sort = "age", order = "asc" } = req.query
    if (!["age", "gewicht"].includes(sort) || !["asc", "desc"].includes(order)) {
        return res.status(400).send("Ungültiger Sortierparameter")
    }

    const query = `SELECT * FROM tiere ORDER BY ${sort} ${order.toUpperCase()}`
    db.all(query, (err, rows) => {
        if (err) return res.status(500).send("Fehler bei der Sortierung")
        res.json(rows)
    })
})

// Statistik
app.get("/tiere/stats", (req, res) => {
    const query = `
        SELECT
            COUNT(*) AS anzahl,
            AVG(age) AS durchschnittsalter,
            AVG(gewicht) AS durchschnittsgewicht
        FROM tiere
    `
    db.get(query, (err, row) => {
        if (err) return res.status(500).send("Fehler bei Statistik")
        res.json(row)
    })
})

// Neues Tier anlegen
app.post("/tiere", [
    body("tierart").notEmpty(),
    body("name").notEmpty(),
    body("krankheit").notEmpty(),
    body("age").isInt({ min: 0 }),
    body("gewicht").isFloat({ min: 0 })
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { tierart, name, krankheit, age, gewicht } = req.body
    const query = `INSERT INTO tiere (tierart, name, krankheit, age, gewicht) VALUES (?, ?, ?, ?, ?)`
    db.run(query, [tierart, name, krankheit, age, gewicht], function (err) {
        if (err) return res.status(500).send("Fehler beim Einfügen")
        res.status(201).send(`Tier mit ID ${this.lastID} wurde hinzugefügt`)
    })
})

// Tier aktualisieren
app.put("/tiere/:id", (req, res) => {
    const id = req.params.id
    const { tierart, name, krankheit, age, gewicht } = req.body

    const fields = []
    const values = []

    if (tierart) { fields.push("tierart = ?"); values.push(tierart) }
    if (name) { fields.push("name = ?"); values.push(name) }
    if (krankheit) { fields.push("krankheit = ?"); values.push(krankheit) }
    if (age) { fields.push("age = ?"); values.push(age) }
    if (gewicht) { fields.push("gewicht = ?"); values.push(gewicht) }

    if (fields.length === 0) return res.status(400).send("Keine Felder angegeben")

    const query = `UPDATE tiere SET ${fields.join(", ")} WHERE id = ?`
    values.push(id)

    db.run(query, values, function (err) {
        if (err) return res.status(500).send("Fehler beim Update")
        if (this.changes === 0) return res.status(404).send("Tier nicht gefunden")
        res.send(`Tier mit ID ${id} wurde aktualisiert`)
    })
})

// Tier löschen
app.delete("/tiere/:id", (req, res) => {
    const id = req.params.id
    db.run(`DELETE FROM tiere WHERE id = ?`, id, function (err) {
        if (err) return res.status(500).send("Fehler beim Löschen")
        if (this.changes === 0) return res.status(404).send("Tier nicht gefunden")
        res.send(`Tier mit ID ${id} wurde gelöscht`)
    })
})

// Besitzer hinzufügen
app.post("/besitzer", [
    body("name").notEmpty()
], (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() })

    const { name } = req.body
    db.run(`INSERT INTO besitzer (name) VALUES (?)`, [name], function (err) {
        if (err) return res.status(500).send("Fehler beim Einfügen")
        res.status(201).send(`Besitzer mit ID ${this.lastID} wurde hinzugefügt`)
    })
})

// Tier einem Besitzer zuweisen
app.post("/tiere/:tierId/besitzer/:besitzerId", (req, res) => {
    const { tierId, besitzerId } = req.params
    db.run(`INSERT INTO tier_besitzer (tier_id, besitzer_id) VALUES (?, ?)`, [tierId, besitzerId], function (err) {
        if (err) return res.status(500).send("Fehler beim Verknüpfen")
        res.send(`Tier ${tierId} wurde Besitzer ${besitzerId} zugewiesen`)
    })
})

// Server starten
app.listen(3000, () => {
    console.log("🚀 Server läuft auf http://localhost:3000")
})