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

**1. User Login**  
**Description:** Verify that users can log in with valid credentials.  
**Task:** Test valid login 
* Subtask 1: Open the Sauce Demo login page.  
* Subtask 2: Enter valid username.  
* Subtask 3: Enter valid password.  
* Subtask 4: Click the "Login" button.  
* Subtask 5: Verify that the user is redirected to the products page.

**Task:** Test invalid login  
* Subtask 1: Open the Sauce Demo login page.  
* Subtask 2: Enter invalid username or password.  
* Subtask 3: Click the "Login" button.  
* Subtask 4: Verify that an error message is displayed.  

**2. Product Page Navigation**  
**Description:** Ensure that users can navigate through the product listings.  
**Task:** Verify product listing  
* Subtask 1: Log in with valid credentials.  
* Subtask 2: Verify that all products are displayed on the page.

**Task:** Test product details.  
* Subtask 1: Click on a product.  
* Subtask 2: Verify that the product details page opens with correct information.  

**3. Add to Cart Functionality**  
**Description:** Test adding products to the shopping cart.  
**Task**: Add single product to cart  
* Subtask 1: Log in with valid credentials.  
* Subtask 2: Click on a product.  
* Subtask 3: Click "Add to Cart" button.  
* Subtask 4: Verify that the cart icon updates to show one item.
 
**Task:** Add multiple products to cart  
* Subtask 1: Log in with valid credentials.  
* Subtask 2: Add multiple products to the cart.  
* Subtask 3: Verify that the cart icon reflects the correct number of items.  

**4. Checkout Process**  
**Description:** Validate the checkout workflow.  
**Task:** Complete checkout  
* Subtask 1: Log in and add products to the cart.  
* Subtask 2: Navigate to the cart page.  
* Subtask 3: Click "Checkout" button.

**Task:** Fill out checkout information  
* Subtask 1: Enter first name, last name, and zip code.  
* Subtask 2: Click "Continue".
  
**Task:** Verify order summary  
* Subtask 1: Confirm that all items are listed correctly on the order summary page.
  
**Task:** Complete payment  
* Subtask 1: Click "Finish".  
* Subtask 2: Verify that a confirmation message is displayed.  

**5. Logout Functionality**  
**Description:** Ensure users can log out successfully.  
**Task:** Test logout process  
* Subtask 1: Log in with valid credentials.  
* Subtask 2: Click on the menu button (hamburger icon).  
* Subtask 3: Select "Logout".  
* Subtask 4: Verify that the user is redirected to the login page.  

### Managment
* I chose ClickUp as my project management tool because it has profoundly improved my ability to oversee project development. 
https://sharing.clickup.com/9012393665/l/h/8cjwdp1-312/cc57acaf52355b7

<p align="right">(<a href="#readme-top">back to top</a>)</p>
