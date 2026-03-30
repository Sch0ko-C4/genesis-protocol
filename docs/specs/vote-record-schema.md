# Vote Record Schema

This document defines a first formal structure for a **Vote Record** object in Genesis Protocol.

If proposals are supposed to become law through auditable legitimacy rather than rumors and moderator screenshots, then votes need first-class structure.

## Purpose

A vote record should make it possible to answer:

- which proposal or constitutional question was decided
- who was eligible to vote
- which voting method applied
- whether the ballot was public, pseudonymous, or secrecy-protected
- how many ballots were cast and how they were tallied
- whether quorum and threshold rules were actually met
- who certified the result
- when challenge windows open and close

## Design goals

The vote object should be:

- compatible with multiple voting models
- explicit about electorate and threshold rules
- suitable for signed public voting in the MVP
- extensible to secret or privacy-preserving ballots later
- hostile to ambiguous result certification

## Required top-level fields

### `schemaVersion`
Version of the vote schema.

### `voteId`
Stable identifier for this vote record.

### `worldId`
Identifier of the world in which the vote occurred.

### `proposalId`
Identifier of the proposal, amendment, ratification, or fork question being decided.

### `decisionBody`
The institution or electorate conducting the vote.

Suggested fields:

- `bodyId`
- `name`
- `decisionClass`

### `votingMethod`
How the vote is conducted.

Suggested fields:

- `ballotVisibility` (`public`, `pseudonymous`, `secret-with-proof`)
- `electorateRule`
- `quorumRule`
- `thresholdRule`
- `weightingRule`

### `electorateSnapshot`
The counted electorate at the time voting opened.

Suggested fields:

- `eligibleCount`
- `snapshotRef`
- `exclusionNotes`

### `options`
Allowed choices.

Each option should support:

- `optionId`
- `label`
- `description`

### `ballots`
Recorded ballots or ballot references.

Each ballot entry should support:

- `voterRef`
- `optionId`
- `weight`
- `castAt`
- `ballotProof`
- `signature`

### `tally`
Tally results.

Suggested fields:

- `optionTallies`
- `abstentions`
- `invalidBallots`
- `totalCast`
- `quorumMet`
- `thresholdMet`
- `certifiedBy`
- `certifiedAt`

### `outcome`
Suggested values:

- `accepted`
- `rejected`
- `tied`
- `void`
- `pending-certification`

### `openedAt`
When voting opened.

### `closedAt`
When voting closed.

### `challengeWindow`
How long the result remains challengeable before activation or finality.

### `publication`
Publication and signature metadata.

## Public vs private voting

The MVP should prefer public or pseudonymous signed voting for rights-impacting governance. It is simpler, easier to audit, and much harder to falsify with procedural theater.

Later systems may support secrecy-preserving ballots, but they should still preserve:

- auditable electorate boundaries
- cryptographic ballot inclusion proofs
- verifiable tally correctness
- challenge procedures for exclusion or manipulation

Secrecy without proof is just opacity wearing a democratic hat.

## Validation principles

A vote record should fail serious review if:

- no proposal or decision target is identified
- electorate rules are missing
- options are ambiguous
- tally rules do not reveal whether quorum or threshold were met
- certification is absent
- the result activates without a declared challenge window where one is required

## Anti-patterns

The schema should make it easy to detect:

- **electorate drift** — eligibility changed during voting with no snapshot record
- **threshold laundering** — a result is announced without stating the actual success rule
- **ballot opacity theater** — ballots are hidden but no proof system exists
- **certifier capture** — the same unchecked actor controls tally, certification, and challenge review
- **fork suppression by procedure** — a fork vote is technically offered but the electorate or threshold is manipulated to make lawful exit impossible

## Relation to other objects

A vote record should link to or be linked from:

- proposal objects
- constitutions and ratification records
- constitutional challenges
- steward action records
- fork packages when the vote authorizes divergence

## MVP note

The MVP does not need parliamentary baroque nonsense. It needs a signed record that clearly shows who could vote, what they voted on, how the tally worked, and why the outcome is legitimate.