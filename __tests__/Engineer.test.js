const Engineer = require("../lib/Engineer");

describe("Engineer Creation", () => {
  test("Creates Engineer", () => {
    const engineer = new Engineer(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "johndoe"
    );

    expect(engineer.name).toEqual("John Doe");
    expect(engineer.id).toEqual("010101");
    expect(engineer.email).toEqual("johndoe@test.com");
    expect(engineer.github).toEqual("johndoe");
  });
});

describe("getGithub", () => {
  test("Returns engineer Github username", () => {
    const engineer = new Engineer(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "johndoe"
    );

    expect(engineer.getGithub()).toEqual("johndoe");
  });
});

describe("getRole", () => {
  test("Returns engineer role", () => {
    const engineer = new Engineer(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "johndoe"
    );

    expect(engineer.getRole()).toEqual("Engineer");
  });
});
