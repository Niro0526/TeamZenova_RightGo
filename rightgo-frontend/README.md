# RightGo Frontend

A modular Next.js + TypeScript dashboard and logistics management platform for RightGo.

## Architecture & Role Portals

- `/auth` - Authentication & role selection portal
- `/dispatcher` - Central dispatch board, trip management, and fleet coordination
- `/store-manager` - Store/outlet order validation and inventory handover
- `/loader` - Cargo loading, verification, and checklist operations
- `/driver` - Driver delivery routes, manifest, and status updates

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Copy environment file:
```bash
cp .env.example .env.local
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.
