# Book Store - Next.js

## Overview
Book Store is a modern web application built with Next.js, featuring a seamless user experience for book discovery, management, and library organization. It includes robust authentication, database management, and an advanced UI/UX design.

## Tech Stack
- **Frontend**: Next.js, TypeScript, Tailwind CSS, ShadCN
- **Backend**: Next.js API Routes, NextAuth (for authentication)
- **Database**: PostgreSQL (via Neon), Upstash (for caching)
- **ORM**: Drizzle ORM (for database interactions)

## Features

### 🔑 Open-source Authentication
- Personalized onboarding flow with email notifications.

### 🏠 Home Page
- Highlighted books and newly added books with 3D effects.

### 📚 Library Page
- Advanced filtering, search, and pagination for book discovery.

### 📖 Book Detail Pages
- Availability tracking, book summaries, videos, and suggestions for similar books.

### 📋 All Books Page
- List and manage all library books with advanced search, pagination, and filters.

### 📝 Book Management Forms
- Add new books and edit existing entries.

### 📊 Book Details Page (Admin)
- Detailed book information for administrators.

### 🗄️ Database Management
- PostgreSQL with Neon for scalable and collaborative database handling.
- Drizzle ORM for simplified and efficient database interactions.

### 🎨 Modern UI/UX
- Built with TailwindCSS, ShadCN, and other cutting-edge tools.

## Getting Started
### Prerequisites
- Node.js (Latest LTS version recommended)
- PostgreSQL Database (Neon recommended)
- Upstash Redis (for caching)

### Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/avi9611/book-store-nextjs.git
   cd book-store-nextjs
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Set up environment variables in a `.env.local` file:
   ```sh
   DATABASE_URL=your_postgres_database_url
   NEXTAUTH_SECRET=your_nextauth_secret
   UPSTASH_REDIS_URL=your_upstash_redis_url
   ```
4. Run the development server:
   ```sh
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Deployment
- Recommended: Vercel (Optimized for Next.js)
- Database: Neon (for PostgreSQL)
- Caching: Upstash Redis

## Contributions
Contributions are welcome! Feel free to submit a pull request or open an issue.

## License
This project is open-source and available under the MIT License.

---

🚀 **Explore the Book Store Next.js App now!**

