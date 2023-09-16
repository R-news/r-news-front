This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

```
npm install - This command is used to install dependencies.
npm run dev - This command is used to start the frontend project in development mode.

```

## Скрипты

-   npm run dev - Start the frontend project.
-   npm run build - Build in production mode.
-   npm start - Start in production mode.
-   npm run prettier - Check TypeScript files with a linter.
-   npm run lint:ts - Check TypeScript files with a linter.
-   npm run lint:ts:fix - Fix TypeScript files with a linter.
-   npm run lint:scss - Check SCSS files with a style linter.
-   npm run lint:scss:fix - Fix SCSS files with a style linter.
-   npm run test:unit - Run unit tests using Jest.
-   npm run storybook - Start Storybook.
-   npm run storybook:build - Build Storybook.
-   npm run prepare - Pre-commit hooks.

---

## Project Architecture

The project is structured following the Feature Sliced Design methodology.

Link to documentation - [feature sliced design](https://feature-sliced.design/docs/get-started/tutorial)

---

## Working with Translations

The project uses the i18next library for handling translations.
Translation files are stored in public/locales.

For a smoother workflow, we recommend installing the plugin for example i18n ally for vscode.

i18next Documentation - [https://react.i18next.com/](https://react.i18next.com/)

---

## Tests

In the project, 2 types of tests are used:

1. Regular unit tests with Jest - npm run test:unit
2. Component tests with React Testing Library - npm run test:unit

More about tests - [test docs](/config//docs//tests.md)

---

## Linting

The project uses ESLint for TypeScript code checking and Stylelint for style-related files.

##### Running Linters

-   `npm run lint:ts` - TypeScript file linting check.
-   `npm run lint:ts:fix` - Fixing TypeScript files with linting.
-   `npm run lint:scss` - SCSS file style linting check.
-   `npm run lint:scss:fix` - Fixing SCSS files with style linting.

---

## Storybook

In the project, story cases are described for each component.

The file with story cases is created next to the component with the extension .stories.tsx.

You can run Storybook with the command:

-   `npm run storybook`

For more details about [Storybook](/config//docs/storybook.md)

## Project configuration

TODO

---

## CI pipeline and pre commit hooks

Ci pipeline TODO

In pre-commit hooks, we check the project using linters. The configuration is located in the /.husky directory.

---

## Entities

-   [User](/src/entities/User)

## Features
