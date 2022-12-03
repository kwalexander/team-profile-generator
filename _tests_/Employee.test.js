const { expect, test } = require("@jest/globals")
const Employee = require("../lib/Employee")

test("employee object successfully created", () => {
    const employee = new Employee();
    expect(typeof (employee)).toBe("object");
})