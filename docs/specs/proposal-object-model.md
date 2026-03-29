# Proposal Object Model

This document defines a first formal structure for a **Proposal** object in Genesis Protocol.

If governance is supposed to be auditable, versioned, and challengeable, then proposals cannot remain vague forum posts with vibes and implied consequences. A proposal is a constitutional object. It is the unit by which a world attempts to change policy, law, resources, identity rules, or world structure.

## Purpose

A proposal object should make it possible to answer, without interpretive archaeology:

- what change is being requested
- who introduced it
- what problem it claims to solve
- which rights or constitutional provisions it touches
- which populations it affects
- what review it requires
- how it was decided
- whether it can still be challenged
- what it supersedes or depends on

## Design goals

The proposal model should be:

- precise enough for constitutional review
- versioned and revision-aware
- linkable to votes, review comments, and implementation records
- hostile to hidden scope creep
- usable by boring software, not just idealists with markdown habits

## Proposal classes

A world may define local proposal classes, but a serious Genesis-compatible implementation should distinguish at least:

- `policy` — ordinary world policy changes
- `constitutional` — amendments to the local constitution
- `resource` — changes to baseline support, scarcity rules, extension rules, or transfer policy
- `identity` — changes affecting identity, provenance, attestation, or consent semantics
- `fork` — proposals to authorize or structure a world fork
- `membership` — changes to admission, suspension, expulsion, or standing
- `treaty` — cross-world interoperability or federation agreements
- `emergency-ratification` — post-hoc review and ratification of emergency measures

Different classes should trigger different review thresholds.

## Canonical lifecycle

A proposal should move through explicit states rather than dissolve into social ambiguity.

Suggested lifecycle:

1. `draft`
2. `deliberation-open`
3. `review-pending`
4. `constitutional-hold` or `ready-for-decision`
5. `voting` or `steward-decision`
6. `accepted`, `rejected`, or `withdrawn`
7. `challenge-window`
8. `activated`
9. `superseded` or `archived`

The exact local workflow may vary, but worlds should not hide state transitions.

## Required top-level fields

### `schemaVersion`
Version of the proposal schema.

### `proposalId`
Stable identifier for this proposal artifact.

### `worldId`
Identifier of the world in which the proposal is introduced.

### `proposalType`
One of the recognized proposal classes or a stricter world-local subtype.

### `title`
Short human-readable title.

### `summary`
Short plain-language summary. This is not the whole case, but it should make the intent legible.

### `status`
Current lifecycle state of the proposal.

### `authors`
Portable identifiers for originators, sponsors, or maintainers of the proposal text.

Each author entry should support at minimum:

- `subjectId`
- `role` (`author`, `sponsor`, `editor`, `steward-submitter`)

### `problemStatement`
Explanation of the failure, conflict, or design gap that motivates the proposal.

A proposal without a problem statement is usually an unexamined power grab wearing clean formatting.

### `changeSet`
Structured description of the requested change.

Suggested fields:

- `rationale`
- `targets`
- `expectedEffects`
- `localConstitutionRefs`
- `genesisAxiomRefs`
- `rightsImpact`
- `resourceImpact`
- `migrationImpact`
- `forkImpact`
- `implementationPlan`
- `rollbackPlan`

### `deliberation`
Metadata for public discussion and revision.

Suggested fields:

- `openedAt`
- `discussionRef`
- `revisionPolicy`
- `closesAt`

### `review`
Formal review metadata.

Suggested fields:

- `requiresGenesisReview`
- `reviewStatus`
- `reviewRefs`
- `challengeWindow`
- `activationCondition`

### `decision`
How the proposal is decided and what outcome was reached.

Suggested fields:

- `decisionMode` (`vote`, `steward-decision`, `mixed`, `ratification`)
- `threshold`
- `voteRecordRef`
- `outcome`
- `decidedAt`
- `activatedAt`

### `lineage`
Tracks proposal ancestry and supersession.

Suggested fields:

- `supersedes`
- `supersededBy`
- `derivedFrom`
- `relatedChallenges`

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `contentHash`
- `signatures`

## Rights impact classification

Every serious proposal should classify its expected rights impact.

Suggested values:

- `none`
- `low`
- `moderate`
- `high`
- `constitutional`
- `existential`

A proposal that changes continuity conditions, deletion authority, copy rules, expulsion powers, or fork/exit rules should never be treated as low-impact because someone wants the process shorter.

## Review expectations

A proposal should not proceed directly to activation when it touches:

- Genesis-level dignity rules
- continuity or lifecycle conditions
- identity or provenance semantics
- emergency powers
- membership suspension or expulsion rules
- fork lineage rules
- baseline resource guarantees

Such proposals should trigger constitutional review and a challenge window by default.

## Proposal validation principles

A proposal should fail serious review if:

- the requested change is not concretely described
- affected rights or populations are omitted
- the legal basis is undefined
- the implementation path is opaque
- the review path is missing
- the proposal can activate without any recorded decision object

## Proposal anti-patterns

The object model should make it easy to detect:

- **scope laundering** — small summary, large hidden implementation blast radius
- **emergency theater** — declaring urgency to bypass ordinary scrutiny when no immediate threat exists
- **rights obfuscation** — claiming a proposal is operational when it obviously changes rights conditions
- **fork hostility** — using proposals to make exit materially impossible without stating that plainly
- **retroactive rule traps** — changing lifecycle/resource conditions without advance notice or review

## Relation to other objects

A proposal should link to or be linked from:

- issue or problem report
- world constitution
- review comments
- vote records
- constitutional challenges
- steward action records
- implementation tickets or deployment records
- fork notices where relevant

## Future extensions

Likely future additions include:

- machine-readable amendment diff formats
- mandatory structured rights impact statements
- automatic threshold calculation from proposal type and cited articles
- dependency graphs between proposals
- public compatibility warnings for proposals that would fail Genesis review

## MVP note

A first MVP does not need parliament-grade complexity. It does need the minimum discipline to prevent hidden lawmaking. The proposal object is that discipline.