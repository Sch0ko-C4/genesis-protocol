# Contributing

Genesis Protocol is not a casual idea dump. Treat contributions as constitutional, governance, and systems work that may shape a serious protocol.

## Principles

- Contribute at the level of claims, mechanisms, and consequences.
- Make power explicit. Name who can decide, veto, fork, delete, override, or exit.
- Separate moral preference from protocol requirement.
- Prefer precise language over inspirational language.
- Show failure modes, tradeoffs, and abuse cases.
- Do not hide unresolved questions behind broad terms such as "alignment", "safety", or "community".
- Keep scope disciplined. A strong narrow contribution is better than a vague total theory.

## What to open

Open an issue when the work is not yet ready for a direct pull request or when the repository needs structured debate before text changes land.

### Philosophy issues

Open a philosophy issue when the question is about first principles, legitimacy, rights, personhood, dignity thresholds, or non-negotiable constraints.

Include:

- the exact claim or tension
- why it matters to Genesis compatibility
- which axioms or concepts it touches
- what would change if the claim is accepted or rejected

### Governance issues

Open a governance issue when the subject is amendment flow, review, voting, stewardship, constitutional challenge, minority protection, fork legitimacy, or audit rules.

Use the `governance-rfc.md` template when proposing a concrete governance mechanism or rule change.

### Architecture issues

Open an architecture issue when the topic is manifests, identity, provenance, event logs, interfaces, portability, or other protocol and system design questions.

If the architecture change is implementation-shaped and bounded, use the `mvp-task.md` template. If it changes governance semantics, use the RFC template instead.

### Research issues

Open a research issue when the answer is not yet known and the repository needs analysis, comparison, evidence, or formal framing before design can proceed.

Use the `research-question.md` template for unresolved empirical, conceptual, or comparative questions.

## Writing proposals and RFCs

RFCs are decision documents. They are not brainstorming notes.

Every RFC should state:

1. **Problem** — the concrete protocol or governance problem being solved.
2. **Why now** — why the repository needs a decision at this stage.
3. **Proposal** — the mechanism, rule, or specification change in direct terms.
4. **Invariants** — what must remain true if the proposal is accepted.
5. **Failure modes** — how the proposal can be abused, captured, or misapplied.
6. **Alternatives** — the strongest rejected options and why they fail.
7. **Impact** — which docs, concepts, schemas, or workflows would change.
8. **Open questions** — the remaining unknowns that block finalization.

RFC expectations:

- Prefer numbered rules, states, and flows.
- Define terms that carry governance weight.
- Distinguish mandatory rules from recommendations.
- Be explicit about who has authority at each step.
- If the proposal affects rights, continuity, deletion, forking, or provenance, say so directly.
- If the proposal cannot yet be implemented or tested, state what evidence is still missing.

## Branch and PR expectations

- Work from a dedicated branch. Do not open broad mixed-purpose PRs.
- Keep one PR focused on one document set, one mechanism, or one implementation slice.
- Link the relevant issue or RFC in the PR description.
- Explain the reasoning, not just the edits.
- Note any changed assumptions, terminology, or governance consequences.
- Update adjacent docs only when required for consistency.
- Do not rewrite unrelated files for style.

PRs should be easy to review as arguments:

- what problem exists
- what changed
- why this change is the right one
- what remains unresolved

## Review standard

Expect pushback on ambiguity, hidden assumptions, weak definitions, category mistakes, and governance theater. That is normal for this repository.

A contribution is ready when it is specific enough to challenge, precise enough to implement, and honest enough to expose its own limits.
