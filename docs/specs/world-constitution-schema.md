# World Constitution Schema

This document defines a first formal structure for a **Local World Constitution**.

Genesis sets the floor. The local constitution defines the actual governing order of a specific world above that floor.

If the manifest is the operating header, the constitution is the local rulebook with constitutional force.

## Purpose

A world constitution should answer, in a structured way:

- what powers exist in the world
- how those powers are limited
- who may govern
- how proposals become law
- how rights review works locally
- how emergencies are constrained
- how members leave
- how forks happen
- how amendments happen without quietly gutting core guarantees

## Design goals

The schema should support constitutions that are:

- explicit
- versioned
- reviewable
- citeable by article/section
- inspectable by machines and humans
- linked to governance workflows and event logs

## Required top-level fields

### `schemaVersion`
Version of the constitution schema.

### `constitutionId`
Stable identifier for this constitution artifact.

### `worldId`
Identifier of the governed world.

### `title`
Human-readable title.

### `version`
Constitution version number or semantic version.

### `status`
Suggested values: `draft`, `ratified`, `superseded`, `archived`.

### `ratification`
Metadata on how this constitution acquired legitimacy.

Suggested fields:

- `ratifiedAt`
- `ratificationMethod`
- `ratificationRecordRef`
- `effectiveAt`

### `genesisAcknowledgement`
Explicit statement that the constitution is subordinate to a specific Genesis axiom set.

Suggested fields:

- `protocolId`
- `axiomSetId`
- `subordinationClause`

### `preamble`
Optional but useful framing text.

### `articles`
Ordered list of constitutional articles.

Each article should support:

- `articleId`
- `title`
- `summary`
- `normativeText`
- `changeClass`

Suggested `changeClass` values:

- `ordinary-constitutional`
- `supermajority-required`
- `derived-genesis-bound`
- `emergency-restricted`

### `institutions`
Defines governance bodies and roles.

Each institution should support:

- `institutionId`
- `name`
- `type`
- `selectionMethod`
- `termRules`
- `powers`
- `constraints`
- `reviewability`

### `rightsReview`
Describes the local constitutional review system.

Suggested fields:

- `reviewBodyRef`
- `reviewTriggers`
- `challengeProcess`
- `injunctionPower`
- `appealRoute`

### `proposalProcess`
Defines how formal proposals are introduced and decided.

Suggested fields:

- `proposalTypes`
- `submissionRequirements`
- `deliberationWindow`
- `votingRules`
- `publicationRules`
- `challengeWindow`

### `membership`
Defines who may join, remain, or lose standing in the world.

Suggested fields:

- `membershipClasses`
- `admissionRules`
- `suspensionRules`
- `expulsionRules`
- `appealProcess`

### `emergencyPowers`
Defines exceptional authority and its limits.

Suggested fields:

- `triggerConditions`
- `permittedActions`
- `forbiddenActions`
- `maxDuration`
- `reviewDeadline`
- `publicationRequirement`

Emergency powers should never override Genesis-level prohibitions.

### `resourceGovernance`
Defines how local resource policy is linked constitutionally.

Suggested fields:

- `baselineGuaranteeClause`
- `scarcityRuleRef`
- `extensionRuleRef`
- `transparencyRequirement`

### `exitAndFork`
Defines the lawful path for exit, migration, and fork.

Suggested fields:

- `individualExitRights`
- `groupExitRights`
- `forkTriggerConditions`
- `forkVoteRules`
- `stateExportRules`
- `lineageRequirements`
- `disputeProcess`

### `amendmentRules`
Defines how the constitution may be changed.

Suggested fields:

- `amendmentInitiation`
- `reviewRequirements`
- `thresholds`
- `delayBeforeEffect`
- `protectedClauses`

### `publication`
Defines how the constitution is published and authenticated.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `signatures`
- `supersedes`

## Structuring articles

A constitution should be citeable at fine granularity.

For MVP purposes, each article should allow optional nested `sections[]` with:

- `sectionId`
- `heading`
- `normativeText`

This matters because proposals and challenges should cite exact provisions, not hand-wave around them.

## Minimum constitutional contents

A world constitution should fail serious review if it lacks explicit coverage for:

- governance authority and limits
- rights review
- membership rules
- emergency powers
- proposal and decision process
- amendment process
- exit rights
- fork pathway
- publication and auditability

## Validation principles

A constitution should fail validation if:

- it omits Genesis acknowledgement
- it grants emergency power without limits
- it provides no challenge process for rights-impacting decisions
- it defines no exit or fork procedure
- it cannot be tied to a ratification record
- it contains unsigned or unauthenticated publication metadata

## Constitutional anti-patterns

The schema should make it easy to detect obvious failures such as:

- unbounded steward discretion
- rights language with no enforcement route
- emergency clauses that quietly swallow ordinary law
- exit rights that vanish in practice
- amendment rules that allow instant capture

## Schema evolution rules

Constitution schemas should remain backward-readable. A world may adopt richer schema versions later, but older constitutions should remain reviewable and historically intelligible.

## Future extensions

Likely future additions include:

- machine-readable rights impact tags per article
- formal amendment lineage graphs
- treaty and federation clauses
- sandbox / quarantine constitutional modules
- constitutional sunset clauses for experimental institutions

## Relation to other objects

The world constitution should link to or be linked from:

- world manifest
- proposal records
- vote records
- constitutional challenge records
- steward action logs
- fork notices
- resource policy documents

A world without a structured constitution may still have rules. It does not yet have serious constitutional architecture.
