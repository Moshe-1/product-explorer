# Product Explorer Workspace

A production-grade, micro-frontend (MFE) architecture built with Angular 21, featuring independent deployment capabilities, reactive state management, and a hardened CI/CD-ready development environment.

## 🏗️ Architectural Overview
This monorepo utilizes **Webpack Module Federation** to decouple the `Shell` (Host) from the `Product Explorer` (Remote).



## 🚀 Development & Quality Assurance
I enforce code quality through automated pre-commit hooks and strict linting.

### Automated Tooling
- **Husky & Lint-staged:** Ensures that no code reaches the repository unless it passes linting and unit tests.
- **Vitest:** High-performance unit testing suite for lightning-fast feedback loops.
- **Angular ESLint:** Enforces enterprise-grade styling and prevents common anti-patterns.

### Commands
- `npm run lint`: Executes workspace-wide linting.
- `npm test`: Runs Vitest with coverage reporting.
- `npm run prepare`: Initializes Husky hooks (must be run once after cloning).

## 📦 Module Federation Setup
The `product-details-mfe` is exposed via a dynamic `remoteEntry.js` script.
- **Host (Shell):** Orchestrates route mapping to remote federated modules.
- **Remote (Product Explorer):** Exposes shared components via `webpack.config.js` with `singleton: true` settings to prevent multiple Angular framework instances.

### How to run the project
- **Checkout project**
- **Ensures that you on the root folder**
- **Run npm install** 
- **Run npm run:all** 
- **The browser will auto open** 

### Prerequisites
- **node v20.19.0**
- **Angular cli 21**
