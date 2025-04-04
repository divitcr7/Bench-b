# Benchmark Insurance Platform

Web application for Benchmark Insurance, built with React and TypeScript.

## 🛠️ Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Styling:**
  - Tailwind CSS
  - SCSS
  - CSS Variables for theming
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **Icons:** Lucide React
- **Animations:** Swiper

## 📦 Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/benchmark-insurance.git
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

## 🗺️ Routes

The application includes the following routes:

- `/` - Home page

  - Hero section
  - Banner section
  - Best Deals section
  - Best Offers section
  - Specialities section
  - Testimonials
  - Contact form

- `/about` - About page

  - Company information
  - Team details
  - Mission and vision

- `/industry` - Industry page

  - Industry insights
  - Market trends
  - Insurance types

- `/onboarding` - Onboarding flow

  - User registration
  - Profile setup
  - Insurance preferences

- `/blog` - Blog page

  - Blog post listings
  - Featured articles
  - Category filtering
  - Search functionality

- `/blog/:id` - Individual blog post

  - Full article content
  - Author information
  - Related posts
  - Comments section

## 🎨 Component Library

The project includes a custom UI component library with:

- **Button Component**

  - Variants: filled, outlined, text
  - Sizes: small, medium, large
  - Colors: primary, secondary, success, error, warning
  - Loading state
  - Icon support

- **Form Components**
  - Input fields
  - Text areas
  - Validation states
  - Error handling
  - Required field indicators

## 🎯 Project Structure

```
src/
├── components/
│   ├── Common/           # Shared components
│   │   ├── ui/          # Reusable UI components
│   │   ├── Header/
│   │   ├── Footer/
│   │   └── ...
│   ├── Home/            # Home page components
│   ├── About/           # About page components
│   ├── Industry/        # Industry page components
│   ├── Blogs/           # Blog page components
│   └── Onboarding/      # Onboarding components
├── pages/               # Page components
├── styles/              # Global styles and variables
├── assets/             # Static assets
└── interfaces/         # TypeScript interfaces
```

## 🎨 Design System

The project uses a design system with:

- **Colors**

  - Primary: #2563eb
  - Secondary: #4f46e5
  - Semantic colors (success, error, warning)
  - Neutral colors
  - Dark mode support

- **Typography**

  - Font family: Gilroy, Abel
  - Responsive text sizes
  - Consistent line heights

- **Spacing**

  - Consistent spacing scale
  - Responsive padding and margins
  - Our typography and spacing scales are defined in tailwind.config.js.

- **Components**
  - Consistent border radius
  - Shadow system
  - Transition effects

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Style

- Follow TypeScript best practices
- Use functional components with hooks
- Implement proper prop typing
- Follow BEM naming convention for CSS
- Use Tailwind utility classes where appropriate

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
