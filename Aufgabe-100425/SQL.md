# SQL

## DQL

~~~SQL
    1. SELECT * FROM Orders;
    2. SELECT Item FROM Orders WHERE customer_id = 4 or ;
    3. SELECT first_name, last_name FROM Customers  WHERE country="USA" AND age > 25;
    4. SELECT Kurse.Titel
        from Belegungen
        join Studenten on Belegungen.Student_id = Studenten.Student_id
        join Kurse on Belegungen.Kurs_id = Kurse.Kurs_id
        WHERE Studenten.Name = 'Hans';
~~~

## DML

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

## DDL

~~~SQL


~~~