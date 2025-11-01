# LoveLitReviews: A Social Media Platform for Book Enthusiasts

![collage](https://github.com/SaraGolbek/LoveLitReviews/assets/145944090/0167f3c8-8dac-4085-81a9-7ef7e57d15f1)

## Website
https://lovelitreviews.onrender.com/

## Overview
LoveLitReviews is a social media site designed for book lovers to share, rate, and review the books they read. Users can search for books using the Google Books API, write reviews, and view ratings. The platform features user portfolios, personalized book feeds, and book-specific pages, fostering a community of readers.

## Technologies Used
- **Front-end:** React JS, Vite, Sass, Bootstrap, Font Awesome
- **Back-end:** Node.js, Express.js
- **Database:** PostgreSQL
- **API Integration:** Google Books API for retrieving book information
- **Authentication:** Cookie-based authentication using JSON Web Tokens (JWT)

## General Approach
1. **Front-end Development:** Designed the user interface with React components and implemented responsive styling using Sass and Bootstrap.
2. **Back-end Development:** Built a Node.js/Express server for handling API requests, user authentication, and database interactions.
3. **Database Management:** Set up PostgreSQL for managing users, books, and reviews with migrations and relational schema.
4. **Authentication:** Implemented cookie-based authentication with secure token storage and retrieval for session management.
5. **Dynamic Content:**
   - Search and Book Details: Integrated Google Books API for retrieving book metadata.
   - User Profiles: Displayed user-specific reviews and provided an option for authenticated users to delete their reviews.
   - Reviews: Users can add reviews, which are linked to their profiles and displayed dynamically.
6. **Deployment:** Deployed the front-end and back-end using Render, with PostgreSQL hosted on Render's managed database services.

## User Stories
- **Sign-In/Sign-Up Flow:** Users can register and log in securely. On login, authentication tokens are stored in cookies.
- **Navigation:** Personalized navigation based on user authentication status. Unauthenticated users are prompted to sign in.
- **Dynamic Book Reviews:** Users can rate and review books, with reviews linked to their profiles.
- **Search and Book Pages:** Users can search for books and view book details along with user reviews.
- **Profile Pages:** Display personalized reviews for authenticated users and a way to view other users' reviews.

## Video Demo
[View Demo](https://www.loom.com/share/fca13ef154a24b8e90e252f6c3ec09f7?sid=c64f8fd3-4d88-41f4-b288-d226df09c765)

## Wireframes
![LoveLitReviewsWireFrames](https://github.com/SaraGolbek/LoveLitReviews/assets/145944090/f7f351dd-f1e5-42e9-b90d-2dcd7fc42ca4)

## Deployment
- **Front-end URL:** [Render Front-End](https://lovelitreviews.onrender.com)
- **Back-end URL:** [Render Back-End](https://lovelitreviews-backend.onrender.com)
- **Database:** Managed PostgreSQL instance on Render.

### Build Commands
- **Front-end:**
   - Build Command: `yarn build`
   - Publish Directory: `/dist`
- **Back-end:**
   - Start Command: `node server/index.js`

### Environment Variables
- `VITE_GOOGLE_BOOKS_API_KEY`
- `VITE_SECRET_KEY`
- `PG_HOST`
- `PG_PORT`
- `PG_DATABASE`
- `PG_USERNAME`
- `PG_PASSWORD`
- `DATABASE_URL`

## Known Issues
1. **Logout Issue:** Some cookies are not cleared properly during logout. Fix in progress.
2. **Refresh Issue:** Refreshing a page sometimes causes 401 errors due to cookie mismanagement. Fix in progress.

## Future Enhancements
- **Profile Features:** Add additional customization for user profiles.
- **Advanced Analytics:** Include metrics for popular books and reviews.

---
