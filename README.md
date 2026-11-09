<!-- Replace docs/demo.gif with your actual screen recording -->
![CGEC Gymkhana demo](docs/demo.gif)

> Official registration & information portal for the CGEC campus gym — built for students, by students.

```bash
git clone https://github.com/Abhiyaan2003/CGEC-Gymkhana.git && cd CGEC-Gymkhana/client && npm install && npm run dev
```

🔗 **[Live site →](https://cgec-gymkhana.vercel.app)** · [Register now](https://cgec-gymkhana.vercel.app/register)

[![CI](https://github.com/Abhiyaan2003/CGEC-Gymkhana/actions/workflows/ci.yml/badge.svg)](https://github.com/Abhiyaan2003/CGEC-Gymkhana/actions/workflows/ci.yml)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## Features

- 🏋️‍♂️ **7-Page Portal**: Home, About, Facilities, Contact, Rules, Terms, and Registration.
- 📋 **4-Step Registration Wizard**: Personal information, academic details, slot preferences, emergency contact, and terms review.
- ✨ **Fluid Visuals**: Built with GSAP and Lenis smooth scrolling, featuring a zero-photography, SVG- and CSS-driven graphic aesthetic.
- 📱 **Mobile & Accessibility First**: Fully responsive down to 375px mobile screens, respecting `prefers-reduced-motion` and WCAG AA contrast standards.

## Project Structure

```text
CGEC-Gymkhana/
├── client/          # Vite + React 19 frontend application
├── server/          # Optional / planned backend services
├── docs/            # Media assets & demo recordings
└── .github/         # CI workflows and issue templates
```

## Getting Started

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Abhiyaan2003/CGEC-Gymkhana.git
   cd CGEC-Gymkhana/client
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start local development server:**
   ```bash
   npm run dev
   ```
   Open [http://localhost:5173](http://localhost:5173) in your browser.

4. **Linting and checks:**
   ```bash
   npm run lint
   ```

## Contributing

Please see [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on opening issues, local setup, and submitting pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

