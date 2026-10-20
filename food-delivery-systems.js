class FoodItem {
 
  #price;

  constructor(name, price) {
    if (typeof name !== "string" || name.trim() === "") {
      throw new Error("Food name cannot be empty.");
    }

    this.name = name;
    this.setPrice(price);
  }

 
  getPrice() {
    return this.#price;
  }


  setPrice(newPrice) {
    if (
      typeof newPrice !== "number" ||
      !Number.isFinite(newPrice) ||
      newPrice < 0
    ) {
      throw new Error("Price must be a valid number.");
    }

    this.#price =
      Math.round((newPrice + Number.EPSILON) * 100) / 100;
  }

  
  getDeliveryFee() {
    throw new Error("Each food type must have a delivery fee.");
  }

  getDescription() {
    return this.name;
  }

  getType() {
    return this.constructor.name;
  }
}



class Pizza extends FoodItem {
  constructor(name, price, size, toppings = []) {
    super(name, price);

    this.size = size;
    this.toppings = toppings;
  }

 
  getDeliveryFee() {
   console.log(25);
  }

  getDescription() {
    console.log(`${this.size} pizza with ${this.toppings}`);
  }
}


class Burger extends FoodItem {
  constructor(name, price, pattyType) {
    super(name, price);

    this.pattyType = pattyType;
   
  }

  getDeliveryFee() {
    console.log("your delivery fee is" + 18);
  }

  getDescription() {
    console.log(`${this.pattyType} burger`);
  }
}

class Drink extends FoodItem {
  constructor(name, price, ml) {
    super(name, price);

    this.ml = ml;
    
  }
  getDeliveryFee() {
     console.log("your delivery fee is" + 26);
  }

  getDescription() {
    console.log(`${this.ml} ml drink`);
  }
}

const pizza = new Pizza(
  "Chicken Pizza",
  89.99,
  "Large",
  ["Chicken", "Mushroom"]
);

const burger = new Burger(
  "Classic Burger",
  65.50,
  "Beef"
);

const drink = new Drink(
  "Orange Juice",
  18.00,
  330
);
