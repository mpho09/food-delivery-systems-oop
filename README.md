# 🍔 Food Delivery System – JavaScript OOP Project

## Project Overview

The system allows users to add different food items to an order, calculate the subtotal, calculate delivery fees, and display the final amount to pay.

The project uses four main OOP concepts: **Encapsulation, Inheritance, Abstraction and Polymorphism.**

## Features

- Add food items to an order.
- Support different food types, including pizza, burgers and drinks.
- Store food item names and prices.
- Calculate delivery fees based on the type of food.
- Calculate the final total.
- Display an order summary.

## The Four OOP Concepts Used

### 1. Encapsulation

Encapsulation protects data inside a class. In this project, the `FoodItem` class uses a private `#price` property to prevent direct access to the price from outside the class.

The `getPrice()` and `setPrice()` methods allow the price to be accessed or updated in a controlled way.

**Example:** Protecting the price of a food item.

### 2. Inheritance

Inheritance allows one class to reuse properties and methods from another class. The `Pizza`, `Burger`and `Drink` classes inherit from the parent `FoodItem` class.

This reduces repeated code because all food types can share common properties, such as their names and prices.


### 3. Abstraction

Abstraction hides unnecessary implementation details and provides simple methods to perform tasks. The `Order` class handles order-related operations without requiring the user to know all the calculations behind them.

Methods such as `getFinalTotal()` and `displaySummary()` make it easier to calculate the total and display the order.

**Example:** Calling `getFinalTotal()` to calculate the amount payable.

### 4. Polymorphism

Polymorphism allows different classes to use the same method name but provide different behaviour. In this project, each food class can override the `getDeliveryFee()` method to calculate its own delivery fee.

Example delivery fees:

- Pizza: R25
- Burger: R18
- Drink: R25


**Example:** Calling `getDeliveryFee()` on a pizza and a drink produces different delivery fees.

## Technologies Used

- **JavaScript:** Programming language used to build the system.
- **Node.js:** Used to run the JavaScript project.
- **Object-Oriented Programming:** Used to organise