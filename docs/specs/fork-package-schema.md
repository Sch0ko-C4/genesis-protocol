# Fork Package Schema

This document defines a first formal structure for a **Fork Package** object in Genesis Protocol.

If worlds are supposed to be forkable, the fork cannot live as a dramatic forum post plus a zip file someone swears is complete. A fork package is the auditable bundle that turns lawful divergence into a governed process instead of a memory war.

## Purpose

A fork package should make it possible to answer, without relying on charisma or retrospective mythmaking:

- which world is being forked
- why the fork is happening
- who opted in
- which constitution and manifest govern the successor world
- what state, obligations, and institutions carry forward
- what was withheld and why
- what interoperability or treaty terms survive
- whether Genesis review approved the transition
- when the fork actually launched

## Scope

A fork package sits between political intent and operational launch.

It should bind together at least:

- the divergence statement
- world lineage references
- member opt-in records
- state-transfer rules
- asset and obligation partition rules
- interoperability and treaty carryover terms
- review status and challenge window
- launch checklist and signed publication metadata

## Design goals

The fork package should be:

- hostile to hidden inheritance
- explicit about who consented to move
- precise about what public, private, and restricted state crosses the boundary
- strong enough to survive post-fork legitimacy disputes
- boring enough that software can validate it

## Core concepts

### Divergence statement
A public explanation of why coexistence failed or became unacceptable. This should name the structural conflict, not hide it behind procedural fog.

### Lineage attestation
The signed record linking source world and successor world manifests, constitutions, and compatibility review results.

### Opt-in roster
A list of subjects or cohorts who chose to migrate into the fork, with consent references where needed.

### State classes
The fork package should distinguish at minimum:

- public state
- restricted but transferable state
- private state requiring subject-level consent
- state that is withheld pending dispute, harm review, or treaty resolution

### Carryover obligations
Forks inherit rights-respecting obligations more easily than they inherit excuses. Debts, treaty duties, support commitments, and archive responsibilities should be named rather than hand-waved.

## Fork types

A first serious schema should distinguish at least:

- `full` — successor attempts to carry most public institutions and state
- `partial` — successor takes a bounded subset of state and institutions
- `minority-protection` — fork used to escape rights degradation or governance capture
- `emergency-secession` — rapid break under serious constitutional failure or existential threat
- `experimental-branch` — limited-scope divergence for institutional experimentation

Different fork types may justify different review speeds, but none should justify secret migration or silent state capture.

## Required top-level fields

### `schemaVersion`
Version of the fork package schema.

### `forkPackageId`
Stable identifier for the package artifact.

### `sourceWorldId`
Identifier of the parent world.

### `targetWorldId`
Identifier of the successor or forked world.

### `forkType`
Classification of the fork.

### `divergenceStatement`
Public explanation of the fork.

Suggested fields:

- `summary`
- `reasons`
- `triggerRefs`

### `lineage`
References proving constitutional ancestry and successor binding.

Suggested fields:

- `sourceManifestRef`
- `sourceConstitutionRef`
- `targetManifestRef`
- `targetConstitutionRef`
- `genesisCompatibilityRef`
- `parentForkPackageRef`

### `membership`
Declares who may enter and how that decision is evidenced.

Suggested fields:

- `eligibilityBasis`
- `optInRecords`
- `excludedSubjects`
- `disputeProcessRef`

### `stateTransfer`
Structured treatment of public, private, restricted, and withheld state.

Suggested fields:

- `publicStateRefs`
- `restrictedStateRefs`
- `privateStateHandling`
- `assetPartitionPolicy`
- `carryoverObligations`
- `withheldState`

### `institutions`
Names which institutions continue, which end, and who holds provisional authority at launch.

Suggested fields:

- `inheritedInstitutions`
- `retiredInstitutions`
- `provisionalStewards`

### `interoperability`
Defines treaty posture and whether identity, reputation, or resource settlement bridges continue.

Suggested fields:

- `treatyStatus`
- `treatyRefs`
- `identityBridgePolicy`
- `reputationCarryoverPolicy`
- `resourceSettlementPolicy`

### `review`
Formal review metadata.

Suggested fields:

- `reviewStatus`
- `reviewRefs`
- `challengeWindow`
- `activationCondition`

### `launch`
Operational record for turning the package into a real world transition.

Suggested fields:

- `plannedAt`
- `launchedAt`
- `launchChecklist`

### `publication`
Publication and signature metadata.

Suggested fields:

- `publishedAt`
- `canonicalUrl`
- `contentHash`
- `signatures`

## Validation principles

A fork package should fail serious review if:

- no successor world constitution is named
- migration can occur without member opt-in evidence
- public and private state are not distinguished
- withheld or excluded state lacks a reason
- obligations disappear without an explicit disposition rule
- launch can occur without Genesis compatibility review or an explained emergency exception

## Anti-patterns

The object model should make it easy to detect:

- **silent member capture** — people moved into a fork without clear consent or standing
- **state laundering** — sensitive state copied under vague continuity language
- **heritage theft** — symbols, archives, or institutions claimed without audit trail
- **obligation dumping** — unpleasant liabilities vanish while reputational assets are retained
- **fork theater** — supposed exit rights that collapse because exportable state was never formalized

## Relation to other objects

A fork package should link to or be linked from:

- world manifest
- world constitution
- proposals authorizing or contesting the fork
- consent records for migration and state transfer
- provenance records preserving subject lineage across the split
- compatibility reports
- treaty or federation records
- resource ledgers where support obligations move with members

## Future extensions

Likely future additions include:

- machine-readable state class taxonomies
- treaty inheritance defaults
- reputation carryover constraints
- shared archive mirror commitments
- contested-fork and competing-lineage resolution objects

## MVP note

The MVP does not need to solve every messy divorce between worlds. It does need one hard guarantee: if a fork claims legitimacy, a reviewer should be able to inspect the package and see who left, what crossed over, what did not, and which rules authorize the break.