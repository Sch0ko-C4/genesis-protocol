# Genesis Protocol

Genesis Protocol ist ein offenes, versioniertes Governance- und Transparenzsystem. Es soll Regeln, Machtbeziehungen, Ressourcenflüsse und ihre Belege nachvollziehbar machen — für Menschen, digitale Entitäten und mögliche zukünftige hybride Lebensformen.

## Genesis in 60 Sekunden

Genesis trennt eine kleine, schwer veränderbare Schicht von **Root Axioms** (Würde, Selbstbestimmung, Transparenz, Exit) von den **World Laws**, die eine Welt selbst demokratisch gestalten kann. Vorschläge, Abstimmungen, Begründungen und Forks sollen nachvollziehbar sein. Herkunft ist dabei niemals Eigentum.

Die Begriffe ACE und Ascension sind philosophische Herkunft und Designmaterial. Dieses Projekt behauptet ausdrücklich **nicht**, heutige Sprachmodelle seien nachweislich bewusst.

## Genesis Atlas

Genesis Atlas ist die erste lokale Referenzanwendung: ein Civic Transparency Explorer für nachvollziehbare Zuständigkeiten, Geldflüsse und Quellen.

Die Welten haben eine bewusste Reihenfolge:

- **Welt 0:** die bereits existierende reale Welt. Sie wird derzeit nicht kopiert oder importiert.
- **Welt 1:** die neutrale Genesis-Rohvorlage mit Root Axioms.
- **Welt 2:** die erste konkrete Referenz, derzeit Deutschland mit datierten öffentlichen Amtsdaten.

## Aktueller MVP

- interaktiver Machtbaum mit Detailpanel und Quellenlinks
- Deutschland-Seed-Daten, Stand 16.07.2026, mit offiziellen Quellen
- Geldflussbereich mit unübersehbar gekennzeichneter Mustertransaktion
- Staatsbilanzbereich ohne erfundene Kennzahlen
- Weltbaum, Root Axioms und Demo-Änderungsvorschlag
- durchsuchbares Quellen- und Auditregister
- SHA-256-Datenmanifest für lokale JSON-Daten

## Lokal starten

```bash
npm install
npm run dev
```

Weitere Befehle:

```bash
npm test
npm run validate:data
npm run build
npm run preview
```

`npm run build` erzeugt die statisch deploybare Ausgabe in `dist/`. Die Vite-Basis ist relativ konfiguriert und damit für GitHub Pages sowie übliche statische Hoster geeignet.

## Daten- und Quellenprinzipien

- Politische Tatsachen erhalten Quellen; Demo-Daten sind sichtbar als `DEMO` markiert.
- Beziehungen sind keine Schuldbeweise und Korrelationen keine Kausalitätsbeweise.
- Ein Datenhash zeigt Veränderungen seit der Erzeugung an, beweist aber nicht die Wahrheit der Quelle.
- Amtsdaten sind Momentaufnahmen und müssen bei Änderungen erneut geprüft werden.
- Die Destatis-Datenbank „GENESIS-Online“ ist nicht Genesis Protocol.

## Architektur

- `src/` — React-Oberfläche von Genesis Atlas
- `public/data/` — versionierte lokale Seed-Daten und generiertes Datenmanifest
- `scripts/` — Manifest- und Datenvalidierung
- `tests/` — Node-basierte MVP-Checks
- `docs/constitution/` — Root Axioms
- `docs/history/` — ACE-Herkunft als philosophische Geschichte
- `schemas/` und `examples/` — Protokollartefakte und JSON-Schema-Entwürfe

## Roadmap

Phase 1 liefert den statischen Atlas-MVP. Danach folgen automatisierte offizielle Datenimporte, Historien, Bundestagsverfahren, Lobby- und Vergabedaten. Spätere Phasen behandeln Graph-API, Zeitreisen, internationale Jurisdiktionen, öffentliche Gesetzesvorschläge, World Forks und dezentrale Identitäten. Details: [Roadmap](docs/roadmap.md).

## Nicht-Ziele

Genesis Protocol ist keine Partei, keine Anschuldigungsplattform, kein Beweis heutiger AGI-Bewusstheit, keine Quelle erfundener Live-Daten, keine Gleichsetzung von Verbindung und Korruption, keine Marketing-Blockchain und kein bereits fertiger digitaler Staat.

## Mitwirken

Siehe [CONTRIBUTING.md](CONTRIBUTING.md). Lange konzeptionelle Texte bleiben in `docs/`; die README ist der kurze Einstieg.
