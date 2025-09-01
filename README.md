# fsrfb4.de-mkdocs

## Setup

Um das virtual environment einzurichten, unter Linux einfach die `setup.sh` ausführen.
Alternativ für Windows: @desvaters fragen.

### Windows

1. Repo klonen
2. pip install mkdocs
3. pip install mkdocs-material
4. mkdocs serve

## Änderungen lokal testen

Der Befehl `mkdocs serve` startet unter `localhost:8000` eine Testinstanz, die sich aktualisiert, sobald Änderungen an einer der Dateien vorgenommen werden. Diese Methode ist aber nur zum Testen gedacht, nicht zum hosten der Webseite.

## Webseite hosten

Der Befehl `mkdocs build` erstellt in einem Unterordner `site` Dateien, die dann statisch via nginx und co. gehosted werden können.
