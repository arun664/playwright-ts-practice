# Learn Playwright with JS/TS

## Install Playwright

Download Node.Js and verify the version using cmd or terminal
`node -v` 
`npm –version`

## Playwright Initialization (Either one works)
1. Install [Playwright VS code extension](https://playwright.dev/docs/getting-started-vscode)
Ctrl+Shift+P -> install playwright

2. In terminal, type `npx init playwright` and choose the programming language comfortable with JS/TS

## To run tests:
- runs all tests in all the browsers in headless mode
`npx playwright test`
- runs specific tests in headless mode
`npx playwright test TestFile.spec.ts`
- runs specific test in specific browser
`npx playwright test TestFile.spec.ts –project=chromium`
- runs all tests in headed mode
`npx playwright test –headed`
- run specific test in headed mode in specific browser
`npx playwright test TestFile.spec.ts –project=chromium –headed`

## To show report:
`npx playwright show-report`