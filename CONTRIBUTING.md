# Contributing to CEOWRITES Blog

Thank you for considering contributing to the CEOWRITES blog! We appreciate your interest in helping us improve this project. This guide will help you get started with contributing to our codebase.

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
5. Run linting and type checking
   ```bash
   npm run lint
   npm run type-check
   ```
6. Commit your changes following the commit message guidelines
6. Push your changes to your fork
   ```bash
   git push origin feature/your-feature-name
   ```
7. Open a Pull Request

## Code Style

- Use TypeScript for all new code with strict type checking
- Follow the project's ESLint and Prettier configuration
- Write meaningful variable and function names using camelCase
- Use PascalCase for component names and interfaces
- Keep functions small and focused on a single responsibility
- Add JSDoc comments for public APIs and complex logic
- Follow the existing code style and patterns in the codebase
- Use functional components with TypeScript interfaces
- Prefer async/await over Promise chains
- Handle all errors appropriately
- Write tests for new features and bug fixes

## Commit Message Guidelines

We follow the [Conventional Commits](https://www.conventionalcommits.org/) specification for our commit messages. This allows us to automatically generate changelogs and determine semantic version numbers.

### Format
```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

### Types

- `feat`: A new feature (triggers a MINOR version bump)
- `fix`: A bug fix (triggers a PATCH version bump)
- `docs`: Documentation only changes
- `style`: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- `refactor`: A code change that neither fixes a bug nor adds a feature
- `perf`: A code change that improves performance
- `test`: Adding missing tests or correcting existing tests
- `build`: Changes that affect the build system or external dependencies
- `ci`: Changes to CI configuration files and scripts
- `chore`: Other changes that don't modify src or test files
- `revert`: Revert a previous commit

### Examples

```
feat(blog): add related posts component
fix(auth): handle expired refresh tokens
docs: update README with new setup instructions
style: format code with prettier
refactor(utils): extract date formatting logic
test: add unit tests for authentication
chore: update dependencies
```

### Commit Message Body

- Use the imperative mood ("change" not "changed" nor "changes")
- Include the motivation for the change and contrast with previous behavior
- Reference any related issues or pull requests

### Commit Message Footer

- Reference related GitHub issues using `Closes #123` or `Fixes #123`
- List any breaking changes with `BREAKING CHANGE:` followed by a description

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
