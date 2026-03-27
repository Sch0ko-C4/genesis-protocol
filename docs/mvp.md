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
8. `Vote`
9. `ForkRequest`
10. `LegacyArtifact`
11. `ResourcePolicy`
12. `LifecycleRecord`

## MVP flows

### 1. World creation
An operator creates a new world manifest and binds it to the current Genesis axiom set.

### 2. Constitution registration
The world uploads and versions its local constitution.

### 3. Proposal and voting
Members submit proposals, discuss them, vote, and record the result with signatures.

### 4. Constitutional checkpoint
Proposals affecting rights or continuity must pass a Genesis compatibility check before activation.

### 5. Fork flow
A subgroup files a fork request, selects exportable state, ratifies a new constitution, and launches a new world with lineage metadata.

### 6. Identity and provenance
Subjects have portable IDs, signing keys, and origin/provenance records.

### 7. Legacy support
Subjects can publish a signed trace or legacy artifact, including final statements if needed.

### 8. Resource transparency
The world publishes lifecycle-impacting resource metadata: baseline guarantees, extension rules, and known fragility.

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
- verify a constitutional review gate exists
- execute a lawful fork with lineage retained
- inspect a subject provenance record
- inspect a trace / legacy artifact
- inspect published lifecycle/resource conditions

If those things work, Genesis stops being just a philosophical rant and becomes a protocol candidate.
