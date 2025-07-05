# AIAGENTMCP

## Overview

AIAGENTMCP is an automated test suite built with [Playwright](https://playwright.dev/) for end-to-end testing of web applications. It includes example and real-world test cases to demonstrate robust browser automation and validation.

## Features
- Automated browser testing using Playwright
- Example tests for Playwright documentation site
- Real-world login and cart scenario tests
- Extensible configuration for different browsers
- HTML test reporting

## Project Structure
```
AIAGENTMCP/
├── tests/                  # Main test cases
│   ├── example.spec.ts     # Example Playwright tests
│   └── rahulshettyacademy-login.spec.ts  # Real-world login and cart test
├── tests-examples/         # Additional example tests
│   └── demo-todo-app.spec.ts
├── playwright.config.ts    # Playwright configuration
├── package.json            # Project metadata and dependencies
├── package-lock.json       # Dependency lock file
```

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) v18 or higher
- npm (comes with Node.js)

### Installation
1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd AIAGENTMCP
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Running Tests
- To run all tests:
  ```bash
  npx playwright test
  ```
- To run a specific test file:
  ```bash
  npx playwright test tests/example.spec.ts
  ```
- To view the HTML report after running tests:
  ```bash
  npx playwright show-report
  ```

### Configuration
- Test settings can be adjusted in `playwright.config.ts`.
- By default, tests run in parallel on Chromium. You can add more browsers or change settings as needed.

## Writing Your Own Tests
- Add new `.spec.ts` files in the `tests/` directory.
- Use Playwright's [test API](https://playwright.dev/docs/test-api) for writing and structuring tests.

## Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Open a pull request

## License
This project is licensed under the ISC License.

## Acknowledgements
- [Playwright](https://playwright.dev/) for the powerful browser automation framework 

## Why MCP + Playwright? Super Fast, Easy Automation

### What is MCP Playwright Server Mode?
MCP (Modern Connected Playwright) leverages Playwright's server capabilities to enable ultra-fast, scalable, and connected browser automation. By running Playwright in server mode, you can:
- **Reuse browser instances** for multiple test runs, reducing startup time
- **Connect remotely** to browsers for distributed or cloud-based testing
- **Integrate with CI/CD pipelines** for seamless automation

### How to Use Playwright Server Mode
You can enable Playwright's server mode by running:
```bash
npx playwright run-server
```
This will start a Playwright server that can accept connections from your test scripts or other tools. You can then connect to this server from your tests for even faster execution.

### Why Use MCP Playwright Automation?
- **Super Fast**: Tests run in parallel, browsers are reused, and server mode eliminates repeated startup overhead.
- **Easy to Learn**: Playwright's API is intuitive, and this project provides real-world and example tests to accelerate your learning.
- **Connected**: Server mode allows you to run tests locally, on remote machines, or in the cloud with minimal changes.
- **Scalable**: Easily scale your automation from a single laptop to a full CI/CD pipeline or cloud grid.
- **Modern**: Supports all major browsers, headless/headful modes, and advanced features like tracing and reporting.

### Typical Workflow
1. **Start the Playwright server** (optional, for advanced scenarios):
   ```bash
   npx playwright run-server
   ```
2. **Run your tests** (they will connect to the server if configured):
   ```bash
   npx playwright test
   ```
3. **View reports and debug** with Playwright's built-in tools.

### Learning and Extending
- Explore the `tests/` and `tests-examples/` directories for ready-to-use test scripts.
- Modify or add new tests to automate your own scenarios.
- Use Playwright's [documentation](https://playwright.dev/docs/intro) for advanced features and best practices.

### Why MCP?
MCP is designed for:
- **Speed**: Instant feedback and rapid test cycles
- **Simplicity**: Minimal setup, clear structure, and easy extension
- **Connectivity**: Run tests anywhere, connect to any browser, integrate with any workflow

Harness the power of MCP + Playwright to automate your web testing with unmatched speed and flexibility! 