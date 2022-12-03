const { expect, test } = require("@jest/globals")
const Intern = require("../lib/Intern")

test("intern object successfully created", () => {
    const intern = new Intern()
    expect(typeof (intern)).toBe("object")
})