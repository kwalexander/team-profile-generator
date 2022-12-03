const { expect, test } = require("@jest/globals")
const Manager = require("../lib/Manager")

test("manager object successfully created", () => {
    const manager = new Manager();
    expect(typeof (manager)).toBe("object");
})