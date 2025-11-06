[![Playwright Tests](https://github.com/Vandhan-R/playwright-saucedemo-E2E-automation/actions/workflows/playwright.yml/badge.svg)](https://github.com/Vandhan-R/playwright-saucedemo-E2E-automation/actions/workflows/playwright.yml)

# Playwright SauceDemo E2E Automation (POM)

This is an end-to-end UI automation project for the SauceDemo website using **Playwright** with **JavaScript** following **Page Object Model** structure.  

The flow covers Login, adding products to the cart, verifying items, checkout and confirming the order.

---

## Test Scenario Covered

- Invalid login → verify error message  
- Valid login → navigate to products page
- Add two items to cart + verify cart badge count
- Verify product details in Cart page
- Fill checkout details
- Validate price and total amount
- Finish purchase and verify success message

---

## Tech Used

- Playwright
- JavaScript (Node.js)
- Page Object Model (POM)
- Playwright HTML Reporter
- GitHub Actions (CI)

---

## How to run the tests
Node.js 18+ and Git installed

1) Install dependencies
npm install

2) Install Playwright browsers (Chromium/Firefox/WebKit)
npx playwright install

3) Run the tests (headless)
npm test

4) Open the HTML report
npm run report

---

## Project Structure

- tests/
  - SauceDemo.spec.js
- PageObject/
  - Login.js
  - AddingProducts.js
  - CheckOut.js
  - OrderPage.js
  - Checkoutoverpage.js
  - OrderComplete.js
- .github/workflows/
  - playwright.yml //(GitHub Actions CI)
- Jenkinsfile  //(Jenkins Pipeline CI)
- package.json
- README.md


