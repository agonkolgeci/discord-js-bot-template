# Contributing to Discord.js Bot Template 🤝

First off, thank you for considering contributing to the **Discord.js Bot Template**! It's people like you who make the open-source community such an amazing place to learn, inspire, and create.

Please take a moment to review this document to make the contribution process smooth and effective for everyone.

---

## 📂 Table of Contents

1.  [Code of Conduct](#-code-of-conduct)
2.  [How Can I Contribute?](#-how-can-i-contribute)
    *   [Reporting Bugs](#reporting-bugs)
    *   [Suggesting Features](#suggesting-features)
    *   [Submitting Pull Requests](#submitting-pull-requests)
3.  [Local Development Setup](#-local-development-setup)
4.  [Style & Coding Guidelines](#-style--coding-guidelines)
5.  [Pull Request Guidelines](#-pull-request-guidelines)

---

## 📜 Code of Conduct

By participating in this project, you agree to maintain a respectful, welcoming, and collaborative environment. Please treat everyone with kindness and respect, regardless of their experience level.

---

## 💡 How Can I Contribute?

### Reporting Bugs
If you find a bug or a runtime issue:
1.  Check the [Issues tab](https://github.com/agonkolgeci/discord-js-bot-template/issues) to ensure it hasn't already been reported.
2.  Open a new issue. Be sure to include:
    *   A clear and descriptive title.
    *   Steps to reproduce the issue.
    *   Your Node.js and package versions.
    *   Expected vs. actual behavior.
    *   Error stack traces or logs, if applicable.

### Suggesting Features
We welcome ideas for new handlers, helpers, or optimizations!
1.  Open an issue and describe your proposed feature.
2.  Explain why it would be useful for the template.
3.  Provide mockups, examples, or pseudo-code if possible.

### Submitting Pull Requests
If you want to write the code yourself:
1.  Fork the repository and clone your fork locally.
2.  Create a descriptive branch for your changes (`feature/new-handler` or `bugfix/casing-fix`).
3.  Write your code, commit it, and submit a Pull Request (PR) to the `main` branch.

---

## 💻 Local Development Setup

Follow these steps to set up the project locally for testing:

1.  **Fork and Clone**:
    ```bash
    git clone https://github.com/YOUR_USERNAME/discord-js-bot-template.git
    cd discord-js-bot-template
    ```
2.  **Install Dependencies**:
    ```bash
    npm install
    ```
3.  **Configure Environment**:
    Create a `.env` file in the root directory:
    ```env
    CLIENT_TOKEN=YOUR_BOT_TOKEN
    CLIENT_ID=YOUR_BOT_APPLICATION_ID
    ```
4.  **Validate Changes**:
    Always ensure your code is syntactically correct and doesn't break imports:
    ```bash
    npm run lint
    ```

---

## 🎨 Style & Coding Guidelines

To keep the template clean, consistent, and easy to read, please adhere to these conventions:

*   **ES6 Modules**: Always use ES6 import/export syntax. Do not use `require()` or `module.exports`.
*   **Import Casing**: Be extremely careful with import file names and casing (e.g., import from `./utils/Logger.js`, not `./utils/logger.js`). macOS is case-insensitive, but Linux production environments are case-sensitive and will crash.
*   **JSDoc Documentation**: Provide proper JSDoc comments for new command, component, or helper exports to ensure developers get IDE auto-completion.
*   **Dynamic Loaders**: Keep structure loading modular. Avoid placing hardcoded features inside the client core; instead, register them through modular files in their respective folders (`src/commands/`, `src/components/`, `src/events/`).

---

## 🚀 Pull Request Guidelines

Before submitting your PR, please double-check that you have:

1.  Tested your changes locally (both in normal mode `node src/index.js` and sharding mode `node src/shard.js` if applicable).
2.  Run the syntax checker with `npm run lint` and resolved any errors.
3.  Documented your changes or added JSDoc if you added a new public helper.
4.  Used clear and descriptive commit messages (e.g., `feat: add context menu support` or `fix: resolve duplicate component key error`).

---

Thank you for your contribution! You are helping make `discord-js-bot-template` the best it can be. 🚀
