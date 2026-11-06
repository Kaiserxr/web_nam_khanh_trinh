# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Primary: tech recruiters and engineers screening candidates for software-engineering and machine-learning internships. They arrive from a resume, LinkedIn, or GitHub link, skim quickly, often on a phone, and need fast proof that Khanh can build real things: what was built, with what, and what came of it. Other visitors (faculty, peers) are welcome but not the design target.

## Product Purpose

The personal portfolio of Khanh N. Trinh, a freshman B.S. in Computer Science student at the University of South Florida (expected May 2030). It exists to turn a short recruiter visit into an interview: surface credible evidence of applied AI work, make the resume one click away, and make contacting Khanh effortless. Khanh's stated goal is a software engineering or machine learning internship, ideally by sophomore year; the site says so on the first screen (`site.hero.seeking`). Success means a recruiter can, within a minute, name what sets Khanh apart and reach the resume or contact details.

## Positioning

A Computer Science student focused on AI, whose record predates college and is externally validated, all of these together:

- **Active research:** Undergraduate Research Assistant at ERA Lab, University of South Florida (October 2026 – present) on 3D sonar detection: point clouds, sparse voxel attention, fusion architectures.
- **Award-winning applied AI:** three international Gold Medals for computer-vision projects (Singapore, Korea, Croatia, 2025).
- **Published researcher:** IJSRM paper (September 2025) comparing five ML algorithms for hotel booking cancellation prediction; Random Forest reached 91.0% accuracy.
- **AI that touches hardware:** YOLO object detection driving a robotic arm; AI railway safety monitoring (Arduino, Raspberry Pi).
- **Competitive programming:** Technical Lead, Society of Competitive Programmers, USF (October 2026 – present): runs workshops, authors contest problems, hosts club contests; selected to compete for USF at ICPC 2026.

## Operating Context

- Visitors usually come from a resume, LinkedIn, or GitHub; the resume PDF (`/documents/print.pdf`) is a primary exit.
- Pages: home, `/about`, `/experience`, `/portfolio` (with a sample project detail template), `/moments`, `/cv`, `/contact`.
- All copy is data-driven: `src/data/site.ts` (identity, socials, documents, chatbot), `cv.json`, `experience.ts`, `projects.json`, `projectData.ts`. The owner edits these files directly, so content structures must stay simple to edit.

## Capabilities and Constraints

- Existing stack: Next.js 14 (App Router), TypeScript, Tailwind CSS, shadcn/ui, Magic UI, framer-motion / motion. Run with `npm run dev`.
- Domain: namkhanhtrinh.com.
- `projects.json` is intentionally empty for now; the owner will add entries. The portfolio page must handle an empty state gracefully, and future work must not populate it with invented projects.
- Optional CopilotKit chatbot exists but is off (`chatbot.runtimeUrl` is empty). Keep it optional; do not depend on it.
- Social links hide automatically when their `href` is empty.

## Brand Commitments

- Name: "Khanh N. Trinh"; short name "khanh" in the nav. Existing logo (`/logo.png`) and avatar (`/avatar.png`).
- Tagline: "Code. Create. Inspire." The owner approved demoting it (November 2026): the name is the home h1 and the tagline is a quiet line on the first screen. Removing or rewording it still needs the owner's approval.
- Voice: first person, earnest, specific about what was built and what it achieved.

## Evidence on Hand

- Resume PDF: `public/documents/print.pdf`.
- CV data (`src/data/cv.json`): education (USF; Hanoi-Amsterdam High School for the Gifted, SAT 1530 / superscore 1570, IELTS 7.5), projects, awards.
- ERA Lab logo: `public/logos/era-lab.png` (200×200 PNG on white).
- Experience timeline (`src/data/experience.ts`, entries may carry an optional `logo`): ERA Lab Research Assistant, SCP Technical Lead, IJSRM publication, 2025 AI & robotics projects with Gold Medals.
- Photos: `public/moments/SCP.jpg`, `public/moments/USF.png`.
- Socials: GitHub (Kaiserxr), LinkedIn.
- Absent, and must not be fabricated: testimonials, employer references, project screenshots or demos, metrics beyond those in the CV data, internship history.

## Product Principles

1. **Proof over adjectives.** Lead with medals, the publication, accuracy numbers, and named competitions; generic "passionate about AI" prose comes second.
2. **One-minute recruiter path.** Who Khanh is, what sets Khanh apart, resume, and contact must be reachable from the first screen without hunting.
3. **Data stays editable.** Every piece of copy lives in `src/data/`; design must not hard-code content the owner needs to update.
4. **Honest about stage.** A freshman with a strong early record, presented confidently but never inflated; empty sections stay empty rather than padded.

## Accessibility & Inclusion

Target WCAG 2.2 AA across every page: text contrast at least 4.5:1 (3:1 for large text and UI boundaries), full keyboard operation with a visible focus indicator, meaningful alt text on photos and logos, and respect for `prefers-reduced-motion` on entrance and tagline animations. Recruiters often skim on phones, so touch targets stay at least 44px and nothing depends on hover.
