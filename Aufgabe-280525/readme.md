# Aufgabe 280525

## Debugging-Aufgabe

### Debug 1

- Fehler bei der Variablenzuweisung: falsche Anführungszeichen und Fehler bei der Datentypen.

- korrigierten Code

```python
zahl = "10"
ergebnis = int(zahl) + 5
print(ergebnis)
```

### Debug 2

- Der ausführende Teil der If-Anweisung sollte eingerückt bleiben.

- korrigierten Code

```python
x = 3
if x > 0:
    print("x ist positiv")
```

### Debug 3

- Der ausführende Teil der For-Schleife sollte eingerückt bleiben.

- korrigierten Code

```python
for i in range(5)
    print(i)
```

### Debug 4

- Der ausführende Teil der If-Anweisung sollte eingerückt bleiben. Und Relational Operatoren ist "==".

- korrigierten Code

```python
alter = 18
if alter == 18:
    print("Volljährig")
```

### Debug 5

```python
x = 4
y = 2
z = x ^ y
print("Ergebnis ist", z)
```

- Das Programm enthält keine Fehler, der Operator ist ein binärer Operator. Das Programm führt eine binäre Berechnung durch.

> > x = 0b0100;y = 0b0010;z = 0b0110

### Debug 6

- Der ausführende Teil der If-Anweisung sollte eingerückt bleiben.

- korrigierten Code

```python
x = 10
if x > 0:
    if x < 5:
        print("klein")
    else:
        print("groß")
```

### Debug 7

- Verwenden Sie 'Break', um aus der Schleife auszusteigen.

- korrigierten Code

```python
while True:
    print("Hallo")
    break
```

### Debug 8

- Bei der Input-Anweisung ist der eingegebene Datentyp standardmäßig ein String. Eine Typkonvertierung ist erforderlich, um numerische Berechnungen mit Zahlen durchzuführen.

- korrigierten Code

```python
eingabe = input("Gib eine Zahl ein: ")
if int(eingabe) > 10:
    print("größer als 10")
```

## Recherche Aufgabe

- Ich habe beim Web-App von Helen festgestellt, dass ich mit den verschiedenen Funktionen von 'listen' nicht vertraut bin. Nach mehreren Verschachtelungen kann ich die vom Programm ausgegebenen Antworten nicht richtig erkennen. Außerdem muss ich einige englische Satzstrukturen klären.
