// Implement a class named Car:

export default class Car {
  cloneCar() {
    return new (this.constructor)(
      this._brand,
      this._motor,
      this._color,
    );
  }

  constructor(brand, motor, color) {
    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }
}
