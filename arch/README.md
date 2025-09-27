
# How to publish this on GitHub Pages

**Option A (personal site, simplest):**
1. Create a new GitHub repository named exactly: `your-username.github.io`.
2. Upload everything in this folder to that repo (or push via Git).
3. GitHub will auto-publish your site at `https://your-username.github.io/` within a minute.

**Option B (project site inside any repo):**
1. Create any repo name (e.g., `design-portfolio`).
2. Upload these files to the repo root (or to `/docs` if you prefer that structure).
3. Go to **Settings → Pages**:
   - Source: **Deploy from a branch**
   - Branch: `main` (or `master`) and the `/root` (or `/docs`) folder you used.
4. Your site appears at the URL GitHub shows (something like `https://your-username.github.io/design-portfolio/`).

**Editing the site:**
- Home: `index.html`
- Styles: `assets/style.css`
- Project 1 brief: `projects/micro-cabin/index.html`

**Adding your images for Project 1:**
- Put exports in `projects/micro-cabin/images/` (create folder if needed).
- Insert them into `projects/micro-cabin/index.html` where indicated.
- Recommended filenames: `p1_parti-grid.jpg`, `p1_massing-9up.jpg`, `p1_plan.png`, `p1_section.png`, `p1_render1.jpg`, `p1_render2.jpg`, `p1_diagrams.png`.
