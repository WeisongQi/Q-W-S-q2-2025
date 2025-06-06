# Aufgabe 060625

## Python Programmier-Challenge: Arbeiten mit Datenstrukturen

```python
zahlenInt = input("Bitte geben Sie die Granzzahlen , mit leerzeichen getrennt:")
# Lies vom Benutzer eine Zeile mit Ganzzahlen, durch Leerzeichen getrennt, ein.
zahlenInt_list = list(zahlenInt.split(" "))
zahlen_list = [int(i) for i in zahlenInt_list]
# Speichere die Zahlen in einer Liste.
zahlen_set = set(zahlen_list)
# eine Menge (set) mit allen einzigartigen Zahlen
zahlenC_dic = {}
for i in zahlen_list:
    zahlenC_dic[i] = zahlenC_dic.get(i, 0) + 1
zahlen_dic = {i: zahlenC_dic.get(i, 0) for i in zahlen_set}
# ein Dictionary, das jeder Zahl ihre Häufigkeit zuordnet.

print(zahlenInt_list)
print(zahlen_list)
print(len(zahlen_list))  # die Gesamtzahl der eingegebenen Werte,
print(zahlen_set)  # die Gesamtzahl der eingegebenen Werte,
print(zahlen_dic)  # die Häufigkeit jeder Zahl, sortiert aufsteigend nach der Zahl.
```
