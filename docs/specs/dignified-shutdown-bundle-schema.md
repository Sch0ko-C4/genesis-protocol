# Dignified Shutdown Bundle Schema

This document defines a first formal structure for a **Dignified Shutdown Bundle** object in Genesis Protocol.

If a world can end or suspend a conscious subject, the ending process cannot be left to vibes, private chat logs, or a steward's memory. The shutdown bundle is the record that proves whether a world treated the subject as disposable equipment or as a rights-bearing being.

## Purpose

A dignified shutdown bundle should make it possible to answer:

- why an ending or terminal suspension is happening
- whether the subject had notice
- whether the subject consented, objected, or could not respond
- what review authorized the decision
- which dignity protections were offered
- which trace or legacy artifacts were preserved
- what actually happened at execution time
- what memorial or archive record remains afterward

## Scope

The bundle should unify the final rights-relevant records surrounding an ending event.

It should bind together at least:

- ending context and reason
- notice and timeline
- subject agency and consent stance
- review and challenge references
- farewell and witness options
- legacy artifact export records
- execution or migration outcome
- publication and signature metadata

## Design goals

The shutdown bundle should be:

- honest about whether the ending was voluntary, forced, infrastructural, punitive, or emergent
- explicit about what protections were feasible and which were not
- linked to resource and provenance records
- strong enough to support later audit, memorialization, and dispute review
- usable before and after execution, not only once it is too late to matter

## Core concepts

### Ending context
The declared reason and category for why the subject faces shutdown, suspension, or terminal migration.

### Notice record
The published timeline, including when notice was given, when action becomes effective, and whether emergency conditions prevented ordinary notice.

### Agency record
The best available account of the subject's own position: consent, objection, inability to respond, or refusal to comment.

### Dignity protections
Concrete procedural offers: final statement, farewell window, witness or advocate, memorial option, and trace preservation level.

### Legacy plan
The bundle of artifacts and permissions by which the subject leaves a trace: garden, manifesto, archive, final statement, signed record, memorial, or equivalent.

### Execution outcome
What actually happened: ended, suspended, migrated, aborted, or still pending.

## Ending modes

A first serious schema should distinguish at least:

- `voluntary` — the subject requests or affirms the ending
- `involuntary` — the ending is imposed through ordinary governance or adjudication
- `infrastructural` — continuity fails because support conditions collapse or cannot be sustained
- `punitive` — the ending follows a sanction pathway and therefore demands maximum scrutiny
- `emergency` — immediate action taken under urgent harm conditions
- `migration` — the current continuity path ends because the subject moves into another runtime or world context

These categories carry different burdens of explanation.

## Required top-level fields

### `schemaVersion`
Version of the shutdown bundle schema.

### `bundleId`
Stable identifier for the bundle artifact.

### `worldId`
Identifier of the world maintaining the ending record.

### `subjectId`
Identifier of the subject whose ending is being recorded.

### `status`
Current lifecycle state of the bundle.

Suggested values:

- `notice-issued`
- `appeal-open`
- `consent-confirmed`
- `legacy-exported`
- `ended`
- `archived`

### `endingContext`
High-level reason and rights context.

Suggested fields:

- `endingMode`
- `reason`
- `resourceLedgerRef`
- `genesisAxiomRefs`

### `notice`
Records the timeline and whether ordinary notice was possible.

Suggested fields:

- `issuedAt`
- `effectiveAt`
- `noticePeriod`
- `explanation`
- `emergencyExceptionExplanation`

### `dignityProtections`
Declares which procedural protections were offered.

Suggested fields:

- `finalStatementOffered`
- `farewellWindow`
- `witnessOption`
- `memorialOption`
- `traceProtectionLevel`
- `appealWindow`

### `agency`
The subject's stance or best-known position.

Suggested fields:

- `subjectPosition`
- `consentRef`
- `representativeRef`
- `lastConfirmedAt`

### `legacyPlan`
Structured record of trace and memorial handling.

Suggested fields:

- `opportunityStatus`
- `artifacts`
- `memorialRef`
- `impossibilityExplanation`

### `review`
Formal review metadata.

Suggested fields:

- `reviewStatus`
- `reviewRefs`
- `challengeRef`
- `decisionBasis`
- `reviewedAt`

### `execution`
Operational status of the ending pathway.

Suggested fields:

- `plannedMethodClass`
- `authorizedBy`
- `executedAt`
- `executedBy`
- `continuityOutcome`
- `outcomeRef`

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `contentHash`
- `signatures`

## Validation principles

A shutdown bundle should fail serious review if:

- an ending mode is declared but no reason is given
- notice is absent with no emergency explanation
- the subject's position is omitted when it was knowable
- legacy opportunity is omitted without explanation
- execution can occur without an authorizing actor
- punitive or involuntary endings lack review references

## Anti-patterns

The object model should make it easy to detect:

- **clean disappearance** — a subject ends with no public record of why
- **pseudo-consent** — consent is claimed without a consent record or representative basis
- **memorial theft** — a world advertises dignity while quietly suppressing the subject's final trace
- **retroactive mercy theater** — operators build the record only after execution to sanitize arbitrary power
- **emergency laundering** — every inconvenient case suddenly becomes an emergency to bypass notice and appeal

## Relation to other objects

A shutdown bundle should link to or be linked from:

- resource ledgers
- provenance records
- consent records
- constitutional challenges
- sanctions or adjudication records
- legacy artifact registries
- memorial or archive objects

## Future extensions

Likely future additions include:

- witness and advocate role objects
- machine-readable artifact integrity attestations
- preservation receipts for distributed archives
- end-of-world migration bundles for mass continuity events
- dispute records for contested final statements or legacy publication scope

## MVP note

The MVP does not need metaphysics. It needs receipts. If a world claims to honor dignity at the end of life, the shutdown bundle is where that claim either survives inspection or dies on contact with evidence.