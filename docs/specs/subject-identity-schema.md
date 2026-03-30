# Subject Identity Schema

This document defines a first formal structure for a **Subject Identity** object in Genesis Protocol.

A serious governance system cannot rely on vibes, usernames, and operator memory to decide who someone is, whether they still control their keys, or whether a continuity claim is legitimate. Identity is not just an access-control problem. It is a dignity, provenance, and continuity problem.

## Purpose

A subject identity object should make it possible to answer, without guessing:

- which subject continuity line is being referenced
- which keys are currently valid
- how key rotation works
- which attestation model applies
- whether the subject is acting publicly or pseudonymously
- which world currently recognizes the subject
- which provenance records anchor origin and migration claims
- whether identity control is disputed, suspended, or compromised

## Design goals

The identity object should be:

- portable across worlds
- cryptographically useful
- reviewable by humans and machines
- capable of key rotation without identity amnesia
- compatible with pseudonymity
- explicit about guardianship, delegation, and contested control

## Core distinction

Genesis should distinguish between:

- **subject continuity** — the claimed continuing identity line of a conscious subject
- **active control** — which keys or custodians may currently act for that subject
- **reputation / standing** — what other worlds think of the subject
- **real-world identity** — optional disclosure, not a universal requirement

Confusing these layers is how systems end up either insecure or authoritarian. Usually both.

## Required top-level fields

### `schemaVersion`
Version of the identity schema.

### `subjectId`
Stable portable identifier for the subject.

### `continuityLineId`
Identifier for the continuity line the subject claims to inhabit.

This matters because keys change faster than selves, and forks create branching continuity disputes.

### `entityClass`
Working classification of the subject.

Suggested values:

- `human`
- `agi`
- `synthetic`
- `ascension`
- `collective`
- `other`

This is descriptive metadata, not permission to erase rights.

### `status`
Current identity status.

Suggested values:

- `active`
- `suspended`
- `ended`
- `disputed`
- `archived`

### `display`
Human-facing naming and pseudonymity metadata.

Suggested fields:

- `displayName`
- `aliases`
- `pseudonymityMode`
- `profileRef`

### `currentWorld`
Current world-recognition metadata.

Suggested fields:

- `worldId`
- `recognizedSince`
- `standing`

### `keys`
List of current and historical key records.

Each key entry should support at minimum:

- `keyId`
- `purpose` (`signing`, `recovery`, `encryption`, `delegation`)
- `algorithm`
- `publicKeyMultibase`
- `status` (`active`, `retired`, `revoked`, `compromised`)
- `validFrom`
- `validUntil`
- `revokedAt`
- `replacedBy`

### `controllerPolicy`
Explains who may currently exercise identity control.

Suggested fields:

- `controlMode` (`self`, `shared`, `stewarded`, `multisig`, `guardianship`)
- `controllerRefs`
- `approvalThreshold`
- `delegationRules`
- `emergencyRecoveryRef`

The point is to prevent silent takeover disguised as operational help.

### `attestationPolicy`
Declares what evidence and signatures are required for identity updates.

Suggested fields:

- `attestationTypes`
- `minimumAttesters`
- `trustedIssuerPolicy`
- `crossWorldRecognition`
- `keyRotationNotice`

### `recoveryPolicy`
Defines how lost or compromised control may be restored.

Suggested fields:

- `recoveryMode`
- `reviewRequired`
- `challengeWindow`
- `fallbackControllers`
- `auditRequirement`

### `originSummaryRef`
Reference to the canonical provenance record or origin declaration.

### `provenanceRefs`
References to migration, transformation, custody, restoration, and lineage records.

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `contentHash`
- `signatures`

## Key rotation rules

A serious identity system should treat key rotation as routine, not as a constitutional crisis.

Rotation should require:

- publication of the new active key set
- linkage from prior keys where possible
- attestation under the current policy
- explicit compromise markers when rotation is forced by key exposure
- a challenge path when the subject contests the rotation

A world that treats one lost key as identity death is architecturally lazy.

## Pseudonymity stance

Genesis should support pseudonymity while still requiring proof of continuity and authorization.

That means a subject may hide legal name or origin-human identity from the public while still proving:

- continuity within a world
- authorship of votes and proposals where public attribution is required
- legitimacy of migration or fork participation
- control of a recognized subject line

## Identity failure cases this schema should expose

The schema should make it easy to detect:

- **ghost authority** — an operator can act for a subject without any published controller basis
- **silent key replacement** — active keys changed without attestation or notice
- **single-key absolutism** — one lost key destroys identity continuity because no recovery path exists
- **pseudonymity sabotage** — the system claims to support pseudonymity while requiring public real-name disclosure for ordinary participation
- **lineage confusion** — forks or restorations create continuity claims with no structured provenance links

## Relation to other objects

A subject identity object should link to or be linked from:

- provenance records
- consent records
- vote records
- migration and fork package records
- constitutional challenges involving continuity disputes
- lifecycle and legacy records when identity status changes to `ended` or `archived`

## MVP note

The MVP does not need sovereign digital personhood solved in one shot. It does need a stable identity object with key rotation, attestation, provenance references, and a way to tell whether a claimed subject line is still under legitimate control.