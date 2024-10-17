<!-- GETTING STARTED -->
## Getting Started
### Steps to Set Up Cypress with TypeScript

Create a Project Directory:
* Initialize the Project:
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

<!-- Project workflow  -->
## Project workflow
### Description
The website Sauce Demo https://www.saucedemo.com  serves as a demo platform for testing web applications and practicing automated testing. It is primarily designed for developers and testers to simulate e-commerce scenarios by interacting with a mock online store. Users can add items to their cart, complete purchases, and explore various functionalities without any real transactions taking place.
Key features of Sauce Demo include:
* User Authentication: Users can log in with predefined credentials to access the demo environment.
* Product Catalog: It showcases a variety of products that users can browse and add to their shopping cart.
* Shopping Cart Functionality: Users can test adding and removing items from their cart.
* Checkout Process: The site allows users to simulate the checkout process, making it useful for testing payment integrations and user flows.
### Managment
* I chose ClickUp as my project management tool because it has profoundly improved my ability to oversee project development. 
https://sharing.clickup.com/9012393665/l/h/8cjwdp1-312/cc57acaf52355b7

<p align="right">(<a href="#readme-top">back to top</a>)</p>
