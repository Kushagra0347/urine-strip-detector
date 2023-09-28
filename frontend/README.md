# Urine Test Color Extraction Frontend

This project aims to develop a system for extracting the color information from urine test strips. Urine tests are commonly used in medical diagnostics to detect various health conditions and monitor the overall well-being of individuals. The color of the urine test strips provides valuable information about the presence and concentration of certain substances in the urine, such as glucose, protein, ketones, and pH levels.

The goal of this project is to automate the process of extract all the colors from the urine test strips and return it as a json result. By leveraging computer vision techniques, we aim to create a system that can capture an image of a urine test strip and extract the relevant color information from it. This extracted color data can then be analyzed to determine the levels of different substances in the urine.

**_Everything's done in a single page.
If a user isn't logged in / signed up, they'll be shown the authentication page. Only after authenticating themselves they can see the main content_**

_Authenticaton Section_ (Comprises of Signup/Login Forms)

_Extract Color Section_ (the main section of the webpage, the user uploads the image and gets the output in shown in a JSON format but beautifully)

## Setup Project

In the project directory, you can run:

### `npm i` or `npm install`

Installs all the node_modules required for the project.

### `npm start` or `npm run dev`

Runs the app in the development mode.\
Open [http://127.0.0.1:5173](http://127.0.0.1:5173) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
The app is ready to be deployed!
