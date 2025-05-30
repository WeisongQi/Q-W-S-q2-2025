# Aufgabe 300525

## Debugging-Aufgaben

### Debug 1

```python
a = [1, 2, 3]
b = a
b[0] = 99
print("a =", a) # a = [99, 2, 3]
print("b =", b) # b = [99, 2, 3]
```

- Frage: Warum wird a[0] ebenfalls zu 99, obwohl wir nur b verändert haben? Wie kann man das verhindern?
- Antwort:
  1. a und b sind zwei Referenzen auf den gleichen Speicherbereich. Wenn wir b verändern, verändern wir auch a.
  2. Wir können copy() verwenden, um eine flache Kopie von a zu erstellen, sodass a und b unterschiedliche Listen sind.

### Debug 2

```python
farben = ["rot", "gruen", "blau"]
print(farben[3])
```

- Frage: Was passiert hier? Was wäre die korrekte Lösung?
- Antwort: Es ist ein Indexfehler, weil list farben nur 3 Elemente hat. Und Index ist ab 0 bis 2

Korrekte Lösung:

```python
farben = ["rot", "gruen", "blau"]
print(farben[2]) # blau
```

### Debug 3

```python
zahlen = [1, 2, 3, 4]
doppelt = [x + x for x in zahlen if x % 2]
print(doppelt) # [2,6]
```

- Frage: Warum sind nur bestimmte Zahlen im Ergebnis? Was macht die Bedingung if x % 2 genau?
- Antwort: Die Bedingung if x % 2 prüft, ob x ungerade ist. Der Modulo-Operator % gibt den Rest der Division durch 2 zurück. Ungerade Zahlen ergeben 1, gerade Zahlen 0. Nur Werte, die nicht 0 sind, bleiben in der neuen Liste doppelt.

- 1 % 2 ergibt 1 als true → bleibt in doppelt
- 2 % 2 ergibt 0 als false → wird nicht aufgenommen
- 3 % 2 ergibt 1 als true → bleibt in doppelt
- 4 % 2 ergibt 0 als false → wird nicht aufgenommen

> > Das Ergebnis der doppelt-Liste ist daher [2, 6], da nur 1 und 3 verdoppelt wurden.

### Debug 4

```python
tupel = (1, 2, 3)
tupel[1] = 5 # Type Error
print(tupel)
```

- Frage: Warum funktioniert das nicht?
- Antwort:
  1. Tupel (tuple) sind immutable – einmal erstellt, kann ihr Inhalt nicht verändert werden.
  2. Der Versuch, tupel[1] = 5 zu setzen, führt zu einem TypeError, weil man einem Tupel keine neuen Werte zuweisen kann.

### Debug 5

```Python
daten = ("Ali", [10, 20])
daten[1].append(30)
print(daten) # ("Ali", [10,20,30])
```

- Frage: Wie kann sich der Inhalt hier verändern, obwohl Tupel eigentlich unveränderlich sind?
- Antwort:
  1. Das Tupel selbst bleibt unverändert – die Referenz auf die Liste [10, 20] bleibt bestehen.
  2. Listen (list) sind veränderlich (mutable), daher kann append(30) der Liste innerhalb des Tupels ein neues Element hinzufügen.
  3. Python verhindert nur die Änderung der Tupel-Elemente selbst, aber wenn ein Element ein veränderliches Objekt ist (wie eine Liste), kann dessen Inhalt intern verändert werden.

### Debug 6

```python
farben = {"rot": "#FF0000", "gruen": "#00FF00", "blau": "#0000FF"}
for eintrag in farben:
print(eintrag)
```

- Frage: Warum wird hier nur der Schlüssel ausgegeben?Wie müsste man den Code ändern, um rot = #FF0000 usw. zu sehen?
- Antwort:
  1. Dictionary (dict) speichert Daten als Schlüssel-Wert-Paare (key-value).
  2. Beim Durchlaufen (for eintrag in farben:) wird standardmäßig nur der Schlüssel (key) verwendet.
  3. Um den Wert (value) auszugeben, muss man explizit darauf zugreifen.

Korrekte Lösung:

```python
farben = {"rot": "#FF0000", "gruen": "#00FF00", "blau": "#0000FF"}
for schluessel, wert in farben.items():
    print(f"{schluessel} = {wert}")
```

## Aufgabe Recherche

- Wie erstellt man Strings?
- Antwort: Wir können mit `text = "Hallo Welt"` erstellen.
- Wie funktioniert das mit \ (Escape)?
- Antwort: Wir können mit `text = "Hallo \nWelt"` und `text = "Hallo \tWelt"`erstellen.
- Was ist Slicing bei Texten?
- Antwort: Wir können mit `text = "Hallo Welt"`und `print(text[0:4:2])`erstellen. und Hl bekommen.
- Welche Methoden helfen beim Bearbeiten von Text?
- Antwort: `text = "Hallo, Welt!"`
  1. `print(text.lower())` # 'hallo, welt!' (Alles klein)
  2. `print(text.upper())` # 'HALLO, WELT!' (Alles groß)
  3. `print(text.replace("Welt", "Python"))` # 'Hallo, Python!'
  4. `print(text.split(","))` # ['Hallo', ' Welt!'] (Teilen an ",")
  5. `print(text.strip())` # Entfernt Leerzeichen am Anfang und Ende
  6. `print(text.startswith("Hallo"))` # True (Beginnt mit "Hallo"?)
  7. `print(text.endswith("Welt!"))` # True (Endet mit "Welt!"?)
  8. `print(text.count("l"))` # 3 (Anzahl von "l" im Text)
