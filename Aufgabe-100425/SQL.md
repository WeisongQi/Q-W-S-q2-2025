# SQL Commands

## DQL Commands

~~~SQL
    1. SELECT * FROM Orders;
    2. SELECT DISTINCT Item FROM Orders WHERE customer_id = 4 or amount = 400;
    3. SELECT * FROM Orders ORDER BY amount DESC;
        SELECT * FROM Orders ORDER BY amount ASC;
    4. SELECT first_name, last_name FROM Customers  WHERE country="USA" AND age > 25;
    5. SELECT Kurse.Titel
        from Belegungen
        join Studenten on Belegungen.Student_id = Studenten.Student_id
        join Kurse on Belegungen.Kurs_id = Kurse.Kurs_id
        WHERE Studenten.Name = 'Hans';
~~~

## DML Commands

~~~SQL
    1. INSERT INTO studenten (Student_id, name, hauptfach)
        VALUES (1, "Müller", "Mathematik"),
        (2, "Hans","Informatik"),
        (3, "Zollern","Physik"),
        (4, "Ford","Maschinenbau"),
        (5, "Karl","Philosophie"),
        (6, "Mestermann","Informatik");
    2. UPDATE studenten
        SET hauptfach = "Musik"
        WHERE name = "Hans";
    3. DELETE FROM studenten
        WHERE hauptfach = "Mathematik";
~~~

## DDL Commands

~~~SQL
    1. CREATE TABLE Studenten (Student_id INTEGER PRIMARY KEY AUTOINCREMENT,
                        Name VARCHAR(50),
                        Hauptfach VARCHAR(50)
                       );
    2. DROP TABLE Orders;
    3. ALTER TABLE Studeten
        ADD Country VARCHAR(100);
    4. CREATE TABLE belegungen (belegung_id INT PRIMARY KEY,
                         Student_id INT,
                         Kurs_id INT,
                         datum DATE,
                         FOREIGN KEY (Student_id) References Studenten(Student_id),
                         FOREIGN KEY (Kurs_id) References Kurse(Kurs_id)
);

~~~

## DCL Commands

~~~SQL
    1. GRANT SELECT, INSERT ON Studenten TO User1;
    2. REVOKE INSERT ON Studenten FROM User1:
~~~

## TCL Commands

~~~SQL
    1. BEGIN TRANSACTION;
        UPDATE Customers SET Age = 33 WHERE last_name = 'Luna';
        COMMIT;
    2. BEGIN TRANSACTION;
        DELETE FROM Customers WHERE Age > 20;
        ROLLBACK;
~~~

| = | > | < | != | <= | >= | BETWEEN | LIKE | IN |
|---|---|---|----|----|----|---------|------|----|
|Gleich|Größer als|Kleiner als|Nicht|Kleiner oder Gleich|Größer oder Gleich|Zwischen einem bestimmten Bereich|Muster suchen|mehrere mögliche Werte für eine Spalte angeben|
