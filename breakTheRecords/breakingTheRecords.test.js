const { breakingRecords } = require("./solution");

describe("Breaking the records problem solution", () => {
  it("Should equal to [4,0]", () => {
    const inputs = [3, 4, 21, 36, 10, 28, 35, 5, 24, 42];
    expect(breakingRecords(inputs)).toEqual([4, 0]);
  });
  it("Should equal to [2,4]", () => {
    const inputs = [10, 5, 20, 20, 4, 5, 2, 25, 1];
    expect(breakingRecords(inputs)).toEqual([2, 4]);
  });
});
