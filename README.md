
# KindCircle

A community-driven social development platform where people can create, discover, join, and manage local community service events.

## Live Website

https://YOUR-ACTUAL-CLIENT-URL.vercel.app

## Repositories

- **Client:** https://github.com/FayroSyrup/KindCircle_clientSide_PH_B14_A8
- **Server:** https://github.com/FayroSyrup/KindCircle_serverSide_PH_B14_A8

## Features

- **Authentication:** Register and log in using email and password, with Google social login.
- **Create Events:** Authenticated users can create community service events with descriptions, images, locations, event types, and dates.
- **Upcoming Events:** Discover upcoming community events with search and event type filtering.
- **Event Details:** View complete information about individual community events.
- **Join Events:** Logged-in users can join events and track their participation.
- **Manage Events:** Event creators can update and delete their own events.
- **Joined Events:** View events joined by the logged-in user, sorted by event date.
- **Protected Routes:** Secure private pages and API endpoints using authentication and JWT.
- **Theme Customization:** Switch between light and dark themes.
- **Responsive Design:** Access the platform across desktop, tablet, and mobile devices.

## Technologies Used

### Frontend
- Next.js (App Router)
- React.js
- JavaScript
- Tailwind CSS
- DaisyUI
- React Hot Toast
- React Icons

### Backend
- Node.js
- Express.js
- MongoDB
- MongoDB Node.js Driver
- JWT

### Authentication
- Better Auth
- MongoDB Adapter
- Google OAuth

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/FayroSyrup/KindCircle_clientSide_PH_B14_A8.git
cd KindCircle_clientSide_PH_B14_A8
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure environment variables

Create a `.env.local` file in the project root and configure the required environment variables.

```env
NEXT_PUBLIC_API_URL=
MONGODB_URI=
DB_NAME=kindcircle
BETTER_AUTH_SECRET=
BETTER_AUTH_URL=
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

### 4. Start the development server

```bash
npm run dev
```

Open http://localhost:3000 in your browser.

## Project Purpose

KindCircle aims to make local community service opportunities easier to discover and participate in by bringing event organizers and volunteers together on one platform.

---

© 2026 KindCircle. All rights reserved.
