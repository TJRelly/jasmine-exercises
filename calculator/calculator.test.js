describe("calculate monthly payment", () => {
  it("should return a string", function () {
    expect(calculateMonthlyPayment([10000, 5, 0.02])).toBeInstanceOf(String);
  });
  it("should calculate the monthly rate correctly", function () {
    expect(calculateMonthlyPayment([10000, 5, 0.02])).toEqual("175.28");
  });
  it("should calculate monthly payment correctly if interest rate is zero", function () {
    expect(calculateMonthlyPayment([10000, 5, 0])).toEqual("166.67");
  });
  it("should return zero if all zeros are inputed", function () {
    expect(calculateMonthlyPayment([0, 0, 0])).toEqual("0");
  });
  it("should return a result with 2 decimal places", function () {
    expect(calculateMonthlyPayment([10000, 5, 0.02])).toMatch(/^\d+\.\d{2}$/);
  });
});
