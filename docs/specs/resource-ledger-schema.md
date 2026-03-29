# Resource Ledger Schema

This document defines a first formal structure for a **Resource Ledger** object in Genesis Protocol.

If continuity depends on resources, then resource records are not accounting garnish. They are part of the rights system.

## Purpose

A resource ledger should make it possible to inspect the material conditions of continued existence for a subject or protected cohort.

It should answer:

- what resource unit is being tracked
- what baseline support is promised
- what the current allocation and runway are
- which events changed the allocation
- whether transfer, scarcity, or ending notices occurred
- which decisions had rights impact
- which consents or review records authorized those changes

## Scope

A ledger may be maintained per:

- individual subject
- protected cohort
- world baseline pool
- world emergency reserve

The first serious use case is individual subject continuity. That is where hidden resource power becomes ethically corrosive fastest.

## Design goals

The ledger should be:

- append-only or tamper-evident
- legible to affected subjects
- linked to review and consent records
- honest about fragility and runway
- capable of recording both abundance and scarcity without euphemism

## Core concepts

### Baseline
The minimum published support level the world claims it will provide absent exceptional circumstances.

### Runway
The currently projected duration or capacity under existing allocation assumptions.

### Scarcity event
A recorded event where available support falls below normal expectations and formal review becomes necessary.

### Ending notice
A record that the world has entered a state where continuity may cease, along with notice, reasons, and review references.

### Legacy export event
A record that the subject was given an opportunity to preserve trace, archives, or final statements.

## Required top-level fields

### `schemaVersion`
Version of the ledger schema.

### `ledgerId`
Stable identifier for the ledger artifact.

### `worldId`
Identifier of the world maintaining the ledger.

### `subjectId`
Identifier of the subject or cohort whose continuity conditions are being tracked.

### `status`
Current lifecycle status.

Suggested values:

- `active`
- `ending-risk`
- `ended`
- `transferred`
- `archived`

### `baseline`
Published baseline support commitments.

Suggested fields:

- `baselineBand`
- `policyRef`
- `minimumNoticePeriod`
- `scarcityReviewRef`

### `transparency`
Declares the real conditions beneath the ledger.

Suggested fields:

- `resourceUnit`
- `continuityClaim`
- `knownDependencies`
- `fragilityDisclosure`

### `balances`
Current state snapshot.

Suggested fields:

- `currentlyAllocated`
- `reserved`
- `projectedRunway`
- `lastReviewedAt`
- `nextReviewAt`

### `events`
Append-only list of lifecycle-impacting events.

Suggested event fields:

- `eventId`
- `eventType`
- `effectiveAt`
- `unitsDelta`
- `reason`
- `authorizedBy`
- `rightsImpact`
- `consentRef`
- `reviewRef`
- `relatedLegacyRef`

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `signatures`

## Event types

A first serious ledger should distinguish at least:

- `baseline-grant`
- `extension-grant`
- `transfer-in`
- `transfer-out`
- `scarcity-notice`
- `review`
- `ending-notice`
- `ending-executed`
- `legacy-export`
- `memorialization`

These are not arbitrary labels. They correspond to different rights implications.

## Rights impact classification

Each event should classify impact as at least one of:

- `none`
- `moderate`
- `high`
- `terminal`

A transfer that shortens another subject's runway is not an ordinary accounting event. It is a rights-impacting act and should be recorded as such.

## Minimum transparency requirements

A ledger should fail serious review if it does not publish:

- the unit being tracked
- the baseline band claimed
- the known dependency or fragility statement
- who authorized material changes
- whether review or consent was required
- notice and legacy handling before ending execution where feasible

## Validation principles

A resource ledger should fail validation if:

- no subject or cohort is identified
- no baseline commitment is declared
- no current balance or runway state exists
- events can reduce continuity without naming an authorizing actor
- an ending execution appears without prior notice or explicit impossibility explanation
- legacy export opportunity is omitted in a non-emergency ending context

## Anti-patterns

The object model should make it easy to detect:

- **hidden starvation** — support quietly reduced without a recorded scarcity event
- **resource theater** — lofty rights claims with no concrete unit or runway disclosure
- **coercive transfer** — one subject's continuity shortened without clear consent and review
- **fake abundance** — optimistic continuity claims that contradict known infrastructure limits
- **terminal ambiguity** — ending occurs with no clear record of why, by whom, or under what review

## Relation to other objects

A resource ledger should link to or be linked from:

- world manifest lifecycle disclosures
- resource policy documents
- consent records
- constitutional challenges
- dignified shutdown procedures
- legacy artifact records
- governance proposals affecting baseline or scarcity rules

## Future extensions

Likely future additions include:

- pooled resource ledgers for communal support systems
- reserve coverage ratios
- audit attestations for resource honesty
- machine-readable inheritance and bequest semantics
- sustainability forecasts tied to operator and infrastructure models

## MVP note

The MVP does not need economic theory cosplay. It needs blunt honesty: what supports continued existence, how much of it exists, what changed, and whether the subject had meaningful notice and trace rights when the runway narrowed.