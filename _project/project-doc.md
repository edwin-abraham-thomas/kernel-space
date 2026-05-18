# kernel_space — Project Document

## Mission

Build the go-to content source for AI and software development for the Malayalee community through tinkering, experimenting, and breaking things to truly understand them, building towards production-grade systems with AI, deep over surface level. For working engineers and those who want to become one.

## Opportunity Assessment

### Why This Makes Sense

- Underserved niche: high-quality tech content in Malayalam is still rare, and most Malayalee developers consume content only in English.
- Large addressable audience: Kerala has high literacy and strong tech-worker density, with a large diaspora across the US, UAE, UK, Australia, and elsewhere.
- Timing: AI demand is high, and native-language content lowers the barrier without forcing viewers into shallow material.
- Credibility gap: most Malayalam tech content online stays surface-level, which creates room for practitioner-grade work.

### Creator Advantage

| Asset | Why It Matters |
|---|---|
| Software engineer with enterprise AI exposure | Brings a production mindset beyond tutorial-level demos |
| TinqrBox project | Real proof of building production-grade systems with AI |
| MacBook Air M4 + iPhone 17 | Strong minimum setup for recording and filming |
| Windows machine with RTX 4050 | Local LLM experiments and GPU-heavy workflows |
| Raspberry Pi | Cheap infrastructure experimentation and self-hosting demos |

## Content Strategy

### Positioning

> "We tinker, experiment, and break things to truly understand them, building towards production-grade systems with AI, deep over surface level. For working engineers and those who want to become one."

Not a tutorial farm. Not news aggregation. A practitioner sharing what actually works, from hardware experiments to production-grade builds.

### Audience

- Working Malayalee engineers
- Aspiring engineers who want practitioner-grade intuition, not exam-style explanations
- Global diaspora viewers who are comfortable with Manglish and English tech terms

### Content Pillars

1. AI in the Real World: reliability, observability, cost, and real tradeoffs beyond demo-land
2. Build in Public: TinqrBox and future projects from architecture through failures and iteration
3. Developer Tooling and Workflow: Claude, Copilot, Cursor, local LLMs, and opinionated workflows
4. Software Engineering Fundamentals: explained in Malayalam without dumbing them down
5. Community Conversations: AMAs, interviews, and spotlights on Malayalee engineers and founders

### Content Formats

- YouTube as the primary platform for long-form walkthroughs, build videos, and explainers
- Shorts or reels for quick tips, hot takes, and behind-the-scenes fragments
- Newsletter or blog for deeper written follow-ups and show notes
- Community channel later for peer learning, Q&A, and networking

## Brand and Editorial Guardrails

### Voice

- Conversational Manglish in English alphabets
- Engineer-to-engineer, never lecturer mode
- Deep over surface-level
- Real tradeoffs over slogans
- Mild humour is fine; hype is not

### Never

- Mention employer or confidential work context
- Write formal or literary Malayalam
- Present beginner-only tutorials as if they are the whole story
- Fake demos, fake numbers, or fake production outcomes

### Differentiators

- TinqrBox is a real working case study and should be used when it strengthens the story
- Real terminals, real code, and real output are preferred over abstraction when the topic benefits from them
- The goal is not volume; it is to become the best Malayalam tech resource in this niche

## Branding

### Identity

- Channel name: `kernel_space`
- Concept: kernel space signals depth, lower-level understanding, and operating below surface-layer content
- Preferred handle if available: `@thekernelspace`

### Reference Copy

- Channel description: "We tinker, experiment, and break things to truly understand them, building towards production-grade systems with AI, deep over surface level. For working engineers and those who want to become one."
- Homepage intro baseline: "Hello, welcome to Kernel Space. What we do here is learn, discuss, and share real experiences on using AI as a software engineer for the Malayalee community, with the long run in mind."

### Visual System

- Background: `#0d0d0d`
- Primary text: `#f0f0f0`
- Accent palette can borrow from syntax-highlighting colors
- Typography should stay monospace-first or code-editor-adjacent
- Visual style should feel like a dark code editor or terminal, not corporate motion graphics
- Logo direction: lowercase `kernel_space`, monospace, with a subtle blinking-cursor feel
- Banner direction: dark editor aesthetic, syntax-colored token lines, and a darker center emphasis so the name stays legible

## Production Setup

| Device | Role |
|---|---|
| iPhone 17 | Primary camera for talking-head or mobile shots |
| MacBook Air M4 | Screen recording, editing, development demos |
| Windows RTX 4050 | Local LLM experiments and GPU content |
| Raspberry Pi | Infrastructure, self-hosting, and systems demos |

Minimum viable setup: screen recording plus voiceover is enough to start. No studio is required.

## Phases

### Phase 0 — Validate (Weeks 1-4)

- [ ] Publish 3-5 pilot videos on YouTube
- [ ] Share them in Malayalee developer communities
- [ ] Gauge engagement, comments, and subscriber growth
- [ ] Decide on a sustainable upload schedule

### Phase 1 — Build Audience (Months 2-6)

- [ ] Establish a weekly cadence or the closest sustainable equivalent
- [ ] Launch a community channel such as WhatsApp or Discord
- [ ] Document TinqrBox publicly as an ongoing build-in-public series
- [ ] Reach 500 YouTube subscribers

### Phase 2 — Deepen and Monetize (Months 6-12)

- [ ] Explore sponsorships that fit developer audiences
- [ ] Launch a newsletter
- [ ] Experiment with paid workshops or cohort-style sessions in Malayalam
- [ ] Reach 5,000 YouTube subscribers

### Phase 3 — Community Platform (Year 2+)

- [ ] Build a dedicated community or resource hub
- [ ] Collaborate with Malayalee engineers and founders
- [ ] Evaluate meetup or conference opportunities later

## Success Metrics

| Metric | 6-Month Target | 12-Month Target |
|---|---|---|
| YouTube subscribers | 500 | 5,000 |
| Average views per video | 200 | 1,000+ |
| Community members | 100 | 500 |
| Newsletter subscribers | - | 500 |

## Risks and Mitigations

| Risk | Mitigation |
|---|---|
| Time constraints from full-time work | Batch production, keep the workflow lean, and avoid overproducing early |
| Audience ceiling | Target the global Malayalee diaspora, not only Kerala |
| Malayalam script versus spoken dialect | Use conversational spoken Malayalam and do not over-formalize |
| Quality versus consistency | Start good enough, then iterate; consistency matters early |

## Key Decisions

- [x] Channel name and branding
- [x] Conversational Manglish as the language style
- [ ] Pick the primary short-form platform
- [ ] Decide whether to show face or stay screencast-first initially

## Video Plan

Publish order: 1 -> 2 -> 3 -> 4 -> 5

### Video 1 — Channel Intro (~5-8 min)

Working title: "Njan aaraanu, ee channel enthinaanu?"

1. Who you are and what kind of engineer you are
2. Why this channel exists and the gap in Malayalam tech content
3. What this channel is not: hype, shallow tutorials, generic news
4. What this channel is: real engineering, real Malayalam, build in public
5. Quick teaser of TinqrBox live
6. What is coming next

### Video 2 — TinqrBox: The Full Story (~20-30 min)

1. What TinqrBox is and the problem it solves
2. The hardware and home-lab angle
3. Architecture walkthrough: Docker, Cloudflare Tunnel, no open ports, GitOps
4. How AI actually helped versus what still required engineering judgment
5. Live demo
6. What worked, what failed, and what is next

### Video 3 — AI-First Development (~15-20 min)

1. The hype versus reality of AI coding tools
2. Actual workflow across Claude, Copilot, Cursor, and similar tools
3. What AI is genuinely good at versus where it fails
4. A real on-screen example
5. How this changes the skill profile of a software engineer

### Video 4 — Hobby AI vs. Production AI (~15-20 min)

1. What production AI actually means
2. Where hobby or tutorial projects fall short
3. TinqrBox as a production-mindset case study
4. Guardrails, error handling, cost, and observability
5. How to think like a production engineer from day one

### Video 5 — Local LLMs on Your Own Hardware (~20-25 min)

1. Why local LLMs matter: privacy, cost, offline use
2. Hardware setup across the Windows RTX box and the Mac
3. Live setup with a tool like Ollama
4. Performance tradeoffs between local and cloud
5. Who should care and when local is actually worth it

## Repository Workflow

Each video folder contains:

- `script.md` for voiceover only
- `production.md` for visuals, structure, overlays, pacing, and dependencies
- `status.md` for workflow state, blockers, and revisions

Expected working sequence:

1. Plan or refine `production.md`
2. Write `script.md` from that structure
3. Package visuals, dependencies, and blockers
4. Record, edit, and publish

## Working Rules for Agents and Future Sessions

- Read this file before making strategic choices about positioning, scope, or episode direction
- Read `_project/creator-voice-profile.md` before drafting or rewriting spoken `script.md` files so the spoken tone stays consistent with the creator's natural voice
- Use TinqrBox when it strengthens credibility or provides a real case study
- Prefer screen recording and voiceover unless the topic clearly benefits from something more produced
- Optimize every episode for a busy working engineer who wants signal, not filler

## Status

- Repository setup complete
- Copilot customization layer in place
- Episode planning and drafting in progress

Last updated: 2026-05-17
