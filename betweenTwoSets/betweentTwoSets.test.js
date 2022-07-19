const { getTotalX } = require("./betweenTwoSets");

describe("Between Two Sets Problem", () => {
  it("Should equal to 2", () => {
    expect(getTotalX([2, 6], [24, 36])).toBe(2);
  });

  it("Should equal to 3", () => {
    expect(getTotalX([2, 4], [16, 32, 96])).toBe(3);
  });
});
