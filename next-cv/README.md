# Next.js CV Application

Dinh Khoi's CV, rendered as a Next.js site styled to match the print CV (`.assets/CV_FullStack_Dinh Khoi (Mr.).pdf`
in the repo root). Features a dark mode toggle and a "Download PDF" button that serves a PDF printed from this
site itself.

## 🏗️ Project Structure

```
next-cv/
├── src/
│   ├── data/
│   │   └── cv.ts                 # All CV content (single source of truth)
│   ├── components/
│   │   └── CV.tsx                # Renders the data above with PDF-like styling
│   ├── pages/
│   │   ├── _app.tsx              # Next.js app wrapper (Carlito font)
│   │   ├── _document.tsx         # Custom document / meta tags
│   │   └── index.tsx             # Home page
│   └── styles/
│       └── globals.css           # Palette CSS variables, print rules
├── public/
│   ├── badges/                   # Certification badge images
│   └── cv.pdf                    # Regenerated from the live site (see below)
├── package.json
└── README.md
```

## ✏️ Editing content

All CV content (summary, skills, projects, certifications, etc.) lives in **`src/data/cv.ts`** as a single typed
object. Edit that file to update the CV — `CV.tsx` only renders it, no content is hardcoded in JSX.

## 🚀 Development

```bash
# Install dependencies (npm only — this repo uses package-lock.json)
npm install

# Run development server
npm run dev

# Lint
npm run lint

# Build for production
npm run build

# Start production server (used for PDF regeneration below)
npm start
```

## 📄 Regenerating `public/cv.pdf`

The PDF is printed from the running site using headless Chrome, so it always matches what's on screen:

```bash
npm run build
npm start            # serves the production build on http://localhost:3000
npm run pdf          # in another terminal: prints the page to public/cv.pdf
```

`npm run pdf` runs:

```
"/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer --print-to-pdf=public/cv.pdf http://localhost:3000
```

Requires `npm start` to be running first (adjust the Chrome path for your OS). After regenerating, verify with
`pdfinfo public/cv.pdf` (expect US Letter, ~4 pages) and inspect each page (e.g. `pdftoppm -r 100 -png public/cv.pdf out`)
before committing.

## 🎨 Styling notes

- Colors are CSS variables in `globals.css` (light palette sampled from the source PDF, plus dark-mode overrides).
  Print and PDF generation always force the light palette regardless of the on-screen dark-mode toggle.
- `@page { size: Letter; }` plus `break-inside: avoid` on each project/skill block keeps the printed layout close
  to the original PDF (no orange bars disappearing, no project split across a page boundary).
- Body font is Google Font **Carlito** (metric-compatible with Calibri, the PDF's body font) via `next/font/google`;
  the name/subtitle use the system `Arial, Helvetica, sans-serif` stack, matching the PDF.

## 🌙 Dark Mode

A floating button (bottom-right, hidden in print) toggles `data-theme="dark"` on the CV container, which swaps the
CSS variables above to a dark palette. The floating buttons and dark mode never appear in the printed/PDF output.

