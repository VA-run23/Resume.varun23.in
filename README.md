# Minimalistic Resume Website

A clean, minimalistic, and print-friendly resume website inspired by modern design principles.

## Features

- **Minimalistic Design**: Clean and professional layout focusing on content
- **Single Page Application**: Smooth navigation between sections without page reloads
- **Print-Ready**: Press `Ctrl + P` (or `Cmd + P` on Mac) to download as PDF
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Subtle entrance animations for better user experience
- **No Dependencies**: Pure HTML, CSS, and JavaScript - no frameworks required

## Sections

1. **About**: Professional summary and expertise
2. **Education**: Academic background and achievements
3. **Projects**: Key projects with descriptions and tech stacks
4. **Skills**: Technical proficiencies organized by category
5. **Certifications**: Professional certifications and courses

## Usage

### Local Development

1. Simply open `index.html` in your browser
2. No build process or server required!

### Customization

#### Update Personal Information
Edit `index.html`:
- Change name, tagline, and initials in the header section
- Update education details
- Add/modify projects
- Update skills and certifications
- Change social links in the footer

#### Styling
Edit `styles.css`:
- Modify color scheme in `:root` variables
- Adjust spacing, fonts, and layout
- Customize print styles

#### Functionality
Edit `script.js`:
- Modify navigation behavior
- Adjust animation settings
- Add custom features

### Print to PDF

**Method 1: Keyboard Shortcut**
- Press `Ctrl + P` (Windows/Linux) or `Cmd + P` (Mac)
- In the print dialog, select "Save as PDF"
- Click Save

**Method 2: Browser Menu**
- Click the three dots menu (⋮) in your browser
- Select "Print"
- Choose "Save as PDF" as the destination
- Click Save

## Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload the resume folder contents
3. Go to Settings > Pages
4. Select main branch as source
5. Your resume will be live at `https://yourusername.github.io/repository-name/`

### Netlify
1. Drag and drop the resume folder to Netlify
2. Your site will be live instantly with a custom URL

### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Navigate to resume folder
3. Run `vercel`
4. Follow the prompts

## Browser Compatibility

- ✅ Chrome (recommended for best print results)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## Tips for Best Results

1. **For Print/PDF**:
   - Use Chrome for best print quality
   - Check "Background graphics" in print settings for colored elements
   - Use "A4" or "Letter" paper size
   - Margins: Default or 0.5 inch

2. **Customization**:
   - Keep content concise for single-page print
   - Use consistent formatting across sections
   - Test print layout after major changes

3. **Performance**:
   - Optimize images if adding photos
   - Keep JavaScript minimal
   - No external dependencies means fast loading

## File Structure

```
resume/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # Navigation and print functionality
└── README.md          # This file
```

## Credits

Design inspired by minimalistic resume websites with a focus on content and readability.

---

**Built with ❤️ by Varun D Magar**
