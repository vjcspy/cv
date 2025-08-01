# Next.js CV Application

A modern, responsive CV/Resume application built with Next.js, TypeScript, and Tailwind CSS. Features dark mode toggle and PDF download functionality.

## 🏗️ Project Structure

```
next-cv/
├── src/
│   ├── components/
│   │   └── CV.tsx              # Main CV component
│   ├── pages/
│   │   ├── _app.tsx             # Next.js app wrapper
│   │   ├── _document.tsx        # Custom document
│   │   └── index.tsx            # Home page
│   └── styles/
│       └── globals.css          # Global styles
├── public/                      # Static assets
├── package.json
└── README.md
```

## 🎨 UI Structure Overview

The CV application consists of a single-page layout with the following sections:

### 1. Header Section
- **Profile Photo Placeholder**: 150px width, positioned on the left
- **Name & Title**: "JILL MORGAN" with "Marketing Manager" subtitle
- **Background**: Blue gradient (`bg-blue-600`)
- **Layout**: Flexbox with photo on left, text content on right

### 2. Contact Information
- **Grid Layout**: 2-column responsive grid
- **Content**: Phone, Email, Address, LinkedIn
- **Styling**: Gray text with proper spacing

### 3. Summary Section
- **Content**: Professional summary paragraph
- **Styling**: Clean typography with proper line height

### 4. Skills Section
- **Timeline Design**: Vertical timeline with blue line and circular icons
- **Three Main Categories**:
  1. **Frontend/Client-side** 💻
     - JavaScript/TypeScript (Angular, React, Next.js, etc.)
     - C# (Avalonia)
  2. **Server/Application** ⚙️
     - Node.js, C#, Java, PHP, Python
     - Database technologies
  3. **Infrastructure** 🏗️
     - Cloud (AWS)
     - DevOps & Orchestration
     - Networking & Servers

### 5. Experience Section
- **Timeline Layout**: Consistent with skills section
- **Three Positions**:
  1. Senior Sales Representative (2018-present)
  2. Customer Relationship Officer (2016-2018)
  3. Part-time Retail Associate (2014-2016)
- **Content Structure**: Date, title, company, bullet points, key achievements

### 6. Education Section
- **Two Main Entries**:
  1. **Academy of Finance** - Securities Specialization
  2. **Professional Certifications** - AWS, Harness, K8S, Terraform
- **Layout**: Timeline design with icons and detailed descriptions

### 7. Floating Action Buttons
- **Position**: Fixed bottom-right corner
- **Two Buttons**:
  1. **Dark Mode Toggle**: Sun/Moon icons with yellow/gray styling
  2. **PDF Download**: Download icon linking to `/cv.pdf`
- **Features**: Hover effects, smooth transitions, responsive design

## 🌙 Dark Mode Implementation

### State Management
- Uses React `useState` hook for `isDarkMode` state
- Toggle function: `toggleDarkMode()`

### Color Scheme
- **Light Mode**: 
  - Background: `bg-gray-50` (main), `bg-white` (content)
  - Text: `text-gray-800` (headers), `text-gray-700` (body)
  - Borders: `border-gray-200`

- **Dark Mode**:
  - Background: `bg-gray-900` (main), `bg-gray-800` (content)
  - Text: `text-gray-100` (headers), `text-gray-300` (body)
  - Borders: `border-gray-600`

### Transition Effects
- All color changes use `transition-colors duration-300`
- Smooth animations for better UX

## 🎯 Key Features

1. **Responsive Design**: Mobile-first approach with Tailwind CSS
2. **Dark Mode**: Complete theme switching with smooth transitions
3. **Timeline Layout**: Professional timeline design for skills and experience
4. **PDF Download**: Direct link to downloadable CV
5. **Modern Typography**: Clean, readable font styling
6. **Accessibility**: Proper semantic HTML and ARIA labels

## 🛠️ Technical Stack

- **Framework**: Next.js 15.4.5 (Pages Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **UI Library**: React 19.1.0
- **Build Tool**: Turbopack (Next.js)

## 🚀 Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Responsive Breakpoints

- **Mobile**: Default styling
- **Tablet**: Grid adjustments for contact info
- **Desktop**: Full layout with optimal spacing

## 🎨 Design Principles

1. **Clean & Professional**: Minimal design focusing on content
2. **Consistent Spacing**: Uniform padding and margins throughout
3. **Visual Hierarchy**: Clear typography scale and color contrast
4. **Interactive Elements**: Hover states and smooth transitions
5. **Print-Friendly**: Hidden elements for PDF generation

## 🔧 Customization Guide

### Adding New Sections
1. Follow the existing timeline pattern
2. Use consistent spacing (`p-8`, `mb-6`)
3. Apply dark mode classes with conditional rendering
4. Include proper semantic HTML structure

### Modifying Colors
- Primary: Blue (`bg-blue-600`, `text-blue-600`)
- Backgrounds: Gray scale for light/dark modes
- Text: Hierarchical gray scale

### Extending Functionality
- Add new floating buttons in the action buttons container
- Implement additional state management as needed
- Follow existing pattern for transitions and hover effects

## 📄 Content Structure

The CV content is hardcoded in the `CV.tsx` component. To make it dynamic:
1. Extract content to JSON/API
2. Create interfaces for type safety
3. Implement content management system

## 🎯 Future Enhancements

- [ ] Dynamic content management
- [ ] Multiple CV templates
- [ ] Real PDF generation
- [ ] Print optimization
- [ ] Animation improvements
- [ ] Accessibility enhancements

---

**Note**: This project uses Next.js Pages Router architecture. The main CV component is located in `src/components/CV.tsx` and is rendered through `src/pages/index.tsx`.
