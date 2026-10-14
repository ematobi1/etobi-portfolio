# Etobi Portfolio

Personal portfolio and blog for Emmanuel Tobi, built with **Vue 3 + TypeScript + Vite** and **Firebase** (Auth + Firestore).

## Features

- Animated matrix-style landing page and page transitions
- Projects page driven by `src/data/projects.ts`
- Blog backed by Firestore, with bundled fallback posts when Firestore is unavailable
- Owner-only admin page (`/admin`) for publishing posts, behind Google sign-in
- Contact form via EmailJS

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # type-check (vue-tsc) + production build into dist/
npm run preview  # serve the production build
```

## Firebase

- Web config lives in `src/firebase/firebase.ts` (Firebase web API keys are public identifiers, not secrets).
- `firestore.rules` allows public reads of `blogPosts` and restricts writes to the site owner's verified account. Deploy with `firebase deploy --only firestore:rules`.

## Project structure

```
src/
  views/        route pages (Home, About, Projects, Blog, BlogDetail, Contact, AdminBlog)
  components/   ProjectCard, BlogCard, ContactForm, matrix effects
  composables/  useAuth, useBlog (Firestore access)
  data/         static projects and fallback blog posts
  router/       vue-router routes
```
