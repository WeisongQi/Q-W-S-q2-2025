# Aufgabe 030625

## Debug-Aufgaben

### Debug 1

```python
def begrüßung(name):
 print("Hallo" name)
begrüßung()
```

- Frage: Warum funktioniert dieser Funktionsaufruf nicht?
- Antwort: Der Funktionsaufruf funktioniert nicht, weil der Funktionsdefinition ein Argument fehlt und in der `print`-Anweisung ein Komma zwischen "Hallo" und `name` fehlt.

- Korrekture Code

```python
def begrüßung(name):
    print("Hallo", name)
begrüßung("Max") # Hallo Max
```

### Debug 2

```python
def addiere(x, y=0, z):
 return x + y + z
```

- Frage: Warum akzeptiert Python diese Funktionsdefinition nicht?
- Antwort: Python akzeptiert diese Funktionsdefinition nicht, weil Parameter mit Standardwerten (wie `y=0`) immer am Ende der Parameterliste stehen müssen. `z` hat keinen Standardwert und steht nach `y`, was nicht erlaubt ist.

- Korrekture Code

```python
def addiere(x, y=0, z=0):
    return x + y + z
addiere(1, 2, 3) # 6
addiere(1, 2)   # 3
addiere(1)      # 1
```

### Debug 3

```python
x = "global"
def test():
    x = "lokal"
test()
print(x) # global
```

- Frage: Warum bleibt x beim Wert “global”? Wie könnte man x innerhalb der Funktion global verändern?
- Antwort: x bleibt beim Wert “global”, weil es sich um eine lokale Variable handelt. Um x global zu verändern, muss es in der globalen Variablenliste stehen.

### Debug 4

```python
def rechne(a, b):
 try:
  return a / b
 except:
  print("Fehler") # Fehler
print(rechne(5, 0)) # None
```

- Frage: Warum wird nichts zurückgegeben? Wie könnte man das verbessern?
- Antwort: Weil bei except muss ein genauer Fehler angegeben werden, um die Rückgabe zu ermöglichen. Die Fehlerbehandlung kann verbessert werden, indem man den Fehler als Parameter an die Funktion `print` übergibt.

- Korrektur Code

```python
def rechne(a, b):
    try:
        return a / b
    except ZeroDivisionError as e:
        print("Fehler", e) # Fehler division by zero
print(rechne(5, 0))  # None
```

### Debug 5

```python
def teile(x, y):
    if y == 0:
        raise ZeroDivisionError
    return x / y
try:
 teile(4, 0)
except Exception as e:
 print("Fehler", e) # Fehler
```

- Frage: Ist die Fehlerbehandlung hier sinnvoll? Was fehlt in der Fehlermeldung?
- Antwort: Die Fehlerbehandlung ist sinnvoll, da es bei der Division durch 0 zu einem Fehler kommt. Die Fehlermeldung fehlt, weil der Fehler nicht angegeben wird.

- Korrekture Code

```python
def teile(x, y):
    if y == 0:
        raise ZeroDivisionError("ZeroDivisionError")
    return x / y
try:
    teile(4, 0)
except Exception as e:
    print("Fehler", e) # Fehler division by zero
```

### Debug 6

```python
def mache_etwas():
 try:
  x = int("abc")
 finally:
  print("Fertig")
mache_etwas()
```

- Frage: Was passiert hier und warum wird kein Fehler angezeigt?
- Antwort: Es wird kein Fehler angezeigt, weil der Fehler in der `int`-Funktion auftritt und nicht in der `try`-Anweisung. Der `finally`-Block wird immer ausgeführt, egal ob ein Fehler auftritt oder nicht.

- Korrektur Code

```python
def mache_etwas():
    try:
        x = int("abc")
    except ValueError:
        print("Ungültige Eingabe")
    finally:
        print("Fertig")

mache_etwas() # Ungültige Eingabe Fertig
```

### Debug 7

```python
def berechne():
 try:
  return 10 / 0
 except ZeroDivisionError:
  print("Fehler")
 finally:
  return "Fertig"
print(berechne()) # Fehler Fertig
```

- Frage: Warum wird “Fertig” ausgegeben und nicht “Fehler”? Was ist der Einfluss von finally?
- Antwort: "Fertig" wird ausgegeben, weil der `finally`-Block immer ausgeführt wird, unabhängig davon, ob ein Fehler auftritt oder nicht. Der `return`-Befehl im `finally`-Block überschreibt den Rückgabewert des `try`-Blocks.

### Debug 8

```python
def konvertiere(zahl):
 try:
  return int(zahl)
 except ValueError:
  print("Ungültige Eingabe")
x = konvertiere("abc")
print(x + 1)
```

- Frage: Warum gibt es einen neuen Fehler, obwohl der erste abgefangen wurde?
- Antwort: Der neue Fehler ist Typeerror, weil `x` den Wert `None` hat, nachdem der `ValueError` abgefangen wurde. Der Versuch, 1 zu `None` zu addieren, führt zu einem Fehler.

## Recherche-Aufgabe

1. **Funktionsdefinition & Aufruf**

   - Parameter müssen korrekt definiert und übergeben werden (z.B. `def begrüßung(name):`).
   - Fehlende Parameter oder falsche Syntax (z.B. fehlendes Komma in `print`) führen zu Fehlern.

2. **Standardparameter**

   - Parameter mit Standardwerten (`y=0`) müssen am Ende der Parameterliste stehen (z.B. `def addiere(x, y=0, z=0):`).

3. **Globale vs. lokale Variablen**

   - Lokale Variablen in Funktionen überschreiben keine globalen Variablen (z.B. `x = "lokal"` in `test()`).
   - Um globale Variablen zu ändern, muss `global x` verwendet werden.

4. **Ausnahmebehandlung (`try-except`)**

   - `except` ohne spezifischen Fehler fängt alle Fehler ab, aber die Fehlermeldung ist ungenau (z.B. `print("Fehler")`).
   - Bessere Praxis: Spezifische Fehler wie `ZeroDivisionError` abfangen und detaillierte Nachrichten ausgeben (z.B. `print("Fehler", e)`).

5. **`finally`-Block**

   - Wird immer ausgeführt, unabhängig von Fehlern.
   - Ein `return` im `finally` überschreibt den Rückgabewert des `try`-Blocks (z.B. in `berechne()`).

6. **Typische Fehlerquellen**
   - `ValueError` bei ungültigen Konvertierungen (z.B. `int("abc")`).
   - `TypeError` bei falschen Operationen (z.B. `None + 1`).
