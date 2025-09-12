# Contributing to CEOWRITES Blog

Thank you for considering contributing to the CEOWRITES blog! We appreciate your interest in helping us improve this project.

## Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [Development Workflow](#development-workflow)
- [Code Style](#code-style)
- [Commit Message Guidelines](#commit-message-guidelines)
- [Pull Request Process](#pull-request-process)
- [Reporting Bugs](#reporting-bugs)
- [Feature Requests](#feature-requests)
- [License](#license)

## Code of Conduct

This project and everyone participating in it is governed by our [Code of Conduct](CODE_OF_CONDUCT.md). By participating, you are expected to uphold this code.

## Getting Started

1. Fork the repository on GitHub
2. Clone your fork locally
   ```bash
   git clone https://github.com/your-username/emmanuel-blog.git
   cd emmanuel-blog
   ```
3. Install dependencies
   ```bash
   npm install
   ```
4. Create a branch for your changes
   ```bash
   git checkout -b feature/your-feature-name
   ```

## Development Workflow

1. Make your changes following the code style guidelines
2. Write tests for your changes
3. Run tests and ensure they pass
   ```bash
   npm test
   ```
4. Run the development server to test your changes
   ```bash
   npm run dev
   ```
5. Commit your changes following the commit message guidelines
6. Push your changes to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request

## Code Style

- Use TypeScript for all new code
- Follow the [Next.js style guide](https://nextjs.org/docs/basic-features/eslint)
- Use functional components with TypeScript interfaces
- Keep components small and focused on a single responsibility
- Use meaningful variable and function names
- Add comments to explain complex logic
- Write tests for new components and features

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification. Here are some examples:

```
feat: add new blog post component
fix: resolve image loading issue in blog post
docs: update README with setup instructions
style: fix code style issues
refactor: improve component structure
test: add tests for blog utilities
chore: update dependencies
```

## Pull Request Process

1. Ensure your code passes all tests
2. Update the documentation if necessary
3. Ensure your branch is up to date with the main branch
4. Open a pull request with a clear title and description
5. Reference any related issues in your PR description
6. Wait for code review and address any feedback

## Reporting Bugs

Please use GitHub Issues to report bugs. Include the following information:

- A clear, descriptive title
- Steps to reproduce the issue
- Expected behavior
- Actual behavior
- Screenshots if applicable
- Browser/Device information
- Any error messages

## Feature Requests

We welcome feature requests! Please open an issue with the following information:

- A clear, descriptive title
- A detailed description of the feature
- Any relevant use cases or examples
- Any potential drawbacks or considerations

## License

By contributing, you agree that your contributions will be licensed under the project's [MIT License](LICENSE).
