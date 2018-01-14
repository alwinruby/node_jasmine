var Add = require("../app");

describe("Add functionality", () => {
  it ("calculates x + y = z", () => {
    expect(Add(10, 5)).toEqual(15);
  });

  it ("calculates x + y != z", () => {
    expect(Add(10, 5)).not.toEqual(14);
  });
});
