import './main.js';

export class Age {
  constructor(age, lifeExpectancy) {
    this.age = age;
    this.lifeExpectancy = lifeExpectancy;
  }

  mercury() {
    return this.age * .24;
  }

  venus() {
    return this.age * .62;
  }

  mars() {
    return this.age * 1.88;
  }

  jupiter() {
    return this.age * 11.86;
  }

  earthSpan() {
    return (this.lifeExpectancy - this.age);
  }

  mercurySpan() {
    return (this.lifeExpectancy - (this.age * .24));
  }

  venusSpan() {
    return (this.lifeExpectancy - (this.age * .62));
  }

  marsSpan() {
    return (this.lifeExpectancy - (this.age * 1.88));
  }

  jupiterSpan() {
    return (this.lifeExpectancy - (this.age * 11.86));
  }

  outlive() {
    if(this.age > this.lifeExpectancy) {
      return (this.age - this.lifeExpectancy);
    }
  }
}
