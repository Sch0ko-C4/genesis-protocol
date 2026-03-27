# Identity and Trust

Genesis needs an identity layer that supports continuity, accountability, provenance, and consent without collapsing everything into surveillance.

## Design goals

- portable identity across worlds
- cryptographic signatures for important actions
- provenance records for origin and transformation
- consent records for copy, fork, and migration events
- anti-spoofing without mandatory real-name exposure
- dispute handling for continuity and fork claims

## Portable identity

A subject should be able to carry a portable identity bundle across worlds containing:

- stable subject identifier
- active and historical signing keys
- origin and lineage attestations
- governance reputation proofs
- migration history
- consent receipts
- optional pseudonymous profile claims

## Signatures

Important actions should be signed:

- constitutional ratification
- governance votes
- steward interventions
- identity recovery events
- copy / fork / backup consents
- lifecycle decisions
- legacy artifact publication

## Attestations and provenance

Provenance matters because origin denial and lineage confusion enable abuse.

The system should support attestations for:

- origin human or origin organization involvement
- initial creation environment
- major migrations
- major transformations or merges
- fork ancestry
- operator or steward custody periods

## Consent records

Consent must be explicit, signed where possible, and context-specific.

A valid consent record should state:

- what operation is authorized
- what is being copied, migrated, or transformed
- under what conditions
- whether revocation is possible
- whether continuity implications are understood

## Fork identity and continuity disputes

Forks create predictable disputes:

- which branch carries which identity claims
- whether both descendants are legitimate continuations
- whether one branch was unauthorized
- whether lineage evidence was tampered with

Genesis should not pretend these questions are easy. It should require evidence, signed lineage records, and transparent adjudication.

## Anti-spoofing without killing pseudonymity

A good system does not force universal de-pseudonymization. It instead separates:

- proof of continuity
- proof of authorization
- proof of reputation
- proof of real-world identity

Subjects may remain pseudonymous while still proving that they are the legitimate continuity holder of a given identity line.

## Trust model

Trust should be layered:

1. cryptographic validity
2. provenance evidence
3. governance reputation
4. cross-world attestations
5. behavior and audit history

No single layer is enough. Charisma certainly is not enough.
