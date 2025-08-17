# Quickextract.ai – Project Overview

Quickextract.ai is an online SAAS platform designed to convert Bank PDF statements into CSV files for seamless import into various accounting software. The platform is composed of multiple projects, each with a distinct role in the overall architecture. This document provides an overview of the workspace and each sub-project.

## Workspace Structure

- **finease-web**: The main SAAS application (user dashboard and PDF-to-CSV interface)
- **finease-api**: The backend API (handles authentication, PDF parsing, and business logic)
- **finease-app**: The branding/marketing website
- **finease-infra**: Infrastructure-as-code, AWS Lambda functions, and deployment configuration

## Project Overviews

### 1. finease-web (SAAS Application)
- **Tech Stack:** Next.js, TypeScript, Tailwind CSS
- **Purpose:** Provides the user‑facing dashboard for uploading bank statements, managing documents, and downloading CSVs. Handles user authentication (email/password, Google via Firebase), and interacts with the backend API for processing.
- **Key Features:**
  - Secure login/registration (Firebase integration)
  - PDF upload and conversion UI
  - Document management (view, download, delete)
  - Responsive, modern interface
- **Important Files & Directories:**
  - `app/register/` – registration flow, free‑plan auto‑assignment
  - `app/login/` – login page and Google sign‑in component
  - `components/DocumentTable.tsx` – table UI for listing documents
  - `components/GoogleSignInButton.tsx` – Google auth button
  - `app/api/` – client wrappers for backend endpoints
  - `next.config.ts`, `tailwind.config.ts` – build and styling configuration

### 2. finease-api (Backend API)
- **Tech Stack:** Python, FastAPI, PostgreSQL, AWS S3, Firebase, Stripe
- **Purpose:** Implements all server‑side logic: authentication, PDF parsing, CSV generation, file storage, subscription & quota management.
- **Key Features:**
  - REST API endpoints for auth, document upload, management, and subscription handling
  - Firebase authentication integration
  - Stripe subscription & payment processing
  - AWS S3 for secure file storage
  - Quota enforcement per subscription tier
- **Important Files & Directories:**
  - `app/api.py` – main FastAPI application, router registration
  - `app/models/` – Pydantic models (`document.py`, `user_profile.py`, `receipt.py`, etc.)
  - `app/database/db.py` – thin PostgreSQL wrapper (psycopg2)
  - `app/utils/quota.py` – quota checking & usage updates
  - `app/subscriptions/index.py` – Stripe subscription creation, upgrade/downgrade, webhook handling
  - `app/firebase_proxy/` – Firebase token exchange utilities
  - `app/rag/` – (future) Retrieval‑augmented generation chat endpoint
  - `requirements.txt` – Python dependencies

#### Database Schemas
The API uses PostgreSQL. The relevant tables are created implicitly via SQL statements in the code (no separate migration files are present). The current schema inferred from the code is:

**`documents`**
| Column | Type | Description |
|--------|------|-------------|
| `document_id` | `SERIAL PRIMARY KEY` | Unique identifier for the document |
| `uid` | `VARCHAR` | Owner user ID (Firebase UID) |
| `document_name` | `VARCHAR` | Human‑readable name supplied by the user |
| `actual_file_name` | `VARCHAR` | S3 object key |
| `document_type` | `VARCHAR` (enum: `bank`, `receipt`) | Type of document |
| `pages` | `INTEGER` | Number of pages detected (used for quota) |
| `should_process` | `BOOLEAN` | Whether the document passed quota checks |
| `approved` | `BOOLEAN` | Admin approval flag for receipts |
| `processed` | `BOOLEAN` | Whether the document has been parsed and CSV generated |
| `processed_at` | `TIMESTAMP` | When processing finished |
| `created_at` | `TIMESTAMP` | Insertion time |
| `updated_at` | `TIMESTAMP` | Last update time |
| `details` | `JSONB` | Raw JSON from AI extraction (bank statements) |
| `ai_details` | `JSONB` | Structured AI output |
| `processed_file_name` | `VARCHAR` | S3 key for the generated CSV |

**`user_profile`**
| Column | Type | Description |
|--------|------|-------------|
| `uid` | `VARCHAR PRIMARY KEY` | Firebase UID |
| `subscription_plan` | `VARCHAR` | Current plan (`free`, `basic`, `premium`) |
| `subscription_id` | `VARCHAR` | Stripe subscription ID |
| `subscription_status` | `VARCHAR` | Stripe status (`active`, `canceled`, …) |
| `stripe_customer_id` | `VARCHAR` | Stripe customer reference |
| `details` | `JSONB` | JSON blob storing quota counters, e.g. `pages_used_today`, `last_usage_date`, `pages_used_month` |
| `postcode` | `VARCHAR` | User's postal code (used for tax calculations) |
| `monthly_budget` | `NUMERIC` | User‑defined budget limit |
| `currency_symbol` | `VARCHAR` | Currency for the budget |
| `created_at` / `updated_at` | `TIMESTAMP` | Record timestamps |

Additional tables may be added in the future (e.g., `expenses`, `categories`), but the above are the core tables used by the current code.

#### Additional Data Models
- **ExpenseCategory** (`app/models/expense_category.py`): Stores expense categories with fields `category` (string) and `amount` (float). Used for categorizing receipt items.
- **Receipt** (`app/models/receipt.py`): Represents a receipt document with fields `uid`, `document_name`, `actual_file_name`, `details` (JSON), etc., similar to `Document` but for receipt type.
- **UserProfileCreate / UserProfileUpdate** (`app/models/user_profile.py`): Schemas for creating/updating user profile information such as `postcode`, `monthly_budget`, `currency_symbol`.
- **Register Model** (`app/models/register.py`): Simplified registration model after UX improvement; only includes user credentials, automatically assigns the free plan.

#### Subscription Management (Backend)
- **Endpoints** (in `app/subscriptions/index.py`):
  - `POST /create-subscription` – creates a new Stripe subscription (or free plan) for a user.
  - `POST /upgrade-plan` – upgrades or downgrades the user's plan, handling payment method attachment and Stripe subscription modification.
  - `GET /my-plan` – returns the current plan, subscription status, and quota usage.
  - `GET /get-quota-status` – provides detailed quota information (pages used, limits, reset dates).
- **Logic**: Uses `QuotaManager` to enforce daily limits for free users and monthly limits for paid plans. Subscription details are stored in `user_profile.details` JSON field.
- **Email Notifications**: `app/utils/email_notifications.py` sends emails on subscription changes (new subscription, upgrade, downgrade).
- **Audit Logging**: Changes are logged to `subscription_audit.log` for traceability.


### 3. finease-app (Branding Website)
- **Tech Stack:** Next.js, TypeScript
- **Purpose:** Public marketing site for Quickextract.ai – showcases features, pricing, FAQs, and provides contact forms.
- **Key Features:**
  - Static informational pages (Home, Features, About, Contact, Subscribe) and legal pages (Privacy, Terms)
  - SEO‑optimized meta tags and Open Graph data
  - Built with the Next.js App Router for modern routing/layouts
 - **Important Files & Directories:**
  - `app/home/page.tsx` – Home page
  - `app/features/page.tsx` – Features page
  - `app/about/page.tsx` – About page
  - `app/contact/page.tsx` – Contact page
  - `app/subscribe/page.tsx` – Subscribe/Pricing entry
  - `app/privacy/page.tsx` and `app/terms/page.tsx` – Legal pages
  - `app/layout.tsx`, `app/globals.css` – root layout and global styles
  - `app/components/` – page‑scoped UI components
  - `components/` – shared UI components (e.g., Hero, PricingCard, Footer)
  - `public/` – static assets (logo, images)
  - `next.config.ts`, `tailwind.config.ts` – configuration files

### 4. finease-infra (Infrastructure & AWS Lambda)
- **Tech Stack:** AWS CDK (TypeScript), Docker, AWS Lambda
- **Purpose:** Defines cloud resources (S3 buckets, Lambda functions, IAM roles, API Gateway) and deployment pipelines.
- **Key Features:**
  - CDK stacks for S3, Lambda, IAM, and CloudWatch logging
  - Dockerfile for Lambda runtime containing PDF parsing dependencies
  - CI/CD scripts for automated deployment
- **Important Files & Directories:**
  - `infra/` – CDK stack definitions (`stack.ts`, `lambda-stack.ts`)
  - `lambdaexpense/` – source code for the PDF‑parsing Lambda function
  - `cdk.json`, `package.json` – CDK project configuration
  - `README.md` – instructions for deploying the stack

---

## Detailed Project Architecture & Key Logic

### finease-web (SAAS Application)
- **Routing & Pages**: All UI pages live under the `app/` directory (e.g., `app/register/page.tsx`, `app/login/page.tsx`, `app/dashboard/page.tsx`). Next.js automatically maps these to routes.
- **Authentication Flow**: Uses Firebase Auth via the `auth-provider.tsx` context. The `GoogleSignInButton.tsx` component triggers Google OAuth, while email/password login is handled by `components/LoginForm.tsx`.
- **Document Upload & Management**: `components/DocumentUpload.tsx` (or similar) calls the backend `/create-document` endpoint. The `components/DocumentTable.tsx` displays the list of documents fetched from `/get-documents`.
- **State Management**: Global state (e.g., current user, auth token) is stored in React Context defined in `app/_hooks/` and `app/_services/`.
- **API Client Layer**: Wrapper functions in `app/api/` abstract HTTP calls to the FastAPI backend, handling token injection and error handling.
- **Styling**: Tailwind CSS configuration in `tailwind.config.ts`; global styles in `globals.css`.

### finease-api (Backend API)
- **Entry Point**: `app/api.py` creates the FastAPI app, registers routers (`register`, `expense`, `chat`, `subscriptions`).
- **Models**: Pydantic models in `app/models/` define request/response schemas (`document.py`, `user_profile.py`, `receipt.py`, etc.).
- **Database Layer**: `app/database/db.py` provides a thin wrapper around `psycopg2` with helper methods `execute`, `fetchone`, `fetchall`.
- **Quota Management**: `app/utils/quota.py` implements `QuotaManager` to enforce daily/monthly limits based on the user's subscription plan.
- **Subscription Logic**: `app/subscriptions/index.py` handles Stripe integration for creating, upgrading, downgrading, and cancelling subscriptions, plus webhook processing.
- **Firebase Proxy**: `app/firebase_proxy/index.py` exchanges Google ID tokens for Firebase custom tokens and validates Firebase ID tokens.
- **RAG Chat Endpoint**: `app/rag/chat.py` (future) provides a Retrieval‑Augmented Generation chat interface.
- **Dependency Injection**: `app/dependencies.py` defines `verify_auth_token` to decode and validate Firebase tokens for protected routes.
- **Utility Functions**: `app/utils/index.py` includes helpers like `detect_document_type` and `get_total_pages_by_user` used in document processing.

### finease-app (Branding Website)
- **Static Site**: Built with Next.js; pages are defined in `app/page.tsx` and additional route folders.
- **Components**: UI components such as `Hero`, `PricingCard`, `Footer` live in `components/`.
- **Assets**: Images, logos, and other static files are stored in `public/`.
- **Configuration**: `next.config.ts` and `tailwind.config.ts` configure the build and styling.

### finease-infra (Infrastructure & AWS Lambda)
- **CDK Stacks**: Defined in `infra/stack.ts` (core resources) and `infra/lambda-stack.ts` (Lambda functions, IAM roles, S3 buckets).
- **Lambda Code**: The PDF‑parsing Lambda resides in `lambdaexpense/`; Dockerfile `lambdaexpense.Dockerfile` builds the runtime with required native dependencies.
- **Deployment Scripts**: `cdk.json` and `package.json` manage CDK CLI commands. Use `cdk synth` to generate CloudFormation and `cdk deploy` to provision resources.
- **CI/CD**: The repository includes GitHub Actions workflows (not shown) that run `npm run build` and `cdk deploy` on merges to main.

## Getting Started

Each sub‑project contains its own README with setup instructions. Below are the recommended steps to run projects locally. Commands are shown for this repository (finease‑app) first, followed by pointers for the others.

```bash
# finease-app (this repository)
npm install
npm run dev   # starts Next.js dev server on http://localhost:3000

# finease-web (SAAS app) – run in its own repo
# npm install && npm run dev

# finease-api (FastAPI backend) – run in its own repo
# pip install -r requirements.txt && uvicorn app.api:app --reload  # http://localhost:8000

# finease-infra (CDK) – run in its own repo directory
# npm install && cdk synth && cdk deploy   # requires AWS credentials
```

Environment variables (see `.env.example` in each project) typically include:
- PostgreSQL connection details (`DB_HOST`, `DB_PORT`, `DB_NAME`, `DB_USER`, `DB_PASSWORD`)
- Firebase credentials (`FIREBASE_API_KEY`, `FIREBASE_PROJECT_ID`)
- Stripe keys (`STRIPE_SECRET_KEY`, `STRIPE_PUBLISHABLE_KEY`, price IDs)
- AWS credentials for S3/Lambda (`AWS_ACCESS_KEY`, `AWS_SECRET_ACCESS_KEY`, `AWS_REGION`, `AWS_BUCKET_NAME`)

---

## Contribution & Support

- Follow the contribution guidelines in each sub‑project’s README.
- For questions, open an issue in the appropriate repository or contact the maintainer.
- Ensure you run the backend and frontend locally with matching environment configurations to avoid authentication or CORS errors.

---

**Quickextract.ai** – Making bank data import effortless for everyone!
