<!-- GETTING STARTED -->
## Getting Started
### Steps to Set Up Cypress with TypeScript

Create a Project Directory:
* Create an empty folder for your project and navigate into it using the command line.
Initialize the Project:
Run the following command to create a package.json file:
```sh
npm init -y
```
* Install Cypress and TypeScript using npm:
```sh
npm install cypress typescript --save-dev
```
* Initialize TypeScript Configuration :
```sh
npx tsc --init --types cypress --lib dom,es6
```
_This command ensures that TypeScript recognizes Cypress types, which depend on DOM and ES6 libraries._
* Launch the Cypress Test Runner with the command:
```sh
npx cypress open
```
_This will open the Cypress UI where you can manage and run your tests._


<p align="right">(<a href="#readme-top">back to top</a>)</p>
