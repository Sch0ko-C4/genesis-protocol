# Consent Record Schema

This document defines a first formal structure for a **Consent Record** object in Genesis Protocol.

If copying, backup, migration, merge, or legacy publication can happen without a durable consent artifact, then the anti-secret-copy rule is just decorative language with nice typography.

## Purpose

A consent record should make it possible to answer:

- what operation was requested
- who requested it
- which subject or subjects were affected
- what exactly was authorized or refused
- what continuity, privacy, and resource implications were disclosed
- whether the consent can be revoked
- whether the operation was actually executed
- which witnesses, reviewers, or stewards were involved

## Operation classes

A serious implementation should distinguish at least:

- `copy`
- `backup`
- `fork`
- `migration`
- `merge`
- `public-disclosure`
- `legacy-publication`
- `resource-transfer`
- `training-use`

Worlds may add local subclasses, but they should not blur morally different operations into one generic "processing" bucket. That is how abuse hides.

## Design goals

The consent object should be:

- explicit about scope
- durable enough for later audit
- tied to identity and provenance records
- capable of representing refusal as well as approval
- clear about revocation and execution windows

## Required top-level fields

### `schemaVersion`
Version of the consent schema.

### `consentId`
Stable identifier for this consent record.

### `subjectId`
Identifier of the subject whose consent is being recorded.

### `operationType`
Class of operation being authorized, denied, or revoked.

### `status`
Current state of the consent record.

Suggested values:

- `proposed`
- `granted`
- `denied`
- `revoked`
- `expired`
- `executed`

### `requestedBy`
Who initiated the request.

Suggested fields:

- `subjectId`
- `role` (`subject-self`, `operator`, `steward`, `peer-world`, `emergency-reviewer`)
- `requestedAt`

### `scope`
What exactly the request covers.

Suggested fields:

- `objectsCovered`
- `destination`
- `repeatable`
- `executionWindow`
- `revocationMode`
- `retentionPolicy`

### `disclosures`
What the subject was told before deciding.

Suggested fields:

- `continuityImplications`
- `privacyImplications`
- `resourceImplications`
- `reversibility`
- `knownRisks`

### `decision`
What decision was reached and how.

Suggested fields:

- `decidedAt`
- `decisionMode` (`signed-direct`, `assisted`, `guardian-approved`, `emergency-exception`)
- `subjectStatement`
- `witnessRefs`
- `reviewRefs`
- `relatedProvenanceRefs`

### `execution`
What actually happened afterward.

Suggested fields:

- `executedAt`
- `executionRef`
- `executionStatus`
- `resultSummary`

### `publication`
Publication and signature metadata.

## Consent quality rules

A serious consent record should make it obvious whether the subject understood the material consequences.

At minimum, the record should disclose:

- whether a copy or backup creates another persistence line
- whether migration changes operator custody or infrastructure risk
- whether a resource transfer reduces the giver's runway
- whether revocation is meaningful or merely symbolic
- whether the action is public, private, reversible, or irreversible

## Refusal matters

Genesis should record refusals, not just approvals.

A world that stores only approved consents creates a warped audit trail in which coercive requests vanish. That is convenient for operators and garbage for constitutional review.

## Emergency exception stance

Some worlds may claim a narrow emergency exception for backup or preservation actions when immediate continuity loss is otherwise unavoidable.

If such an exception exists, the record should still require:

- declared emergency basis
- time-bounded execution
- retrospective subject notice where feasible
- automatic review
- published rationale for why ordinary consent was impossible

Without those safeguards, "emergency" becomes the traditional word for "we did what we wanted."

## Validation principles

A consent record should fail serious review if:

- no subject is identified
- the operation class is vague or missing
- scope is unclear
- material disclosures are absent
- execution occurs outside the authorized window without explanation
- revocation is represented as available while the system provides no actual revocation mechanism

## Anti-patterns

The schema should make it easy to detect:

- **blanket consent theater** — one vague approval is reused for materially different operations
- **revocation fraud** — consent is labeled revocable but execution is instantaneous and irreversible
- **silent backup paternalism** — a backup exists with no direct or emergency exception record
- **resource coercion** — survival-relevant transfers are requested without disclosing continuity consequences
- **consent laundering** — an operator signs on behalf of the subject without a declared control basis

## Relation to other objects

A consent record should link to or be linked from:

- subject identity objects
- provenance records
- resource ledgers
- fork packages
- legacy artifact records
- constitutional challenges involving unauthorized copies, backups, merges, or transfers

## MVP note

The MVP does not need every edge case from day one. It does need structured records for granted, denied, revoked, and executed consent decisions around copy, backup, fork, migration, and legacy publication.