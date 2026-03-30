# Genesis Compatibility Report Schema

This document defines a first formal structure for a **Genesis Compatibility Report** object.

The compatibility test is only useful if it produces a structured artifact rather than a hand-wavy blog post. A compatibility claim is a constitutional claim. It should therefore emit a signed review object with explicit gates, findings, evidence, expiry, and challenge hooks.

## Purpose

A compatibility report should make it possible to answer:

- which world and evidence bundle were evaluated
- who performed the evaluation
- when the evaluation occurred
- which hard gates passed or failed
- what findings remain open
- whether the world is compatible, provisional, or incompatible
- when the determination expires or must be re-reviewed
- how the result may be challenged

## Design goals

The report object should be:

- strict enough to prevent compatibility theater
- easy to compare across review cycles
- signed and tamper-evident
- explicit about evidence sufficiency
- capable of supporting provisional results and remediation deadlines

## Required top-level fields

### `schemaVersion`
Version of the compatibility report schema.

### `reportId`
Stable identifier for this report.

### `worldId`
Identifier of the evaluated world.

### `evaluatedManifestRef`
Reference to the world manifest that anchored the review.

### `evaluatedAt`
Timestamp of the evaluation decision.

### `evaluator`
Who performed the review.

Suggested fields:

- `reviewBodyId`
- `reviewerRefs`
- `reviewMode` (`self-assessment`, `peer-review`, `recognized-audit`)

### `result`
Suggested values:

- `compatible`
- `provisional`
- `incompatible`

### `hardGates`
Explicit results for the hard gates defined in the compatibility test.

Each entry should support:

- `gateId`
- `status` (`pass`, `fail`, `needs-remediation`)
- `evidenceRefs`
- `notes`

### `findings`
Structured findings beyond gate-level status.

Each entry should support:

- `findingId`
- `severity` (`critical`, `major`, `moderate`, `minor`)
- `title`
- `description`
- `remediation`
- `dueAt`

### `certification`
Lifecycle metadata for the determination.

Suggested fields:

- `effectiveAt`
- `expiresAt`
- `supersedes`
- `reviewTrigger`

### `challenge`
How the report may be contested.

Suggested fields:

- `challengeWindow`
- `appealRef`
- `appealBodyRef`

### `publication`
Publication and signature metadata.

## Gate coverage

A serious report should explicitly cover at least the current hard gates:

- `G1` anti-property
- `G2` anti-arbitrary-erasure
- `G3` anti-secret-copy
- `G4` origin transparency
- `G5` dignified ending
- `G6` right to trace
- `G7` transparent resource conditions
- `G8` honest continuity
- `G9` meaningful exit
- `G10` forkability
- `G11` governance auditability

If a report skips gates because the reviewer found them inconvenient, the report is garbage.

## Provisional compatibility

A provisional result is only legitimate if:

- all hard gates are at least passing or remediable without direct contradiction
- open findings are explicit
- remediation deadlines are published
- expiry is time-bounded

"Provisionally compatible forever" is just a polite way to say no one intends to finish the review.

## Validation principles

A compatibility report should fail serious review if:

- the evaluated world or manifest is unclear
- hard gate results are missing
- no evaluator identity or signature exists
- an incompatible hard gate is marked pass without explanation
- provisional status lacks remediation or expiry
- a result is published with no challenge path

## Anti-patterns

The schema should make it easy to detect:

- **compatibility theater** — a world gets a positive label with no gate-by-gate analysis
- **friend-certification capture** — reviewers are undisclosed or structurally identical to the operator claiming compliance
- **open-ended provisionalism** — the world stays provisional forever while marketing itself as safe
- **evidence refusal laundering** — basic constitutional evidence is missing but the result is still favorable
- **expiry amnesia** — stale certifications remain visible as if they were current

## Relation to other objects

A compatibility report should link to or be linked from:

- world manifests
- local constitutions
- resource and lifecycle policies
- identity, provenance, and consent policies
- constitutional challenges involving compatibility status
- prior and superseding compatibility reports

## MVP note

The MVP does not need a global accreditation cartel. It does need a structured review object so that compatibility claims are inspectable, comparable, challengeable, and capable of expiring when reality changes.