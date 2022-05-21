const Intern = require("../lib/Intern");

describe("Intern Creation", () => {
  test("Creates an Intern by extending the Employee class", () => {
    const intern = new Intern(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "School"
    );

    expect(intern.name).toEqual("John Doe");
    expect(intern.id).toEqual("010101");
    expect(intern.email).toEqual("johndoe@test.com");
    expect(intern.school).toEqual("School");
  });
});

describe("getGithub", () => {
  test("Returns the school of the intern", () => {
    const intern = new Intern(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "School"
    );

    expect(intern.getSchool()).toEqual("School");
  });
});

describe("getRole", () => {
  test("Returns the role of the intern", () => {
    const intern = new Intern(
      "John Doe",
      "010101",
      "johndoe@test.com",
      "School"
    );

    expect(intern.getRole()).toEqual("Intern");
  });
});
