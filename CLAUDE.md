# Claude Development Guidelines

This document outlines conventions and patterns for this TypeScript/JavaScript web application. Claude should follow these guidelines when working on the codebase.

## Project Overview

- **Type:** Web Application
- **Language:** JavaScript/TypeScript
- **Testing:** Jest
- **Code Style:** ESLint + Prettier defaults

## Code Style & Formatting

- Follow ESLint rules configured in `.eslintrc`
- Use Prettier for automatic code formatting
- Enforce consistent formatting on commits
- Use TypeScript for type safety where applicable
- Prefer `const` over `let`, avoid `var`

## Project Structure

```
devflow-testbed/
├── src/              # Source code
├── tests/            # Test files
├── .claude/          # Claude Code configuration
├── package.json      # Dependencies and scripts
└── README.md         # Project documentation
```

## Naming Conventions

- **Files:** Use kebab-case for file names (`user-service.ts`, `auth-controller.ts`)
- **Variables/Functions:** Use camelCase (`getUserById`, `isActive`)
- **Constants:** Use UPPER_SNAKE_CASE (`MAX_RETRIES`, `API_TIMEOUT`)
- **Classes/Types:** Use PascalCase (`UserService`, `AuthConfig`)
- **Directories:** Use lowercase with hyphens where needed

## TypeScript Guidelines

- Enable strict mode in `tsconfig.json`
- Define types for function parameters and return values
- Use interfaces for object contracts
- Avoid `any` type; use `unknown` if necessary
- Prefer type unions and literal types over enums

## Testing with Jest

- Test file naming: `*.test.ts` or `*.spec.ts`
- Place tests in `tests/` directory mirroring `src/` structure
- Aim for meaningful test descriptions
- Test behavior, not implementation details
- Mock external dependencies appropriately
- Run tests before committing: `npm test`

## Commit Guidelines

- Use conventional commits: `feat:`, `fix:`, `docs:`, `test:`, `refactor:`, etc.
- Provide clear, concise commit messages
- Reference issue numbers when applicable
- Keep commits focused on single concerns

## Development Workflow

1. Create feature branch from `master`
2. Make changes following code conventions
3. Write or update tests for changes
4. Run `npm test` and linting checks
5. Create pull request with description
6. Address review feedback
7. Merge when approved

## Code Quality

- Avoid deeply nested code (max 3 levels)
- Keep functions focused and small
- Use early returns to reduce nesting
- Add comments only for non-obvious logic
- Remove unused code and imports
- Prefer composition over inheritance

## Git Practices

- Main branch: `master`
- Branch naming: `feature/description` or `fix/description`
- Keep history clean and linear
- Don't force push to shared branches
- Use `.gitignore` to exclude local files

## External Dependencies

- Review new dependencies before adding
- Keep dependencies up to date
- Prefer smaller, focused packages
- Minimize bundle size impact
- Document why a dependency is needed

## When in Doubt

- Prioritize readability over cleverness
- Make changes that are easy to understand and maintain
- Keep it simple—avoid over-engineering
- Ask questions rather than guessing
- Refer to existing patterns in the codebase
