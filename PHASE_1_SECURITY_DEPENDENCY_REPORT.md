# Phase 1 Security & Dependency Report

- **Date:** 10 November 2026
- **Auditor:** Application Security Engineer
- **Target Repository:** `urmika-juris-legal-presence` (Branch: `testing`)

---

## 1. Application Security Posture

### A. Secret & Credential Scanning
- **Scope:** All source files (`.ts`, `.tsx`, `.js`, `.json`, `.css`) in `src/`.
- **Findings:** **0 hardcoded secrets**, 0 private API keys, 0 cloud tokens, 0 database connection strings.
- **Environment Files:** No `.env` files are tracked in Git.

### B. Outbound Link Sanitization (Reverse Tabnabbing Protection)
- **Scope:** All 14 anchor tags declaring `target="_blank"`.
- **Findings:** Every anchor declares `rel="noreferrer"` or `rel="noopener noreferrer"`.
- **Risk Assessment:** Zero vulnerability to `window.opener` context tampering.

### C. Server Functions & Injection Protection
- **Scope:** `src/lib/chat-server.ts` (`submitLegalEnquiry`).
- **Input Sanitization:** Validated via strict type checks and string boundaries (1 to 1000 characters).
- **Execution Mode:** Pure deterministic in-memory lookup. Zero SQL queries, zero system command executions, zero external network requests.
- **XSS Assessment:** Zero usage of `dangerouslySetInnerHTML` on untrusted user inputs.

### D. HTTP Security Headers
Implemented in both `src/server.ts` (SSR application entry) and `vercel.json` (deployment routing):
- `X-Content-Type-Options: nosniff` (Prevents MIME-type sniffing).
- `X-Frame-Options: SAMEORIGIN` (Mitigates clickjacking attacks).
- `Referrer-Policy: strict-origin-when-cross-origin` (Safeguards path privacy on external transitions).
- `Permissions-Policy: camera=(), microphone=(), geolocation=()` (Disables unauthorized browser hardware access).

---

## 2. Dependency Vulnerability Analysis (npm audit)

Direct evaluation of all 587 project dependencies (261 production, 274 development, 74 optional, 8 peer):

| Package | Installed Version | Severity | Dependency Type | Advisory / Impact | Disposition |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **vite** | 8.1.5 | High (x1), Moderate (x3), Low (x1) | Development (Bundler) | GHSA-587h-7wmj-h5pm / GHSA-698v-4r3x-3vcv (dev `launch-editor` Windows path handling). | **Development only.** Dev editor launcher is not compiled into production bundles. Production build verified. |
| **zod** | 3.25.76 | High | Production / Schema | GHSA-mrhx-c7xc-m3w5 (Memory exhaustion during validation of oversized constrained collections). | **Zero operational risk in application.** The project only validates bounded strings (length < 1000). Upgrading to major v4 is deferred to avoid breaking schema contracts. |
| **minimatch** | 9.0.5 | Moderate | Development (via typescript-eslint) | GHSA-g3hv-75wg-m249 (ReDoS via globparts amplification). | **Build tool only.** Contained within ESLint AST parser; never exposed in production runtime. |

---

## 3. Production Build Integrity
- Command executed: `npm run build`.
- Client build: 1,957 modules transformed into `.output/public` (0 errors).
- SSR build: 1,992 modules transformed into `.output/server` (0 errors).
- Total test suite: 27 / 27 tests passed.

