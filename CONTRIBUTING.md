# Contributing to CGEC Gymkhana

Thank you for considering contributing to CGEC Gymkhana! Every contribution—from bug reports to new features—helps improve the student experience.

## Getting Started

1. **Fork** the repository and clone your fork locally:
   ```bash
   git clone https://github.com/<your-username>/CGEC-Gymkhana.git
   cd CGEC-Gymkhana/client
   ```
2. **Install dependencies**:
   ```bash
   npm install
   ```
3. **Start the dev server**:
   ```bash
   npm run dev
   ```

## Development & Linting

Before opening a pull request, ensure all lint checks pass:

```bash
npm run lint
npm run build
```

## Pull Request Guidelines

1. Create a descriptive feature branch:
   ```bash
   git checkout -b feat/your-feature-name
   # or
   git checkout -b fix/your-bug-fix
   ```
2. Commit your changes with clear commit messages.
3. Push to your branch and open a Pull Request targeting `main`.
4. Provide a clear description of the problem solved, changes made, and include screenshots or GIFs for UI modifications.

