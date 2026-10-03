# Hamza Khan Website - Owner Guide

Welcome to the Content Management System (CMS) for your website. This guide will help you manage your content, media, and site settings without needing to edit any code.

## Accessing the CMS Locally
1. Start your servers in two terminal windows:
   - **Terminal 1:** `npm run dev`
   - **Terminal 2:** `npm run cms`
2. Open your browser and navigate to:
   - `http://localhost:5173/admin/` (or `http://localhost:5173/admin`)
3. When running in production (e.g. Netlify/Vercel with Decap CMS Git Gateway), navigate to `/admin/` and log in with your CMS credentials.

---

## 1. Editing Existing Pages (Home, About, Speaking, Coaching, Contact)
1. On the left sidebar, click **Pages**.
2. Select the page you want to edit:
   - **Homepage**: Eyebrow, headline, subline, call-to-actions, featured video, services, story preview, closing inquiry.
   - **About Page**: Intro heading, story introduction, portrait image, and narrative chapters.
   - **Speaking & Workshops**: Page descriptions, topics offered, summaries, and audiences.
   - **Coaching**: Coaching headline, challenges addressed, 1:1 individual offer details, and founder pathway.
   - **Contact**: Intro text, privacy statement, response messages, and social links.
3. Update the text or image fields.
4. Click **Save**.

## 2. Managing Media (Photos & Videos)
1. In the top navigation bar, click the **Media** tab.
2. You can upload new images directly from your computer into the media library or select existing assets.
3. In page editors, click **Choose an image** to select or upload images for heroes, portraits, and cards.
4. Uploaded media is saved directly into `/media/` on your site.

## 3. Creating a New Custom Page
1. On the left sidebar, click **Custom Pages**.
2. Click **New Custom Page** at the top right.
3. Fill in:
   - **Title**: The title of the page.
   - **Slug**: The URL path (e.g., `speaking-rider` becomes `/speaking-rider`).
   - **SEO Meta**: Meta title and meta description.
   - **Sections**: Add modular section blocks (Rich Text, Call to Action).
4. Set status to **published** (or **draft** while working on it).
5. Click **Save**.

## 4. Editing Site Settings & Theme
1. On the left sidebar, click **Settings**.
2. **Site Settings**:
   - Site Name (`Hamza Khan`)
   - Site Tagline (`Speaker & Communication Coach`)
   - Site Description (used for default SEO description)
   - Navigation links (add/edit items in the header nav)
3. **Theme Settings**:
   - Background Color
   - Foreground Color
   - Surface Color
   - Primary Accent
   - Secondary Accent
   - CTA Accent
   *Note: Theme color changes are applied globally via CSS custom properties.*

## 5. What Requires Developer Help?
While you have full control over content, you will still need a developer for:
- Adding completely new architectural features, external database integrations, or API routes.
- Changing core React component layouts or structural styling in CSS.
- Modifying the underlying CMS schema (e.g. adding brand-new field types to pages).
- Domain and DNS routing changes.
