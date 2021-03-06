# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Installed with [TypeScript Template](https://create-react-app.dev/docs/adding-typescript/) and [Redux Store](https://react-redux.js.org/introduction/getting-started).

## Install Project

1. Clone or download project.
2. Install modules: `npm i`;
3. Run the project: `npm start`.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run lint`

To run ESLint and see what errors it is pointing.

### `npm run format`

Provides a consistent style by analyzing code and reprinting it according to the rules.

## JSON Data
Data is downloaded from [link](https://www.npoint.io/docs/df8a1cc860dee09f3c62). There you can modify them.

Note! Mandatory structure:

```json
[
  {
    "question": "Question 1",
    "cost": 500,
    "answers": [
      {
        "answer": "Answer 1",
        "correct": false
      },
      {
        "answer": "Answer 2",
        "correct": true
      },
      {
        "answer": "Answer 3",
        "correct": false
      },
      {
        "answer": "Answer 4",
        "correct": false
      }
    ]
  }
]
```

You can also find the JSON file `./src/core/data/questions.json`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

To learn TypeScript, check out the [TypeScript documentation](https://www.typescriptlang.org/).

To learn Redux, check out the [Redux documentation](https://react-redux.js.org/).
