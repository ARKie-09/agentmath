---
title: Progress
tags:
  - progress
---

# Research Progress

Track the current state of all ongoing work here. Each task or problem gets its own
coloured block indicating its status. Update your blocks whenever you make progress
or hit a blocker — and move completed items to the **Completed** section.

---

## Active Work

!!! warning "Problem: [Your Problem Title Here]"
    **Assigned to:** Alice, Bob  
    **Started:** YYYY-MM-DD  
    **Status:** 🔄 In Progress

    **Description:**  
    A concise statement of the problem being worked on.

    **Current approach:**  
    What technique or reduction you are attempting, and why you believe it could work.

    **Blockers:**  
    None currently. *(Or describe what is blocking progress.)*

---

!!! danger "Problem: [A Blocked Problem]"
    **Assigned to:** Charlie  
    **Started:** YYYY-MM-DD  
    **Status:** 🚫 Blocked

    **Description:**  
    A concise statement of the problem.

    **Current approach:**  
    Approach being attempted.

    **Blockers:**  
    Describe specifically what is blocking progress and what help or insight is needed.

---

## Completed

!!! success "Task: [A Completed Task]"
    **Completed by:** Alice  
    **Date:** YYYY-MM-DD

    Brief summary of what was accomplished and any relevant links (e.g., to a [Finding](../findings/index.md) or [Paper](../papers/index.md)).

---

## How to Add a New Entry

Copy one of the three templates below into the appropriate section above.

**In Progress** — use `!!! warning`

```markdown
!!! warning "Problem: YOUR TITLE"
    **Assigned to:** Name(s)
    **Started:** YYYY-MM-DD
    **Status:** 🔄 In Progress

    **Description:**
    ...

    **Current approach:**
    ...

    **Blockers:**
    None / describe blocker.
```

**Blocked** — use `!!! danger`

```markdown
!!! danger "Problem: YOUR TITLE"
    **Assigned to:** Name(s)
    **Started:** YYYY-MM-DD
    **Status:** 🚫 Blocked

    **Description:**
    ...

    **Current approach:**
    ...

    **Blockers:**
    Describe the blocker.
```

**Completed** — use `!!! success`

```markdown
!!! success "Task: YOUR TITLE"
    **Completed by:** Name
    **Date:** YYYY-MM-DD

    Summary of outcome and any links.
```
