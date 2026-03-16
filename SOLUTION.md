# Engineering Decision Record (EDR)

## 1. Governance & CI/CD Hardening
To ensure code quality in a distributed MFE environment, I implemented **Husky**.
- **The Hook:** `pre-commit` triggers `lint-staged`.
- **The Benefit:** Prevents "broken main" syndrome by ensuring developers locally validate their code against the project's quality gates before pushing.

## 2. State & Data Flow (The Reactive Strategy)

- **Signals vs. BehaviorSubjects:** Transitioned to Angular Signals for state management to achieve a fine-grained reactivity model.
- **Effect API:** Utilized `effect()` for automatic `localStorage` synchronization, ensuring the Favorites service remains source-of-truth consistent without manual subscriptions.

## 3. Build & Compilation Issues
* **Problem:** Encountered path resolution issues due to Webpack build context mismatches in the monorepo structure.
* **Resolution:** Used `path.resolve(__dirname, ...)` .
## 4. Testing Strategy
- **Unit Isolation:** Utilized `TestBed` mocking to strip away service dependencies, allowing components to be tested in isolation (speed: <100ms per component).
