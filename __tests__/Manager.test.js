const Manager = require("../lib/Manager");

describe("Manager Creation", () => {
  test("Creates Manager", () => {
    const manager = new Manager(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "9696969"
    );

    expect(manager.name).toEqual("John Doe");
    expect(manager.id).toEqual("010101");
    expect(manager.email).toEqual("johndoe@test.com");
    expect(manager.officeNumber).toEqual("9696969");
  });
});

describe("getOfficeNumber", () => {
  test("Returns the office number of the manager", () => {
    const manager = new Manager(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "9696969"
    );

    expect(manager.getOfficeNumber()).toEqual("9696969");
  });
});

describe("getRole", () => {
  test("Returns the role of the manager", () => {
    const manager = new Manager(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "9696969"
    );

    expect(manager.getRole()).toEqual("Manager");
  });
});
