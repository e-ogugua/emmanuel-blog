# CEOWRITES – Emmanuel's Blog

[![CI/CD](https://github.com/ceowrites/emmanuel-blog/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/ceowrites/emmanuel-blog/actions/workflows/ci-cd.yml)
[![codecov](https://codecov.io/gh/ceowrites/emmanuel-blog/graph/badge.svg?token=YOUR_TOKEN)](https://codecov.io/gh/ceowrites/emmanuel-blog)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A modern personal blog built with Next.js 14, featuring insights on Technology, Business, and Faith by Emmanuel.

## 🚀 Features

- **Clean, Modern Design**: Warm, storytelling-focused layout with premium aesthetic
- **38+ High-Quality Blog Posts**: Comprehensive content across Technology, Business, Faith, and Personal Journey categories
- **SEO Optimized**: Complete SEO infrastructure with sitemap, RSS feed, structured data, and Open Graph support
- **Performance Focused**: Optimized for Core Web Vitals with caching, compression, and efficient loading
- **Mobile-First**: Responsive design optimized for African mobile-first usage patterns
- **Accessibility**: WCAG compliant with proper semantic HTML and screen reader support
- **Dark/Light Mode**: Seamless theme switching with system preference detection

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS v4 with custom design tokens
- **Typography**: Inter (headings) + Lora (body) for warm, professional feel
- **UI Components**: shadcn/ui with custom styling
- **Analytics**: Vercel Analytics and Speed Insights
- **Deployment**: Optimized for Vercel deployment

## Design System

### Colors
- **Primary**: Emerald (#059669) - for CTAs and highlights
- **Secondary**: Gold (#d97706) - for accents and links
- **Background**: Clean whites and soft grays
- **Text**: Charcoal gray (#475569) for optimal readability

### Typography
- **Headings**: Lora (serif) for warm, storytelling feel
- **Body**: Inter (sans-serif) for clean readability
- **Special**: Custom `.story-text` class for enhanced storytelling sections

## Content Categories

1. **Technology** (12 posts)
   - AI development tools, blockchain, mobile-first development
   - Cloud computing, IoT, Web3 applications
   - African tech ecosystem insights

2. **Business** (12 posts)
   - Startup scaling, digital marketing, remote team management
   - Funding strategies, sustainable business models
   - Customer acquisition and retention

3. **Faith** (12 posts)
   - Purpose-driven entrepreneurship, ethical leadership
   - Work-life integration, community building
   - Stewardship and humility in business

4. **Personal Journey** (2 posts)
   - Emmanuel's story from farm to tech
   - The 10,000 apps mission and EmmanuelOS vision

## SEO Features

- **XML Sitemap**: Auto-generated with proper priorities and change frequencies
- **RSS Feed**: Full-content RSS feed at `/rss.xml`
- **Structured Data**: JSON-LD markup for articles, person, and organization
- **Meta Tags**: Comprehensive Open Graph and Twitter Card support
- **Performance**: Optimized Core Web Vitals and Lighthouse scores

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/ceowrites/emmanuel-blog.git
   cd emmanuel-blog
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Set up environment variables
   ```bash
   cp .env.example .env.local
   # Update the environment variables as needed
   ```

4. Run the development server
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

Run the test suite with coverage:
```bash
npm test
```

Run tests in watch mode:
```bash
npm run test:watch
```

Generate test coverage report:
```bash
npm run test:coverage
```

### Testing Guidelines
- Unit tests should be placed in `__tests__` directories next to the components they test
- Test files should be named `*.test.tsx` or `*.spec.tsx`
- Use React Testing Library for component testing
- Mock external dependencies and API calls

## 🛠️ Development Workflow

1. Create a new branch for your feature or bugfix
   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes and write tests

3. Run the linter and tests
   ```bash
   npm run lint
   npm test
   ```

4. Commit your changes with a descriptive message
   ```bash
   git commit -m "feat: add new feature"
   ```

5. Push your branch and create a pull request.

### Environment Variables

Create a `.env.local` file in the root directory:

```bash
# Analytics (optional)
NEXT_PUBLIC_VERCEL_ANALYTICS_ID=your_analytics_id

# Site Configuration
NEXT_PUBLIC_SITE_URL=https://ceowrites.com
```

## 🤝 Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

### Code Style
- Follow the [Next.js style guide](https://nextjs.org/docs/basic-features/eslint)
- Use TypeScript for all new code
- Write meaningful commit messages following [Conventional Commits](https://www.conventionalcommits.org/)
- Keep components small and focused on a single responsibility

### Pull Request Process
1. Ensure any install or build dependencies are removed before the end of the layer when doing a build.
2. Update the README.md with details of changes to the interface, this includes new environment variables, exposed ports, useful file locations and container parameters.
3. Increase the version numbers in any examples files and the README.md to the new version that this Pull Request would represent. The versioning scheme we use is [SemVer](http://semver.org/).
4. You may merge the Pull Request in once you have the sign-off of two other developers, or if you do not have permission to do that, you may request the second reviewer to merge it for you.

## 📝 License

Distributed under the MIT License. See `LICENSE` for more information.

## 📞 Contact

Emmanuel - [@emmachuka](https://twitter.com/emmachuka) - e.ogugua.dev@gmail.com

Project Link: [https://github.com/ceowrites/emmanuel-blog](https://github.com/ceowrites/emmanuel-blog)

## 🙏 Acknowledgments

- [Next.js Documentation](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Vercel](https://vercel.com/).

## Contact

Emmanuel - [@emmanuel](https://twitter.com/emmanuel) - emmanuel@ceowrites.com

Project Link: [https://github.com/emmanuel/ceowrites-blog](https://github.com/emmanuel/ceowrites-blog)

---

Built with ❤️ and purpose by Emmanuel. Powered by stories, faith, and endless curiosity.
\`\`\`

```tsx file="" isHidden
