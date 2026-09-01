# Astro-Prototyp

Ein **versuchsweiser Port** der Seite nach Astro, als Vergleichsobjekt zur
MkDocs-Fassung im Elternverzeichnis. Beide Varianten sind gleichzeitig baubar;
ob am Ende umgestellt wird, ist offen und entscheidet der FSR.

Der Port ist ausdrücklich **kein Strukturklon**. Wo der Aufbau besser geht,
weicht er ab — deutlichstes Beispiel sind die beiden Klappfelder auf
`aktuelles`, die unter MkDocs nur deshalb Klappfelder waren, weil sich ein
Consent-Flow anders nicht bauen ließ.

## Voraussetzungen

Node ≥ 22.12 und pnpm. Bewusst **kein pixi**, damit das Repo für alle im Team
ohne Zusatzwerkzeug baubar bleibt.

## Befehle

Alle im Ordner `astro/` ausführen:

| Befehl | Wirkung |
|---|---|
| `pnpm install` | Abhängigkeiten installieren |
| `pnpm dev` | Testinstanz auf `localhost:4321` |
| `pnpm build` | Typprüfung und Build nach `dist/` |
| `pnpm check` | nur die Typprüfung |
| `pnpm preview` | den fertigen Build lokal ansehen |

## Aufbau

```text
src/
├── assets/images/   Bilder, laufen über Astros Bildpipeline
├── components/      Ersatz für die Material-Konstrukte
├── data/            fsr-members.ts — die sechzehn Gesichter als Datenliste
├── icons/           die drei eigenen SVGs, für astro-icon
├── layouts/         Grundgerüst aller Seiten
├── pages/           eine Datei je Seite, .mdx bzw. .md
└── styles/          Farbtokens und Grundstile
```

### Komponenten

| Komponente | ersetzt |
|---|---|
| `Callout` | die `!!!`-Admonitions |
| `Button` | `{ .md-button }` |
| `CardGrid` / `Card` | `<div class="grid cards" markdown>` |
| `MemberGrid` | die sechzehn wiederholten Personenblöcke |
| `ClickToLoad` | die `???`-Klappfelder vor den iframes |

## Worauf zu achten ist

- **`.mdx` nur, wo Komponenten stehen.** Reiner Fließtext wie das Impressum
  bleibt `.md`.
- **Attributsyntax aus Python-Markdown funktioniert nicht.** `{ .md-button }`
  verschwindet nicht still, sondern landet als sichtbarer Text auf der Seite.
  Solche Fälle gehören in eine Komponente.
- **TypeScript ist auf 6.x festgehalten.** Der native Compiler 7.x bietet die
  Schnittstelle nicht, die `astro check` braucht.
- **`ClickToLoad` darf keine ladbare Referenz enthalten**, solange niemand
  geklickt hat. Die URL steht deshalb in einem `data`-Attribut und nicht in
  einem `src`. Wer daran etwas ändert, sollte danach im Netzwerkmitschnitt
  prüfen, dass ohne Klick nichts nach außen geht.
