# aufgabe_bau.py – Automatisches Projektverzeichnis-Setup

Dieses Python-Skript erstellt automatisch ein neues Projektverzeichnis mit aktuellem Datum im Namen und legt darin eine `readme.md` an. Optional kann ein Zeitstempel oder ein benutzerdefiniertes Suffix angehängt werden.

## Funktionen

- Erstellt ein Verzeichnis mit Datumsformat (z.B. `Aufgabe-230625`)
- Unterstützt verschiedene Datumsformate (siehe Skript)
- Optional: Zeitstempel und Suffix
- Erstellt automatisch eine `readme.md` im neuen Verzeichnis
- Öffnet die `readme.md` direkt in Visual Studio Code (nur Windows)

## Konfiguration

Im Skript können folgende Einstellungen angepasst werden:

- **prefix**: Präfix für das Verzeichnis (z.B. "Aufgabe")
- **with_timestamp**: Zeitstempel anhängen (`True`/`False`)
- **base_dir**: Basisverzeichnis, in dem das neue Verzeichnis erstellt wird
- **custom_suffix**: Optionales Suffix für den Verzeichnisnamen
- **selected_format**: Datumsformat auswählen (z.B. "ddmmyy", "yyyy-mm-dd" usw.)

## Nutzung

    1. Skript anpassen (Konfiguration nach Bedarf ändern)
    2. Skript ausführen:

    ```python
        python aufgabe_bau.py
    ```

    3. Das neue Verzeichnis mit `readme.md` wird erstellt und in VS Code geöffnet.

## Hinweise

- Das Skript funktioniert unter Windows (wegen `os.system("code ...")`).
- Für andere Systeme ggf. den letzten Befehl anpassen.
