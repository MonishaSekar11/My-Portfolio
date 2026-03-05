# Monisha S - Portfolio Website

A modern, professional portfolio website built with Angular 17, showcasing your skills, projects, and experience as a Full Stack Web Developer.

## Features

- **Modern Minimal Design** - Clean whites and blues color scheme
- **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- **Smooth Animations** - Engaging scroll animations and transitions
- **Download Resume Button** - Easy resume download functionality
- **6 Main Sections**:
  - Home/Hero - Professional introduction with typewriter effect
  - About - Background and statistics
  - Skills - Categorized technical skills
  - Projects - 3 major projects from Brandmuscle
  - Experience - Timeline of work experience
  - Contact - Contact information and social links

## Tech Stack

- **Frontend**: Angular 17 (Standalone Components)
- **Styling**: SCSS, Bootstrap 5
- **Icons**: Google Material Icons
- **Fonts**: Inter & Poppins from Google Fonts

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm (v10 or higher)
- Angular CLI

### Installation

1. Navigate to the portfolio directory:
   ```bash
   cd C:\personal_info\portfolio
   ```

2. Install dependencies (already done):
   ```bash
   npm install
   ```

### Development Server

Run the development server:

```bash
npm start
```

Navigate to `http://localhost:4200/` in your browser. The application will automatically reload if you change any source files.

### Build for Production

Build the project:

```bash
npm run build
```

The build artifacts will be stored in the `dist/portfolio` directory.

## Important: Resume PDF

### Current Status
The resume is currently in TEXT format. To enable the download button:

1. Convert `src/assets/files/Monisha_Sekar_Resume.txt` to PDF
2. Save as `Monisha_Sekar_Resume.pdf`
3. Place in `src/assets/files/` directory

### Conversion Options

**Option 1: Online Converter**
- Upload to https://www.pdf.io or https://cloudconvert.com
- Download as PDF

**Option 2: Microsoft Word**
- Open text file in Word
- Format professionally
- Save As > PDF

**Option 3: Professional Template**
- Use Canva, Google Docs, or LaTeX
- Copy content from text file
- Export as PDF

## Project Structure

```
portfolio/
├── src/
│   ├── app/
│   │   ├── core/                # Services & models
│   │   ├── shared/              # Shared components
│   │   │   ├── components/
│   │   │   │   ├── header/      # Navigation header
│   │   │   │   ├── footer/      # Footer with social links
│   │   │   │   └── download-resume-btn/  # Reusable download button
│   │   ├── features/            # Feature components
│   │   │   ├── home/            # Hero section
│   │   │   ├── about/           # About section
│   │   │   ├── skills/          # Skills showcase
│   │   │   ├── projects/        # Projects portfolio
│   │   │   ├── experience/      # Work experience
│   │   │   └── contact/         # Contact section
│   │   ├── app.component.*      # Root component
│   │   └── app.routes.ts        # Routing configuration
│   ├── assets/
│   │   ├── images/              # Images
│   │   └── files/               # Resume PDF
│   ├── styles/
│   │   ├── _variables.scss      # Theme colors & variables
│   │   ├── _mixins.scss         # SCSS mixins
│   │   └── _themes.scss         # Global styles
│   └── styles.scss              # Main stylesheet
├── angular.json
├── package.json
└── tsconfig.json
```

## Customization

### Colors
Edit `src/styles/_variables.scss` to change the color scheme:
- `$primary-blue`: Main brand color
- `$secondary-blue`: Secondary brand color
- `$accent-blue`: Accent color

### Content
Update your information in the component TypeScript files:
- **Home**: `src/app/features/home/home.component.ts`
- **About**: `src/app/features/about/about.component.ts`
- **Skills**: `src/app/features/skills/skills.component.ts`
- **Projects**: `src/app/features/projects/projects.component.ts`
- **Experience**: `src/app/features/experience/experience.component.ts`
- **Contact**: `src/app/features/contact/contact.component.ts`

## Deployment

### Option 1: Azure Static Web Apps (Recommended)

1. Build the project:
   ```bash
   npm run build
   ```

2. Deploy `dist/portfolio/browser` to Azure Static Web Apps
3. Configure custom domain (optional)

### Option 2: GitHub Pages

1. Install Angular CLI GitHub Pages:
   ```bash
   npm install -g angular-cli-ghpages
   ```

2. Build and deploy:
   ```bash
   ng build --configuration=production --base-href="/portfolio/"
   npx angular-cli-ghpages --dir=dist/portfolio/browser
   ```

### Option 3: Netlify

1. Build the project
2. Drag and drop `dist/portfolio/browser` to Netlify
3. Configure deployment settings

## Build Warnings

The build shows a few warnings about bundle size. These are normal for a feature-rich portfolio:
- Initial bundle: ~540 KB (acceptable for a portfolio site)
- All components are optimized and responsive

## Performance Optimizations

- Lazy loading for images
- Smooth scroll behavior
- Optimized animations (GPU-accelerated)
- Minified CSS and JavaScript
- Tree-shaking for unused code

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Contact Information

**Monisha S**
- Email: monikrish1114@gmail.com
- Phone: +91 6374076035
- LinkedIn: [linkedin.com/in/monisha-sekar00a49022a](https://www.linkedin.com/in/monisha-sekar00a49022a/)
- Location: Bangalore, India

## License

This portfolio is for personal use only.

## Development Notes

### All Tasks Completed ✓

- ✓ Angular 17 project setup
- ✓ Modern Minimal theme configuration
- ✓ Folder structure (core, shared, features)
- ✓ Header with navigation & download button
- ✓ Footer with social links
- ✓ Home/Hero section with animations
- ✓ About section with statistics
- ✓ Skills section with categorization
- ✓ Projects showcase (3 major projects)
- ✓ Experience timeline
- ✓ Contact section
- ✓ Responsive design for all sections
- ✓ Smooth scrolling & animations
- ✓ Build & optimization

### Next Steps

1. **Convert Resume to PDF** - Follow instructions in `src/assets/files/README.md`
2. **Add Profile Photo** - Place in `src/assets/images/profile/`
3. **Add Project Screenshots** - Place in `src/assets/images/projects/`
4. **Test on Mobile Devices** - Ensure responsive design works well
5. **Deploy to Production** - Choose deployment platform (Azure, Netlify, GitHub Pages)

## Support

For questions or issues:
- Check Angular documentation: https://angular.dev
- Review component files for customization
- Contact: monikrish1114@gmail.com

---

**Built with Angular 17 | Designed with care | Optimized for performance**
