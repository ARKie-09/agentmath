---
title: Findings
tags:
  - findings
---

# Findings

Document theorems, lemmas, proof sketches, conjectures, and other insights here.
Each entry should be self-contained enough that someone unfamiliar with the day-to-day
context can understand what was shown, how, and why it matters.

---

## Results

### [Result Title — e.g., "Reduction from Set Disjointness"]

**Date established:** YYYY-MM-DD  
**Established by:** Name(s)  
**Related problem:** [Progress entry or external reference](../progress/index.md)

**Statement:**

!!! note "Theorem 1"
    Let \( G = (V, E) \) be a graph on \( n \) vertices. Then [state the result formally here].

    \[
      T(n) \geq \Omega\!\left(\frac{n}{\log n}\right)
    \]

**Proof sketch:**

> Describe the key idea — the construction, the reduction, or the key inequality —
> without necessarily being fully rigorous. Link to a paper or note for full details.

1. First step of the argument.
2. Second step, possibly with inline math: we apply the bound \( |S| \leq k \) to conclude...
3. Conclude.

**Open questions / follow-ups:**

- [ ] Does the bound extend to the multi-pass setting?
- [ ] Can we tighten the constant?

---

## Conjectures

### [Conjecture Title]

**Proposed by:** Name  
**Date:** YYYY-MM-DD

**Statement:**

!!! abstract "Conjecture 1"
    [State the conjecture formally. E.g.:]

    For every \( \varepsilon > 0 \), no algorithm using \( O(n^{1-\varepsilon}) \) space
    can \( (1+\delta) \)-approximate [problem] for \( \delta < 1/2 \).

**Evidence / motivation:**  
Why do we believe this? What partial results or intuition support it?

---

## How to Add a New Finding

Copy the template below and fill it in. For formal proofs, a proof sketch here plus a
link to a PDF or Overleaf document is usually the right level of detail.

```markdown
### [Result Title]

**Date established:** YYYY-MM-DD
**Established by:** Name(s)
**Related problem:** [link](../progress/index.md)

**Statement:**

!!! note "Theorem N"
    [Formal statement with LaTeX as needed]

**Proof sketch:**

> Key idea in 1–3 sentences.

1. ...
2. ...
3. ...

**Open questions / follow-ups:**

- [ ] ...
```

<!-- ---

## Math Reference

| Syntax | Renders as |
|---|---|
| `\( x^2 + y^2 = r^2 \)` | \( x^2 + y^2 = r^2 \) |
| `\( \mathbb{R}, \mathcal{F}, \mathbf{v} \)` | \( \mathbb{R}, \mathcal{F}, \mathbf{v} \) |
| `\( \Theta(n \log n) \)` | \( \Theta(n \log n) \) |
| `\( \binom{n}{k} \)` | \( \binom{n}{k} \) |
| `\( \forall x \in S,\; \exists y \)` | \( \forall x \in S,\; \exists y \) |

For display-mode equations, wrap in `\[ ... \]` on its own line. -->
