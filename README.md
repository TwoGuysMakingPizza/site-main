# Heat Tire Feel

A modern, responsive website built with Jekyll and Tailwind CSS for GitHub Pages.

## Features

- **Responsive Design**: Mobile-first design that works on all devices
- **Modern UI**: Clean, professional design using Tailwind CSS
- **Jekyll Powered**: Static site generator for easy maintenance and GitHub Pages compatibility
- **No Code Repetition**: DRY principle with Jekyll layouts and includes
- **Fast Loading**: Optimized for performance
- **SEO Friendly**: Clean URLs and semantic HTML

## Pages

- **Home**: Landing page with hero section and feature highlights
- **About**: Company story, mission, values, and team information
- **Menu**: Interactive menu with categories and items
- **Book**: Reservation/booking form with validation
- **Reviews**: Customer testimonials and review submission form
- **Contact**: Contact form and business information

## Local Development

### Prerequisites

- Ruby (version 2.7 or higher)
- Bundler gem

### Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/gold-requiem/heat-tire-feel.git
   cd heat-tire-feel
   ```

2. Install dependencies:
   ```bash
   bundle install
   ```

3. Run the development server:
   ```bash
   bundle exec jekyll serve
   ```

4. Open your browser and visit `http://localhost:4000`

### Development Commands

- `bundle exec jekyll serve` - Start development server
- `bundle exec jekyll serve --livereload` - Start server with live reload
- `bundle exec jekyll build` - Build the site for production
- `bundle exec jekyll serve --drafts` - Include draft posts

## GitHub Pages Deployment

This site is configured to work with GitHub Pages out of the box:

1. Push your changes to the `main` branch
2. Go to your repository settings
3. Navigate to "Pages" section
4. Select "Deploy from a branch" as source
5. Choose `main` branch and `/ (root)` folder
6. Your site will be available at `https://gold-requiem.github.io/heat-tire-feel/`

## Project Structure

```
├── _config.yml          # Jekyll configuration
├── _layouts/            # Page layouts
│   └── default.html     # Main layout template
├── _includes/           # Reusable components
│   ├── nav.html         # Navigation component
│   └── footer.html      # Footer component
├── styles/              # CSS files
│   └── main.css         # Custom styles
├── js/                  # JavaScript files
│   └── main.js          # Main JavaScript functionality
├── index.html           # Homepage
├── about.md             # About page
├── menu.md              # Menu page
├── book.md              # Booking page
├── reviews.md           # Reviews page
├── contact.md           # Contact page
├── Gemfile              # Ruby dependencies
└── README.md            # This file
```

## Customization

### Site Configuration

Edit `_config.yml` to update:
- Site title and description
- Navigation menu items
- Other site-wide settings

### Styling

- Main styles are in `styles/main.css`
- The site uses Tailwind CSS via CDN
- Custom styles can be added to the CSS file

### Content

- Pages are in Markdown format with YAML front matter
- Update page content by editing the respective `.md` files
- Navigation is automatically generated from `_config.yml`

### Forms

Current forms are set up for demonstration purposes. For production:
- Integrate with a form service like Formspree, Netlify Forms, or similar
- Update the form action attributes in the respective pages
- Add proper server-side validation and processing

## Technologies Used

- **Jekyll**: Static site generator
- **Tailwind CSS**: Utility-first CSS framework
- **JavaScript**: Vanilla JS for interactivity
- **GitHub Pages**: Hosting platform
- **Markdown**: Content authoring
- **YAML**: Configuration and data

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test locally
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).
