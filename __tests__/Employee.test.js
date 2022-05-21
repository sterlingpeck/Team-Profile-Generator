const Employee = require("../lib/Employee");

describe("Employee Creation", () => {
  test("Creates an employee", () => {
    const employee = new Employee("John Doe", "010101", "johndoe@test.com");

    expect(employee.name).toEqual("John Doe");
    expect(employee.id).toEqual("010101");
    expect(employee.email).toEqual("johndoe@test.com");
  });
});

describe("getName", () => {
  test("Returns employee name", () => {
    const employee = new Employee("John Doe", "010101", "johndoe@test.com");

    expect(employee.getName()).toEqual("John Doe");
  });
});

describe("getId", () => {
  test("Returns employee ID", () => {
    const employee = new Employee("John Doe", "010101", "johndoe@test.com");

    expect(employee.getId()).toEqual("010101");
  });
});

describe("getEmail", () => {
  test("Returns employee email", () => {
    const employee = new Employee("John Doe", "010101", "johndoe@test.com");

    expect(employee.getEmail()).toEqual("johndoe@test.com");
  });
});

describe("getRole", () => {
  test("Returns employee role", () => {
    const employee = new Employee("John Doe", "010101", "johndoe@test.com");

    expect(employee.getRole()).toEqual("Employee");
  });
});
