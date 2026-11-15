# KindCircle

KindCircle is a community platform where people create, join and track social service events in their local area, like winter clothes drives, cleanups and plantation days.

**Live site:** https://kindcircle-client-inky.vercel.app

**Server repo:** https://github.com/FayroSyrup/KindCircle_serverSide_PH_B14_A8

## Features
- Email and password login, plus GitHub login, with password rules and toast messages
- Create events with future dates only, then update or delete your own events
- Upcoming events page with search and event type filter, past events are hidden
- Join an event in one click and see it in your joined list, sorted by date
- Private routes stay open after reload, and API calls are protected with JWT
- Light and dark theme, loading skeletons, and a profile page to edit name and photo

## Tech stack
Next.js (App Router), Tailwind CSS, DaisyUI, Better Auth, MongoDB, Express

## Run locally
1. Run `npm install`
2. Copy `.env.example` to `.env.local` and fill in the values
3. Run `npm run dev`
