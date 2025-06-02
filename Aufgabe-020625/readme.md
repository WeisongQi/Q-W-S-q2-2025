# Aufgabe 020625

## Debugging-Aufgaben

### Debug 1

```python
liste1 = [4, 5, 6]
liste2 = liste1
liste2.append(7)
print("Liste1:", liste1) # [4, 5, 6, 7]
print("Liste2:", liste2) # [4, 5, 6, 7]
```

- Frage: Warum enthält auch liste1 das Element 7? Wie kann man liste2 unabhängig kopieren?
- Antwort: Das ist ein Referenztyp. Das bedeutet, dass beide Listen auf den gleichen Speicherort zeigen. Um eine Kopie zu erstellen, muss man eine Kopie der Liste erstellen. Das kann man mit der Methode copy() machen.

### Debug 2

```python
werte = [2, 4, 6, 8]
ergebnis = [x / 2 for x in werte if x < 5]
print(ergebnis) # [1.0, 2.0]
```

- Frage: Welche Werte kommen in die neue Liste? Was bewirkt die Bedingung if x < 5?
- Antwort: Die Werte, die kleiner als 5 sind, werden durch 2 geteilt. Das Ergebnis ist [1.0, 2.0]. Die Bedingung if x < 5 bedeutet, dass nur die Werte, die kleiner als 5 sind, in die neue Liste aufgenommen werden.

### Debug 3

```python
farben = ["rot", "grün", "blau"]
farben_neu = farben
farben = ["gelb", "lila"]
print(farben_neu) # ["rot", "grün", "blau"]
```

- Frage: Was wird ausgegeben? Warum ist farben_neu hier nicht betroffen?
- Antwort: Es wird ["rot", "grün", "blau"] ausgegeben. Das liegt daran, dass farben_neu eine Referenz auf die ursprüngliche Liste farben ist. Als farben neu zugewiesen wird, zeigt farben_neu weiterhin auf die ursprüngliche Liste und nicht auf die neue.

### Debug 4

```python
person = ("Max", 28, "Berlin")
person[2] = "Hamburg"
print(person) # ("Max", 28, "Berlin")
```

- Frage: Warum funktioniert das nicht? Was müsste man tun, um einen ähnlichen Effekt zu erzielen?
- Antwort: Person ist ein Tupel. Tupel sind unveränderlich. Das heißt, dass man sie nicht ändern kann. Um einen ähnlichen Effekt zu erzielen, muss man eine Kopie des Tupels erstellen. Das kann man mit der Methode copy() machen.

### Debug 5

```python
daten = ("Ali", [100, 200])
daten[1][0] = 300
print(daten)    # ("Ali", [300, 200])
```

- Frage: Warum ist hier trotz eines Tupels eine Veränderung möglich?
- Antwort: Das ist ein Tupel, aber das zweite Element ist eine Liste, die veränderlich ist. Das bedeutet, dass man die Liste verändern kann.

### Debug 6

```python
info = {"stadt": "Köln", "einwohner": 1000000}
print(info["fläche"]) # KeyError: 'fläche'
```

- Frage: Warum gibt es hier einen Fehler? Wie kann man den Zugriff sicherer machen?
- Antwort: Das ist ein Dictionary. `info["fläche"]` versucht auf einen Schlüssel zuzugreifen, der nicht existiert. Um den Zugriff sicherer zu machen, man kann die Methode `get()` verwenden, die einen Standardwert zurückgibt, wenn der Schlüssel nicht existiert.

- korrigierten Code

```python
info = {"stadt": "Köln", "einwohner": 1000000}
print(info.get("fläche")) # None
```

### Debug 7

```python
def schreibe(text):
    text = text.upper()
    return
nachricht = schreibe("hallo")
print(nachricht)
```

- Frage: Warum ist die Ausgabe None? Wie müsste die Funktion geändert werden?
- Antwort: Schreibe() gibt None zurück, weil es keine return-Anweisung gibt. Um die Funktion zu ändern, muss man eine return-Anweisung hinzufügen.

- korrigierten Code

```python
def schreibe(text):
    text = text.upper()
    return text
nachricht = schreibe("hallo")
print(nachricht)
```

### Debug 8

```python
def addiere(x, y):
    print(x + y)
summe = addiere(3, 4)
print(summe) # None
```

- Frage: Warum kann man mit summe später nicht weiterrechnen?
- Antwort: Die Funktion `addiere()` gibt keinen Wert zurück, sondern druckt nur das Ergebnis. Um mit `summe` weiterrechnen zu können, muss die Funktion einen Wert zurückgeben.

- korrigierten Code

```python
def addiere(x, y):
    return x + y
summe = addiere(3, 4)
print(summe) # 7
```

### Debug 9

```python
x = "global"
def test():
 x = "lokal"
test()
print(x)
```

- Frage: Warum bleibt x nach dem Funktionsaufruf „global"?
- Antwort: x ist eine lokale Variable, die nur innerhalb der Funktion def test() definiert ist. Wenn man x außerhalb der Funktion aufruft, wird die globale Variable x verwendet.

- korrigierten Code

```python
x = "global"
def test():
    x = "lokal"
    print(x)
test() # lokal
print(x) # global
```

### Debug 10

```python
def info(name="Gast", stadt):
    print(name, "aus", stadt)
info("Ali", "Berlin") # TypeError: info() missing 1 required positional argument: 'stadt'
```

- Frage: Warum funktioniert diese Definition nicht? Wie muss die Reihenfolge der Parameter angepasst werden?
- Antwort: Die Reihenfolge der Parameter ist falsch. Die Parameter mit Standardwerten müssen am Ende stehen.

```python
def info(stadt, name="Gast"):
    print(name, "aus", stadt)
info("Ali", "Berlin") # Ali aus Berlin
```

## Aufgabe Recherche

- Was habt ihr neu verstanden?​

  1. Listen und Tupel unterscheiden sich in ihrer Mutabilität (Listen änderbar, Tupel nicht).
  2. Dictionaries können mit .get() sicherer abgefragt werden.
  3. Funktionen müssen explizit einen Wert zurückgeben (return), sonst ist das Ergebnis None.

- ​Wie genau funktioniert die Speicherverwaltung bei Referenztypen?
- Gibt es weitere Methoden, um Listen/Tupel zu kopieren (z.B. deepcopy)?
