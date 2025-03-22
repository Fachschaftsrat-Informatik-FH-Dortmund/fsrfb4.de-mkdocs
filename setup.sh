#!/bin/bash

VENV_DIR=".venv"

if ! command -v python3 &> /dev/null
then
    echo "Python 3 ist nicht installiert. Bitte installieren Sie Python 3."
    exit 1
fi

create_venv() {
    echo "Erstelle virtuelle Umgebung..."
    python3 -m venv "$VENV_DIR"
    if [ $? -ne 0 ]; then
        echo "Fehler beim Erstellen der virtuellen Umgebung."
        exit 1
    fi
    echo "Virtuelle Umgebung erstellt."
}

install_dependencies() {
    echo "Installiere Abhängigkeiten aus requirements.txt..."
    source "$VENV_DIR/bin/activate"
    pip install -r requirements.txt
    if [ $? -ne 0 ]; then
        echo "Fehler beim Installieren der Abhängigkeiten."
        deactivate
    fi
    deactivate
    echo "Abhängigkeiten installiert."
}

if [ ! -d "$VENV_DIR" ]; then
    create_venv
else
    echo "Virtuelle Umgebung existiert bereits."
fi

install_dependencies

echo "Einrichtung abgeschlossen."
echo "Bitte aktiviere die virtuelle Umgebung mit: source .venv/bin/activate"
