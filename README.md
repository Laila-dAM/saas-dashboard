# saas-dashboard

A modern and responsive admin dashboard built with **Next.js**, **React**, **TypeScript**, and **Tailwind CSS**. This project demonstrates a complete dashboard structure with reusable components, mock APIs, authentication, analytics, billing management, user management, and activity monitoring.

The application is designed as a scalable foundation for SaaS platforms, internal management systems, and administrative panels.

---

# Features

- User authentication
- Dashboard overview
- User management
- Analytics dashboard
- Billing management
- Activity logs
- Application settings
- Responsive design
- Dark mode support
- Reusable UI components
- Animated interface
- Mock backend
- REST API routes
- Form validation
- TypeScript support

---

# Built With

- Next.js
- React
- TypeScript
- Tailwind CSS
- Framer Motion
- Zod

---

# Project Structure

```text
src/
│
├── app/
│   ├── api/
│   ├── analytics/
│   ├── billing/
│   ├── dashboard/
│   ├── logs/
│   ├── settings/
│   └── users/
│
├── backend/
│   ├── db/
│   ├── middleware/
│   ├── routes/
│   └── server.ts
│
├── components/
│   ├── analytics/
│   ├── billing/
│   ├── charts/
│   ├── dashboard/
│   ├── layout/
│   ├── logs/
│   ├── motion/
│   ├── ui/
│   └── users/
│
├── lib/
├── schemas/
├── services/
└── types/
```

---

# Pages

- Login
- Dashboard
- Users
- Analytics
- Billing
- Logs
- Settings

---

# Main Components

## Dashboard

- KPI Cards
- Statistics Grid
- Revenue Overview
- Activity Feed
- System Alerts

## Users

- Users Table
- User Filters
- User Modal
- User Status

## Analytics

- Analytics Filters
- Export Data
- Comparison Charts

## Billing

- Pricing Cards
- Subscription Status
- Payment History

## Logs

- Logs Table
- Log Filters
- Activity Timeline

## Layout

- Sidebar
- Header
- Topbar
- Breadcrumbs
- Notifications
- Search Bar
- User Menu
- Theme Toggle
- Container
- Sections

---

# Installation

Clone the repository.

```bash
git clone <repository-url>
```

Enter the project folder.

```bash
cd admin-dashboard
```

Install the dependencies.

```bash
npm install
```

---

# Running the Project

Start the development server.

```bash
npm run dev
```

Open your browser.

```
http://localhost:3000
```

---

# Build

```bash
npm run build
```

---

# Production

```bash
npm start
```

---

# Lint

```bash
npm run lint
```

---

# Mock Backend

The project includes a simple mock backend.

Data is stored as JSON files inside:

```text
src/backend/db/
```

Available resources include:

- Users
- Analytics
- Billing
- Logs
- Notifications

---

# API Routes

Example endpoints:

```text
POST /api/auth

GET /api/users
POST /api/users

GET /api/analytics

GET /api/billing

GET /api/logs
```

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| Next.js | Application Framework |
| React | User Interface |
| TypeScript | Static Typing |
| Tailwind CSS | Styling |
| Framer Motion | Animations |
| Zod | Validation |

---

# Responsive Design

The interface is fully responsive and optimized for:

- Desktop
- Tablet
- Mobile

---

# Future Improvements

- JWT Authentication
- Database integration
- Docker support
- Role-based permissions
- Email notifications
- File uploads
- Unit testing
- Integration testing
- Real-time dashboard
- WebSocket support
