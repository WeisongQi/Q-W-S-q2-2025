# Aufgabe 080425

## Aufgabe 1 - Tabellen löschen

>> Lösche alle Tabellen auf der programiz.com website

~~~SQL
DROP TABLE Orders;
DROP TABLE Shippings;
DROP TABLE Customers;
~~~

## Aufgabe 2 - Neue Tabellen anlegen

Erstelle 2 neue Tabellen:
studenten (student_id, name, hauptfach)
kurse (kurs_id, titel, dozent)

~~~SQL
CREATE TABLE Studenten (Student_id INT AUTO_INCREMENT PRIMARY KEY,
                        Name VARCHAR(50),
                        Hauptfach VARCHAR(50)
                       );
CREATE TABLE Kurse (Kurs_id INT PRIMARY KEY,
                        Titel Vatrchar(50),
                    Dozent Vatrchar(50)
                       );
~~~

## Aufgabe 3 - Tabellen befüllen

Legt sechs Studenten und mind. drei Kurse an.

~~~SQL
INSERT INTO studenten (Student_id, name, hauptfach)
VALUES (1, "Müller", "Mathematik"),
    (2, "Hans","Informatik"),
    (3, "Zollern","Physik"),
    (4, "Ford","Maschinenbau"),
    (5, "Karl","Philosophie"),
    (6, "Mestermann","Informatik");


INSERT INTO Kurse (Kurs_id, Titel, Dozent)
VALUES (1, "Logik","Friedrich"),
        (2, "Analysis","Gauß"),
        (3, "Lineare Algebra","Schiller");

~~~

## Aufgabe 4 - Foreign Keys

Erstellt nun eine letzte Tabelle:
belegungen (belegung_id, student_id, kurs_id, datum)

~~~SQL

CREATE TABLE belegungen (belegung_id INT PRIMARY KEY,
                         Student_id INT,
                         Kurs_id INT,
                         datum DATE,
                         FOREIGN KEY (Student_id) References Studenten(Student_id),
                         FOREIGN KEY (Kurs_id) References Kurse(Kurs_id)
);
INSERT INTO belegungen (belegung_id, Student_id, Kurs_id, datum)
VALUES
    (1, 1, 2, '2025-04-08'),
    (2, 2, 3, '2025-04-09'),
    (3, 3, 2, '2025-04-10'),
    (4, 4, 3, '2025-04-11'),
    (5, 5, 1, '2025-04-12'),
    (6, 6, 2, '2025-04-13');

~~~

## Aufgabe 5 - JOIN

Schreibt dann Querys für folgende Fragestellungen:

Wie heißen die Kurse in die **Hans** belegt hat?


~~~SQL

SELECT Kurse.Titel
from Belegungen
join Studenten on Belegungen.Student_id = Studenten.Student_id
join Kurse on Belegungen.Kurs_id = Kurse.Kurs_id
WHERE Studenten.Name = 'Hans';

~~~

Wie heißen die Studenten, die in **Analysis** belegt haben?

~~~SQL

SELECT Studenten.Name
from Belegungen
join Studenten on Belegungen.Student_id = Studenten.Student_id
join Kurse on Belegungen.Kurs_id = Kurse.Kurs_id
WHERE Kurse.Titel = 'Analysis';
~~~
