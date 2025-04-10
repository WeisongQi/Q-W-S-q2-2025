# Intro Datenbankem

## Aufgabe 1 Datenbankmanagementsysteme rechere

1. MySQL

    1. MySQL ist ein QSL-Datenbanksystem.
    2. Es verwendet SQL.
    3. Daten werden in relationalen Tabellen gespeichert, die strukturierte Daten enthalten.
    4. MySQL kann sowohl lokal gehostet als Cloud-Service genutzt werden.
    5. MySQL wird häufig für Webanwendungen, Content-Management-Systeme und E-Commerce Plattformen verwendet.

2. MongoDB

    1. MongoDB ist ein No-SQL-Datenbanksystem.
    2. Es verwendet die MongoDB Query Language (MQL).
    3. Daten werden in BSON (Binary JSON) gespeichert, einem binären Format, das JSON ähnelt.
    4. MongoDB kann lokal gehostet oder als Cloud-Service (z. B. MongoDB Atlas) genutzt werden.
    5. MongoDB wird oft für Big-Data-Anwendungen, Echtzeit-Analysen und flexible, schemafreie Datenmodelle verwendet.

3. Redis

    1. Redis ist ein No-SQL-Datenbanksystem.
    2. Redis verwendet eigene Befehle und keine traditionelle Abfragesprache.
    3. Daten werden als Schlüssel-Wert-Paare gespeichert und unterstützen verschiedene Datentypen wie Strings, Listen, Hashes und Sets.
    4. Redis kann lokal gehostet oder als Cloud-Service genutzt werden.
    5. Redis wird häufig für Caching, Sitzungsmanagement und Echtzeitanwendungen wie Chat-Dienste oder Live-Dashboards verwendet.

4. DynamoDB

    1. DynamoDB ist ein No-SQL-Datenbanksystem.
    2. Es verwendet PartiQL, eine SQL-kompatible Abfragesprache.
    3. Daten werden in JSON-ähnlichen Dokumenten gespeichert.
    4. DynamoDB ist ein vollständig verwalteter Cloud-Service und kann nicht lokal gehostet werden.
    5. DynamoDB wird für hochskalierbare Anwendungen wie E-Commerce, IoT und mobile Anwendungen verwendet.

5. Aurora

    1. Aurora ist ein SQL-Datenbanksystem.
    2. Es verwendet SQL.
    3. Daten werden in relationalen Tabellen gespeichert.
    4. Aurora ist ein vollständig verwalteter Cloud-Service und kann nicht lokal gehostet werden.
    5. Aurora wird für geschäftskritische Anwendungen verwendet, die hohe Verfügbarkeit und Leistung erfordern, wie z. B. E-Commerce und Unternehmensanwendungen.

## Aufgabe 2 SQL Übungen

~~~SQL
    1. SELECT * FROM Orders;
    2. SELECT Item FROM Orders WHERE customer_id = 4;
    3. SELECT * FROM Shippings  WHERE status = "Pending";
    4. SELECT first_name, last_name FROM Customers  WHERE country="USA" AND age > 25;
~~~
