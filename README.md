# React Native Blank Screen Bug
This repository demonstrates a common React Native bug related to the `useLayoutEffect` hook causing a blank screen issue.  The bug is reproduced in `App.js`, and a solution is provided in `AppSolution.js`.

## Bug Description
The application renders a blank screen.  The state appears to be updated correctly in the console, but the UI doesn't reflect these changes. This is likely due to improper usage or timing issues with `useLayoutEffect`.

## Reproduction
1. Clone this repository.
2. Run `npm install`.
3. Run `npx react-native run-android` (or `npx react-native run-ios`).
4. Observe the blank screen.

## Solution
The solution utilizes a combination of techniques to ensure the component's layout is properly established before modifying it. The solution is located in `AppSolution.js`.