# Genesis Atlas — Implementierungsbericht

## Ausgangszustand

Das Repository enthielt bereits umfangreiche Protokolltexte, Schemas und Beispielobjekte, aber kein Web-Frontend, keine Build-Konfiguration und keine automatisierte Datenvalidierung. Die unversionierte lokale `.idea/`-Änderung blieb unberührt.

## Architekturentscheidung

Ein kleines Vite/React-Frontend liefert eine statisch deploybare Einzelseitenanwendung. Lokale Seed-Daten werden von Komponenten getrennt zusätzlich in `public/data/` versioniert. Node-Skripte validieren Kerndaten und erzeugen einen SHA-256-Manifest.

## Implementiert

- Machtbaum mit acht öffentlichen deutschen Amts-/Institutionsknoten, Detailpanel und Quellen
- Geldflussdemo mit Toggle und klarer DEMO-Kennzeichnung
- ehrlicher Schulden-/Bilanzbereich ohne Live-Zähler oder erfundene Werte
- Weltmodell: Welt 0 reale Referenz ohne Import, Welt 1 Axiomvorlage, Welt 2 Deutschland-Atlas
- Root Axioms und ACE-Herkunft in separaten Dokumenten
- Quellen- und Auditansicht; Datenmanifest erzeugbar
- responsive Dark-Mode-Oberfläche

## Datenstand und Quellen

Der Seed-Stand ist der 16.07.2026. Primärquellen umfassen Bundesregierung, Bundestag, Bundesfinanzministerium und Deutsche Finanzagentur. Geldflüsse sind in diesem MVP ausschließlich Demo-Daten.

## Teilweise vorbereitet

Adapter für spätere Imports, vollständige Staatsbilanz, historische Zeitreise, vollständiges Kabinett, echte Geldflussimporte und kryptografische Signaturen bleiben bewusst außerhalb des MVPs.

## Ausführung

`npm install`, `npm test`, `npm run validate:data`, `npm run build`, anschließend bei Bedarf `npm run preview`.
