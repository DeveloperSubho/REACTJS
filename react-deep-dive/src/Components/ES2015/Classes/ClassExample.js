class Customer {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + " " + this.lastName;
  }
}

const firstCustomer = new Customer("Max", "Mustermann");
console.log(firstCustomer.getFullName());

/**
 * Additionally, classes can be extended using extends:
 * class Customer extends Person {}
 * Or:
 * class MyComponent extends React.Component {}
 */
