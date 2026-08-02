# Gym Website — Build Prompt

## Project Overview
Build a responsive, modern website for a **college gym** (student fitness facility run by the institution, not a commercial gym). Pages: Home, About, Facilities/Equipment, Contact, Rules & Regulations, Terms & Conditions, and a Registration flow. The primary call-to-action across the site is **"Register Now"**, which routes to a dedicated Registration page containing a signup form.

No trainer profiles and no professional photography are available — the design must rely on typography, layout, color, icons, and illustration/graphics rather than real photos of the gym or staff.

---

## Tech Stack (suggested)
- Frontend: React + Vite (or plain HTML/CSS/JS if simpler is preferred)
- Styling: Tailwind CSS
- Form handling: React Hook Form + basic validation (or vanilla JS validation)
- Routing: React Router (multi-page feel with client-side navigation)
- Optional backend: Node/Express or a form service (e.g., Formspree/Supabase) to store registration submissions

---

## Site Structure & Pages

### 1. Home
- Hero section: bold headline, subheading, illustrated/graphic background (abstract shapes, gradient mesh, or icon-based composition — no real photos), primary CTA button **"Register Now"**
- Quick highlights: what the gym offers (equipment categories, open hours, who can join)
- Facility/equipment preview (3-4 icon-based cards) linking to Facilities page
- Stats bar (e.g., equipment count, weekly slots, years running, student members) — use real or reasonably-estimated numbers, clearly editable placeholders
- Secondary CTA banner before footer: "Ready to start? Register today"

### 2. About
- Gym's story/purpose within the college (e.g., set up for student wellness, run by [department/sports committee])
- Who manages/oversees it (e.g., Physical Education Department, student committee, or gym in-charge — no individual trainer bios needed unless the college wants to name a supervisor/in-charge)
- Achievements or milestones if any (inter-college fitness events, participation numbers)

### 3. Facilities / Equipment
- List of equipment/sections available (e.g., Free Weights, Cardio Machines, Multi-gym Station, Stretching Area)
- Each item: icon, short description, and any usage notes (e.g., "beginner-friendly", "requires supervision")
- No pricing/membership tiers needed if access is free with student/college ID — otherwise a simple fee table (per semester/annual) with CTA "Register"

### 4. Contact
- Contact form (Name, Email, Phone, Message)
- Gym address with embedded Google Map
- Phone number, email, operating hours
- Social media links (if the gym/college has any)

### 5. Rules & Regulations
- Gym etiquette (equipment usage, re-racking weights, attire, hygiene)
- Timing/attendance policies (slot system if applicable)
- Student ID / valid enrollment requirement to enter
- Guest policy (likely restricted to students/staff only)
- Locker/valuables policy
- Safety rules and supervision requirements
- Consequences for rule violations (e.g., suspension of gym access, reported to college authorities)

### 6. Terms & Conditions
- Eligibility (currently enrolled students/staff only, ID verification)
- Access terms (duration tied to academic year/semester, renewal at start of each term)
- Fee & refund policy, if applicable (many college gyms are free with tuition/fees)
- Liability waiver / injury disclaimer (important since this is unsupervised or lightly-supervised access)
- Facility usage rights and restrictions
- Changes to terms clause

### 7. Registration (Main CTA destination)
- Multi-field form:
  - Full Name
  - College Email (institutional ID preferred for verification)
  - Phone Number
  - Roll Number / Student ID
  - Department & Year/Semester
  - Date of Birth
  - Gender
  - Preferred Slot/Timing (Morning/Evening)
  - Emergency Contact Name & Number
  - Medical conditions (optional text area)
  - Checkbox: "I agree to the Rules & Regulations and Terms & Conditions" (must link to those pages, required to submit)
  - Submit button
- On submit: show confirmation message/page ("Thank you, our team will contact you shortly") and optionally send data to backend/email
- Form validation: required fields, valid email/phone format

---

## Navigation
- Sticky header with logo/college name + nav links: Home | About | Facilities | Contact | Rules | Terms
- Prominent **"Register Now"** button in header (different color/style to stand out), visible on all pages
- Footer: quick links, contact info, copyright, links to Rules & Terms

---

## Design Guidelines
- **Color palette: Midnight black (primary background) and red (primary accent)** — use black as the dominant base (near-black, e.g. #0A0A0A–#121212 for depth/layering) with a bold red (e.g. #E10600–#FF1E1E range) for CTAs, highlights, icons, and hover states. Keep supporting neutrals (grays/whites) minimal for text and borders — no third accent color to keep it sharp and consistent
- No photography available — design must be **graphic/illustration-driven**: bold typography, geometric shapes, gradients, icon sets (e.g., Lucide/Font Awesome for dumbbells, timers, etc.), and abstract patterns instead of real images
- Bold, energetic aesthetic — strong contrast, dark background with vibrant red accents
- Large, condensed/impact-style typography for headings; clean sans-serif for body
- Optional: simple SVG illustrations of gym equipment/silhouettes as hero visuals instead of photos
- Micro-interactions: button hover effects, smooth scroll, fade-in animations on scroll
- Fully responsive: mobile-first, works well on tablet/desktop
- Fast loading — since there are no heavy images, prioritize crisp vector/SVG assets and clean animation performance

---

## Functional Requirements
- All CTAs across Home/Facilities pages route to Registration page
- Registration form validates input before submission (including basic college email format check if applicable)
- Rules & Terms pages are linked from footer and from the registration consent checkbox
- Contact form sends a confirmation or shows success state
- Site should be SEO-friendly (proper meta tags, semantic HTML)

---

## Deliverables
- Fully coded, responsive website with all pages above
- No dependency on external photos — all visuals built from CSS/SVG/icons so the site works out of the box without any image assets
- Clean, componentized code structure for easy future editing (so real photos/branding can be swapped in later if the college provides them)
