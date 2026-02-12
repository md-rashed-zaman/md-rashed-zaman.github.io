# Editorial Minimal Hero + 3-Part Skills Redesign

## Goals

- Make the hero feel tailored to a backend engineer: precise, credible, calm.
- Remove “landing page marketing” vibes and replace with “engineering clarity”.
- Show the full skills inventory at once, in **3 parts** (no tabs).

## Visual direction

- Minimal, FAANG-style layout:
  - clean whitespace, clear hierarchy, restrained accent (`--brand`)
  - editorial typography (display for headings, Plex for body, mono for labels)
- Avoid fake metrics; only show real “signals” from CV data (ratings / solved count).

## Hero (top section)

- Left column (editorial):
  - Small meta badges (location + availability)
  - Name + role
  - 1-line positioning + short “about”
  - Compact proof bullets (stack + architecture)
  - CTAs: Resume + Email + GitHub + LinkedIn
- Right column:
  - “Highlights” panel:
    - current role/company (from `DATA.experience[0]`)
    - primary stack chips
    - real signals (Codeforces/LeetCode)

## Skills section

- Present skills as **3 capability modules**:
  - Core languages
  - Backend & architecture (frameworks + messaging)
  - Data & delivery (databases + tooling)
  - Each module highlights “top” skills with a subtle brand tint, while keeping the full list visible.
