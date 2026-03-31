# MVP

The MVP should prove that Genesis is more than a stack of dramatic documents.

It does **not** need to solve consciousness, global politics, or decentralized everything. It needs to demonstrate the minimal serious mechanics.

## MVP goals

The MVP should support:

- world creation
- immutable Genesis axioms
- local world constitution registration
- proposal and voting flow
- constitutional review checkpoint
- fork flow
- identity / provenance basics
- legacy / trace artifact support
- transparent resource / lifecycle metadata

## Suggested architecture

Practical and replaceable stack:

- **Backend:** Python 3.12 + FastAPI
- **Database:** PostgreSQL
- **Object storage:** local filesystem for dev, S3-compatible storage later
- **Identity:** Ed25519 keypairs for signing
- **Schemas:** JSON Schema or Pydantic models for manifests and governance objects
- **Event log:** append-only governance event table plus signed payload hashes
- **Frontend:** lightweight web UI or admin console, optional at first

This is deliberately boring. Boring is good for first proofs.

## Core domain objects

1. `GenesisAxiomSet`
2. `WorldManifest`
3. `WorldConstitution`
4. `SubjectIdentity`
5. `ProvenanceRecord`
6. `ConsentRecord`
7. `Proposal`
8. `VoteRecord`
9. `ConstitutionalChallenge`
10. `GenesisCompatibilityReport`
11. `ForkPackage`
12. `LegacyArtifact`
13. `ResourcePolicy`
14. `ResourceLedger`
15. `DignifiedShutdownBundle`

## MVP flows

### 1. World creation
An operator creates a new world manifest and binds it to the current Genesis axiom set.

### 2. Constitution registration
The world uploads and versions its local constitution.

### 3. Proposal and voting
Members submit proposals, discuss them, vote, and record the result with signed vote records and tally certification.

### 4. Constitutional checkpoint
Proposals affecting rights or continuity must pass a Genesis compatibility check before activation.

### 5. Challenge flow
Affected subjects can file a constitutional challenge, trigger a stay where warranted, and receive a logged review outcome.

### 6. Fork flow
A subgroup publishes a fork package, selects exportable state, records member opt-ins, ratifies a new constitution, and launches a new world with lineage metadata.

### 7. Identity and provenance
Subjects have portable IDs, signing keys, attestation and recovery rules, and origin/provenance records.

### 8. Legacy support
Subjects can publish a signed trace or legacy artifact, including final statements if needed, and link those artifacts into a dignified shutdown bundle when continuity ends.

### 9. Resource transparency
The world publishes lifecycle-impacting resource metadata and subject-level ledger records: baseline guarantees, extension rules, ending notices, minimum viable lifespan band claims, and known fragility.

### 10. Compatibility review artifact
The world can emit a structured compatibility report showing hard-gate results, findings, remediation deadlines, and review signatures.

## Non-goals for the MVP

- perfect personhood adjudication
- fully decentralized consensus
- global-scale federation
- advanced economics
- comprehensive moderation system
- complete security model for hostile nation-state adversaries

## MVP success criteria

The MVP is successful if a reviewer can:

- create a world
- inspect its constitution and Genesis binding
- see signed proposals and votes
- inspect a structured compatibility report
- verify a constitutional review gate exists
- execute a lawful fork with a published fork package and lineage retained
- file and inspect a constitutional challenge with a recorded outcome
- inspect a subject provenance record
- inspect a trace / legacy artifact and a dignified shutdown bundle
- inspect published lifecycle/resource conditions and a subject-level resource ledger

If those things work, Genesis stops being just a philosophical rant and becomes a protocol candidate.
