# Playwright BDD Automation Framework

A simple end-to-end test automation framework built using **Playwright** and **Cucumber (BDD)**. This project demonstrates how to automate web application testing using the Page Object Model and Behavior Driven Development approach.

---

## 🚀 Tech Stack

- Playwright
- Cucumber (BDD)
- JavaScript (ES Modules)
- Node.js

---

## 📁 Project Structure

```
day1/
│── features/
│   └── login.feature
│
│── steps/
│   └── loginSteps.js
│
│── node_modules/
│
│── package.json
│── package-lock.json
└── README.md
```

---

## 📋 Prerequisites

- Node.js (v18 or later)
- npm

Verify installation:

```bash
node -v
npm -v
```

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/vishalp018/Automation_bdd.git
```

Navigate to the project:

```bash
cd Automation_bdd
```

Install dependencies:

```bash
npm install
```

Install Playwright browsers:

```bash
npx playwright install
```

---

## ▶️ Run Tests

Execute all feature files:

```bash
npm test
```

or

```bash
npx cucumber-js
```

---

## 📝 Sample Feature

```gherkin
Feature: Login Functionality

  Scenario: Successful Login
    Given user is on saas login page
    When user enters username
    And user enters password
    And user clicks login button
    Then user should see homepage
```

---

## 🔧 Dependencies

- @playwright/test
- @cucumber/cucumber

Install manually if required:

```bash
npm install @playwright/test
npm install @cucumber/cucumber
```

---

## 🌐 Test Website

https://www.saucedemo.com/

---

## 📚 Concepts Used

- Behavior Driven Development (BDD)
- Playwright Automation
- Cucumber Feature Files
- Step Definitions
- Assertions
- Browser Automation

---

## 👨‍💻 Author

**Vishal Pal**

GitHub: https://github.com/vishalp018

---

## ⭐ Future Improvements

- Page Object Model (POM)
- Hooks
- Test Reports
- Screenshots on Failure
- Cross-browser Testing
- CI/CD Integration (GitHub Actions)

Proeject contains a lession for css Selector Steps.