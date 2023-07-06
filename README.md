# Delivery Fee Calculator

CRA has been used to boilerplate the project with typescript support. Page directory has been defined so anyone can add extra page in that directory without needing to change too much code from `App.tsx`. All needed components are inside Components directory and each component has it's own style for modularity.
The app have HTML validation when user provide not valid input and press the calculate button. This bring more simplicity to code but UI/UX wise maybe we use to see validation erros below each input. I assumed the scope of the task dont expect us to go over validation if we can do it easier with HTML. Config file has been provided in case these rules value needed to be changed and it would be easier to just change the configs rather than change the hard coded value inside the functions.

- Font's has been added via [google fonts](https://fonts.google.com/),
- Color schema insipired from [coolors](https://coolors.co)
- Icons in front of the input are Material Fonts

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
