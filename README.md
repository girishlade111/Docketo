# Docketo

Docketo is a modern, modular docket and case workflow management platform designed to streamline legal filings, case records, task schedules, and document tracking.

---

## Table of Contents

- [Overview](#overview)
- [Key Features](#key-features)
- [Architecture](#architecture)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Configuration](#environment-configuration)
  - [Running the Application](#running-the-application)
- [API Overview](#api-overview)
- [Testing](#testing)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

Docketo provides legal teams, operations managers, and compliance officers with a centralized interface to manage legal dockets, court dates, statutory deadlines, and document repositories. It enforces structured data ingestion and clear audit trails.

---

## Key Features

- **Docket and Case Tracking**: Maintain detailed profiles for cases, proceedings, and matters.
- **Deadline and Calendar Management**: Automatically calculate statutory limits and event reminders.
- **Document Management**: Associate filings, motions, briefs, and orders with relevant dockets.
- **Audit Trails**: Full tamper-evident history of changes, uploads, and status transitions.
- **Role-Based Access Control (RBAC)**: Fine-grained permissions across administrative, legal, and client roles.
- **Search and Filtering**: Instant full-text search across case identifiers, parties, citations, and tags.

---

## Architecture

Docketo follows a clean architecture pattern separating presentation, domain logic, and data storage:

```
[ Client Interface (Web / API) ]
              |
      [ Routing & Auth ]
              |
      [ Service Layer ]
     /        |        \
[ Docket ] [ Tasks ] [ Documents ]
     \        |        /
    [ Data Access Layer ]
              |
     [ Storage Engine ]
```

---

## Tech Stack

- **Runtime**: Node.js (v18 or higher recommended)
- **Language**: TypeScript / JavaScript
- **Backend Framework**: Express.js or Fastify
- **Database**: PostgreSQL / SQLite (with Prisma or Drizzle ORM)
- **Testing**: Jest / Vitest / Playwright

---

## Project Structure

```
docketo/
|-- src/
|   |-- config/        # Environment and app configuration
|   |-- controllers/   # Request handlers
|   |-- middleware/    # Auth, validation, error handling
|   |-- models/        # Schemas and database entities
|   |-- routes/        # API route definitions
|   |-- services/      # Business logic
|   `-- index.ts       # Application entrypoint
|-- tests/             # Unit and integration test suites
|-- .gitignore         # Git ignore rules
|-- package.json       # Project dependencies and scripts
`-- README.md          # Project documentation
```

---

## Getting Started

### Prerequisites

Ensure the following tools are installed on your workstation:

- [Node.js](https://nodejs.org/) (>= 18.x)
- [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/girishlade111/Docketo.git
   cd Docketo
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Configuration

Create a `.env` file in the root directory by copying the example:

```bash
cp .env.example .env
```

Define the necessary environment variables:

```env
PORT=3000
NODE_ENV=development
DATABASE_URL="postgresql://user:password@localhost:5432/docketo_db"
JWT_SECRET="your-secure-jwt-secret"
```

### Running the Application

- **Development Mode** (with hot reload):
  ```bash
  npm run dev
  ```

- **Build**:
  ```bash
  npm run build
  ```

- **Production Run**:
  ```bash
  npm start
  ```

---

## API Overview

| Method | Endpoint              | Description                     |
|--------|-----------------------|---------------------------------|
| GET    | `/api/v1/dockets`     | List all dockets with filters   |
| POST   | `/api/v1/dockets`     | Create a new docket entry       |
| GET    | `/api/v1/dockets/:id` | Retrieve specific docket detail |
| PUT    | `/api/v1/dockets/:id` | Update docket information       |
| DELETE | `/api/v1/dockets/:id` | Soft-delete or archive docket   |
| GET    | `/api/v1/health`      | Health check endpoint           |

---

## Testing

Run unit and integration suites:

```bash
npm test
```

Generate test coverage reports:

```bash
npm run test:coverage
```

---

## Roadmap

- Automated calendar sync (Google Calendar, Outlook)
- OCR document parsing for incoming court filings
- Webhook notifications for docket status updates
- Export to PDF/CSV for compliance reporting

---

## Contributing

1. Fork the project.
2. Create your feature branch (`git checkout -b feature/new-capability`).
3. Commit your changes (`git commit -m "Add new capability"`).
4. Push to the branch (`git push origin feature/new-capability`).
5. Open a Pull Request.

---

## License

Distributed under the MIT License. See `LICENSE` for more information.
