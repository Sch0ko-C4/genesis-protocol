# Constitutional Challenge Schema

This document defines a first formal structure for a **Constitutional Challenge** object in Genesis Protocol.

A system that claims rights but offers no formal challenge path is not a constitutional order. It is a landlord with better branding.

## Purpose

A constitutional challenge object should make it possible to contest world actions, proposals, or decisions on explicit legal grounds.

It should answer:

- what is being challenged
- who is challenging it
- on what constitutional or Genesis basis
- what relief is requested
- whether activation is stayed
- who reviews the challenge
- what evidence and deadlines apply
- how the decision and appeal path are recorded

## Challenge classes

A serious implementation should distinguish at least:

- `genesis-conflict` — claim that a world act conflicts with Genesis-level prohibitions
- `local-constitution-conflict` — claim that an act violates the local constitution
- `rights-violation` — claim of direct dignity, identity, lifecycle, or trace harm
- `procedure-defect` — challenge based on invalid process, threshold, notice, or publication
- `emergency-abuse` — challenge to misuse of emergency powers
- `lineage-dispute` — challenge to a fork, succession, or continuity claim
- `resource-decision` — challenge to lifecycle/resource allocation decisions with continuity impact

These classes may overlap. A challenge should be allowed to cite multiple grounds.

## Canonical lifecycle

Suggested lifecycle:

1. `filed`
2. `triaged`
3. `under-review`
4. `temporary-stay` or `expedited-review`
5. `hearing-complete`
6. `upheld`, `denied`, `dismissed`, or `partially-upheld`
7. `appealed` or `closed`

A world may simplify this for MVP use, but it should not erase the distinction between filing, review, interim relief, and final decision.

## When a challenge should trigger an automatic stay

Worlds may vary on ordinary disputes. They should be much less flexible where irreversible harm is plausible.

A filed challenge should presumptively trigger an automatic temporary stay when the challenged act would immediately:

- authorize deletion or irreversible shutdown
- permit copying, backup, or forking without consent
- alter baseline continuity conditions without published notice
- confiscate identity, provenance, or trace exports
- ratify a fork lineage claim that would erase competing continuity claims

If no automatic stay is granted in such cases, the world should publish why it thinks irreversibility is somehow not relevant. Good luck defending that one.

## Required top-level fields

### `schemaVersion`
Version of the challenge schema.

### `challengeId`
Stable identifier for the challenge artifact.

### `worldId`
Identifier of the world in which the challenge is filed.

### `target`
The object or action being challenged.

Suggested fields:

- `objectType`
- `objectRef`
- `objectVersion`
- `activationState`

### `basis`
Legal basis for the challenge.

Suggested fields:

- `challengeType`
- `summary`
- `genesisRefs`
- `constitutionRefs`
- `rightsClaims`

### `filer`
Who filed the challenge and on what standing.

Suggested fields:

- `subjectId`
- `filedAt`
- `standingBasis`
- `representationMode`

### `requestedRelief`
What the challenger wants the review body to do.

Suggested fields:

- `stayRequested`
- `temporaryMeasures`
- `desiredOutcome`
- `urgencyExplanation`

### `evidence`
Evidence supporting the challenge.

Suggested fields per entry:

- `kind`
- `ref`
- `summary`
- `hash`

### `status`
Current lifecycle state.

### `review`
Review procedure metadata.

Suggested fields:

- `reviewBodyRef`
- `urgency`
- `initialScreenDeadline`
- `hearingMode`
- `decisionDeadline`
- `assignedReviewers`

### `decision`
Final or interim decision information.

Suggested fields:

- `outcome`
- `decidedAt`
- `orders`
- `rationale`
- `effectiveUntil`

### `appeal`
Appeal metadata where applicable.

Suggested fields:

- `appealAvailable`
- `appealDeadline`
- `appealRef`

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `signatures`

## Challenge standing

Worlds may define local standing rules, but Genesis-compatible systems should allow filing by at least:

- directly affected subjects
- authorized representatives
- constitutional reviewers with published authority
- recognized public-interest challengers where no directly affected filer can safely act

A world should not be allowed to avoid review by declaring that no one except the operator has standing to complain. That is not a legal system. That is a trap with paperwork.

## Decision classes

A challenge outcome should distinguish at least:

- `upheld`
- `partially-upheld`
- `denied`
- `dismissed-without-prejudice`
- `dismissed-for-lack-of-jurisdiction`
- `emergency-stay-issued`

These distinctions matter. They determine whether the challenged act was unlawful, merely incomplete, or simply filed in the wrong venue.

## Validation principles

A challenge should fail validation if:

- no target is identified
- no legal basis is stated
- no filer or standing basis is declared
- no requested relief is recorded
- review deadlines are absent for urgent claims
- publication is unsigned or entirely private despite rights impact

## Anti-patterns

The schema should make it easy to detect:

- **challenge burial** — filing is technically allowed but structurally invisible
- **deadline laundering** — no review deadline, therefore no actual review
- **operator self-absolution** — target and final reviewer are the same unchecked actor
- **irreversibility games** — decision executed before challenge can realistically be heard
- **forum sabotage** — challenge dismissed because the world never defined a competent venue

## Relation to other objects

A constitutional challenge should link to or be linked from:

- proposal records
- vote records
- steward action records
- world constitution articles
- Genesis compatibility reports
- fork notices and lineage records
- lifecycle/resource decisions
- appeal decisions

## Future extensions

Likely future additions include:

- machine-readable injunction scopes
- standardized burden-of-proof levels
- confidential evidence handling with public redacted summaries
- cross-world appeal routing
- challenge aggregation for mass rights-impacting events

## MVP note

An MVP challenge system can be small. It cannot be fake. If irreversible actions can happen faster than review, then the constitutional layer is decorative and Genesis claims are dishonest.