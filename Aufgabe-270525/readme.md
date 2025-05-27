# Aufgabe 270525

## Debug Aufgabe

### Aufgabe 1

- **`For`** ist ein Schleifenbefehl in Python und gehört zu den `Schlüsselwörtern`. Es sollte nicht als Variable verwendet werden.

- korrigierten Code

```Python
f_numer = 7
print(f_numer)
```

### Aufgabe 2

- Die **`if`**-Anweisung besteht aus einer Bedingungsprüfung, gefolgt von der Ausführung des nächsten Programmabschnitts. Zur Unterscheidung der Codeblöcke muss die auszuführende Anweisung gegenüber der **`if`**-Zeile um eine Ebene eingerückt sein.

- korrigierten Code

```Python
name = "Ada"
if name == "Ada":
    print("Hello,", name)
```

### Aufgabe 3

- In der mathematischen Berechnung mit Python sollten die beteiligten Variablen konsistent sein und entweder `int` oder `float` sein. `string` nehmen an numerischen Berechnungen nur als ein gesamtes Element teil.

- korrigierten Code

```Python
price = "19.99"  # als String
quantity = 3
total = float(price) * quantity
print("Total:", total)
```

## Recherche Aufgabe

Heute haben wir uns gemäß dem Prüfungsrahmen von PCEP3002 vorbereitet und die folgenden Themen wiederholt:

- **Python-Syntax**
- **Schlüsselwörter**
- **Ganzzahlen, Gleitkommazahlen, Zeichen**
- **Operatoren**
- **Boolesche Operationen**
- **Grundlegende Fehlererkennung in Programmen**

Für mich war heute eine interessante Erkenntnis, dass die Funktion `print` auch die Parameter `sep` und `end` enthält, um die Ausgabe zu steuern.

Außerdem habe ich durch die Erklärungen zum Compiler tatsächlich ein besseres Verständnis für die entsprechenden Begriffe bekommen – zuvor habe ich diese Begriffe nie wirklich beachtet.

Ich bin neugierig, ob binäre, oktale und hexadezimale Zahlen in der Prüfung abgefragt werden.
