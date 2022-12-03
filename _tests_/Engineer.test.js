const { expect, test } = require("@jest/globals")
const Engineer = require("../lib/Engineer")

test("engineer object successfully created", () => {
    const engineer = new Engineer();
    expect(typeof (engineer)).toBe("object");
})