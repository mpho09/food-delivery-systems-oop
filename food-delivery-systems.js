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

  // Change the price safely.
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