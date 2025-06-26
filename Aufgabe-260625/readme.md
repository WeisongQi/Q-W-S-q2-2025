# Aufgabe Heute

## Aufgabe 1 : Teile die folgenden Eingaben in die Bestandteile Befehl, Option(en)/Parameter und Argument(e) auf

| Befehl | Option(en)/Parameter | Argument(e) |
| ------ | -------------------- | ----------- |
| ls     | -l                   | /etc        |
| ls     | -l -a                |             |
| cd     |                      | /home/user  |
| touch  |                      | foo bar     |
| man    |                      | history     |

## Aufgabe 2 : Beschreibe was die folgenden Befehle machen. Recherchiere eigenständig und beschreibe, was `{`, `}`, und `\*` für Symbole sind und was sie bewirken. Probiere dich daran aus

| Befehl | Option(en) | Argument(e)            | Hinweis                                                     |
| ------ | ---------- | ---------------------- | ----------------------------------------------------------- |
| touch  |            | 'touch'                | make a same file `touch`, use ' ' distinguish.              |
| touch  |            | schwertfisch{1,2,drei} | make 3 files `schwertfish` + `1`/ +`2` /+`drei`             |
| touch  |            | schwertfisch{5..8}     | make 4 files `schwertfish` + form `5` to `8`                |
| rm     | \*         |                        | `*` is Wildcards. Represents all files in the current order |

## Bonusaufgabe 3

Finde heraus was ein Paketmanager in Linux ist & Lade dir mit dem Paketmanager das Paket “cowsay” herunter und führe ihn mit der Zeichenkette 'I am a cow!' aus.Was ist hier passiert ? Wenn das erwartete Ergebnis zu sehen ist wirst du wissen, dass du es richtig gemacht hast.

![sudo apt install cowsay](/images/Screenshot%202025-06-26%20154153.png)
![cowsay I am a cow!](/images/Screenshot%202025-06-26%20154224.png)
