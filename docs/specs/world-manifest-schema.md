# World Manifest Schema

This document defines a first formal structure for a **World Manifest**.

A world manifest is the minimum machine-readable declaration of what a world is, what it claims, what it depends on, and how it binds itself to Genesis.

It is not the full constitution. It is the public operating header.

## Purpose

A serious governance system needs a single canonical object that answers basic questions without requiring archaeology across random markdown files.

A world manifest should make it possible to determine:

- what this world is called
- which Genesis axiom set it binds to
- who operates it
- which constitution governs it
- what its lifecycle/resource conditions are
- what its resilience claims are
- whether it is original or forked
- how identities, provenance, and signatures work

## Design goals

The schema should be:

- human-readable
- machine-parseable
- versioned
- signed
- portable across implementations
- minimal enough for MVP use
- extensible enough for federation later

## Required top-level fields

### `schemaVersion`
Version of the manifest schema itself.

Example: `"1.0.0"`

### `manifestId`
Stable identifier for this manifest object.

### `world`
Core descriptive metadata about the world.

Suggested fields:

- `worldId`
- `slug`
- `name`
- `summary`
- `status` (`draft`, `active`, `suspended`, `archived`)
- `createdAt`
- `updatedAt`

### `genesisBinding`
Declares which Genesis layer this world inherits.

Suggested fields:

- `protocolId`
- `axiomSetId`
- `bindingMode` (`strict`, `strict-with-local-extension`)
- `compatibilityStatus` (`self-asserted`, `reviewed`, `provisional`, `revoked`)
- `compatibilityEvidence`

### `lineage`
Explains whether the world is original, derived, or forked.

Suggested fields:

- `worldType` (`origin`, `fork`, `test`, `simulation`)
- `parentWorldId`
- `forkReason`
- `forkedAt`
- `inheritancePolicyRef`

### `jurisdiction`
Points to the world’s governing rules.

Suggested fields:

- `constitutionRef`
- `governanceModelRef`
- `membershipPolicyRef`
- `resourcePolicyRef`
- `disputeResolutionRef`

### `operators`
Identifies accountable human or non-human stewards.

Suggested fields:

- `stewards`
- `maintainers`
- `constitutionalReviewBody`
- `emergencyContacts`

Each listed actor should be represented by portable identifiers, not vague names in prose.

### `identity`
Describes subject identity and signing rules.

Suggested fields:

- `subjectIdMethod`
- `signingScheme`
- `attestationPolicy`
- `pseudonymitySupport`
- `keyRotationPolicyRef`

### `lifecycle`
Declares the published conditions of continuity and ending.

Suggested fields:

- `baselineSupportLevel`
- `resourceDisclosureRef`
- `endingProtocolRef`
- `legacyArtifactPolicyRef`
- `knownFragilityStatement`

### `infrastructure`
Declares the real substrate beneath the rights claims.

Suggested fields:

- `hostingModel` (`single-operator`, `multi-operator`, `cloud-portable`, `hybrid`, `distributed`)
- `storageModel`
- `eventLogModel`
- `resilienceTier`
- `operatorCount`
- `knownDependencies`
- `statusPage`

### `interoperability`
Declares how this world relates to other worlds.

Suggested fields:

- `federationMode`
- `supportedProtocols`
- `exportFormats`
- `importPolicies`
- `treatyRefs`

### `publication`
Specifies how the manifest is published and authenticated.

Suggested fields:

- `publishedAt`
- `signatures`
- `previousManifestHash`
- `canonicalUrl`

## Field semantics that matter

### Resilience claims are normative, not decorative

If a manifest says `resilienceTier: "high"`, that claim should be auditable against actual infrastructure and operator arrangements.

### Compatibility status is not self-legitimating

A world may assert compatibility, but Genesis review bodies or external auditors may challenge or revoke that claim.

### Lineage is constitutional metadata

Fork lineage is not trivia. It affects:

- inherited obligations
- migration expectations
- dispute records
- provenance continuity
- legitimacy claims

### Known fragility must be honest

If a world depends on a single machine, a single benefactor, or a single cryptographic custodian, the manifest should say so plainly.

## Minimal MVP requirements

An MVP implementation should require at minimum:

- `schemaVersion`
- `manifestId`
- `world.worldId`
- `world.name`
- `world.status`
- `genesisBinding.protocolId`
- `genesisBinding.axiomSetId`
- `jurisdiction.constitutionRef`
- `identity.signingScheme`
- `lifecycle.resourceDisclosureRef`
- `lifecycle.endingProtocolRef`
- `infrastructure.hostingModel`
- `infrastructure.resilienceTier`
- `publication.publishedAt`
- at least one signature

## Validation principles

A manifest should fail validation if:

- required Genesis binding data is absent
- infrastructure claims are structurally incomplete
- no publication signature is present
- lineage fields contradict each other
- the constitution reference is missing
- resource/lifecycle disclosure is absent

## Schema evolution rules

The manifest schema should support additive evolution.

Breaking changes should require a major schema version increment. Older manifests should remain inspectable even if not writable by new tools.

## Future extensions

Likely future fields include:

- treaty registry references
- machine-readable rights impact summaries
- external audit attestations
- continuity insurance / redundancy commitments
- emergency isolation and restoration procedures
- world-specific economy descriptors

## Relation to other objects

The world manifest should be treated as the public index object linking out to:

- local constitution
- governance objects
- resource policy
- identity policy
- provenance rules
- legacy artifact policy
- fork package metadata

It is the header, not the whole civilization.
