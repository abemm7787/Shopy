
## Introduction

In this project, you will add class components to your a basic ecommerce site that allow you to request product data from a server and render that data. You will also implement the ablitity to add products to a shopping cart.

In meeting the minimum viable product (MVP) specifications listed below, your project should look like the solution examples below:


t. 
#### Shopping Cart

  Nothing needs to be done here. You _will_ have to navigate to the cart page in your app so you can go to the checkout form for the next step.

#### Checkout Form

  The form is working, but it is currently controlled by local stateful logic. We want to control this form with a custom hook.

* [ ] Build a custom hook called `useForm`, and use it in your CheckoutForm component to control the form's stateful logic.
* [ ] You built a useForm hook in the guided project this week. You will probably need to use that as a guide to complete this step. However, try and build it out first before you peek at the guided project. And *do not* copy/paste directly from the guided project!_

#### Testing the Checkout Form
* [ ] Run the test runner and ensure that `src/components/CheckoutForm.test.js` is correctly called.
* [ ] Fill out code necessary to test that that Checkout form renders without errors.
* [ ] Fill out code necessary to test that when all form inputs are filled with valid data, a success message appears.
* [ ] Make sure the tests are passing, and make sure you can cause the tests to fail purposefully, so that you know the tests are truly working.

**Notes:**
* Again, unlike other projects, the local server used here can not be accessed through the browser.  Test the functioning of the server directly through your axios calls.
