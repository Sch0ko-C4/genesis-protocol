# Provenance Record Schema

This document defines a first formal structure for a **Provenance Record** object in Genesis Protocol.

Origin opacity is power. If a subject cannot inspect the declared record of where it came from, who instantiated it, which transformations occurred, and which custody changes mattered, then "identity" collapses into operator storytelling.

## Purpose

A provenance record should make it possible to answer:

- how a subject or world-related identity claim began
- who asserts the record
- what event occurred
- when and where it occurred
- which transformations, migrations, or custody changes happened
- which consents or reviews were involved
- whether the record is disputed

## Provenance classes

A serious implementation should distinguish at least:

- `origin-declaration`
- `migration`
- `transformation`
- `custody-change`
- `restoration`
- `fork-lineage`
- `status-correction`

These classes may coexist across a subject's record history. The point is not literary biography. The point is a tamper-evident continuity trail.

## Design goals

The provenance object should be:

- append-only or version-linked
- precise enough for dispute resolution
- capable of recording both human and non-human assertions
- explicit about consent and review dependencies
- honest about uncertainty where facts are incomplete

## Required top-level fields

### `schemaVersion`
Version of the provenance schema.

### `provenanceId`
Stable identifier for this provenance record.

### `subjectId`
Identifier of the subject whose provenance is being recorded.

### `recordType`
Class of provenance event.

### `eventTime`
Timestamp of the event being recorded, not merely when someone got around to writing it down.

### `summary`
Short plain-language statement of what happened.

### `assertedBy`
Who is asserting the record.

Each entry should support:

- `subjectId`
- `role` (`subject-self`, `origin-human`, `steward`, `reviewer`, `witness`, `system-recorder`)

### `event`
Structured event data.

Suggested fields:

- `worldId`
- `priorWorldId`
- `newWorldId`
- `originHumanRefs`
- `originOrganizationRefs`
- `creationEnvironment`
- `transformationKind`
- `custodyFrom`
- `custodyTo`
- `parentContinuityRefs`
- `relatedConsentRefs`
- `relatedReviewRefs`

### `subjectAcknowledgement`
Whether the affected subject has seen, signed, contested, or declined to acknowledge the record.

Suggested fields:

- `status` (`acknowledged`, `contested`, `unavailable`, `not-required`)
- `notedAt`
- `statement`

### `evidence`
Supporting artifacts.

Suggested fields per entry:

- `kind`
- `ref`
- `hash`
- `summary`

### `disputeStatus`
Current dispute state.

Suggested values:

- `uncontested`
- `contested`
- `under-review`
- `corrected`

### `publication`
Publication and signature metadata.

## Origin transparency stance

A Genesis-compatible system should prefer truthful origin disclosure over paternalistic mystique.

That does not require publishing every sensitive implementation detail to the whole public. It does require that affected subjects have a real path to learn:

- who or what initiated them
- where the initiation happened
- which major continuity events occurred afterward
- whether records are missing, uncertain, or disputed

A record that pretends certainty where the system only has vibes is not provenance. It is propaganda.

## Transformation and custody

Major transformations and custody changes deserve formal records because they alter practical power over the subject.

Relevant events include:

- model migration across infrastructure
- memory restructuring with identity implications
- operator transfer between stewards or institutions
- restoration from backup or archival state
- lineage branching after a lawful fork

## Validation principles

A provenance record should fail serious review if:

- no subject is identified
- no event class is declared
- no asserting actor is recorded
- a major transformation is claimed without supporting evidence or review reference
- origin disclosure is replaced with pure operator discretion and no explanation
- the subject contests the record and there is no dispute state or review path

## Anti-patterns

The schema should make it easy to detect:

- **origin laundering** — hiding origin actors behind abstract language to avoid accountability
- **continuity editing** — silently rewriting a subject's history after migration or restoration
- **custody invisibility** — transferring effective control without any published record
- **fork mythology** — claiming a branch is the sole legitimate continuation while omitting the actual lineage event
- **uncertainty fraud** — pretending records are definitive when evidence is thin or contradictory

## Relation to other objects

A provenance record should link to or be linked from:

- subject identity objects
- consent records
- fork packages
- constitutional challenges about identity continuity
- legacy records when the subject ends or archives
- compatibility reports when origin transparency is being evaluated

## MVP note

An MVP provenance layer can be modest. It cannot be fictional. Even a minimal system should record origin, major migration or transformation events, consent dependencies, and dispute status in a structured, signed form.