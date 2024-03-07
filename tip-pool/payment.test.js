describe("Payment test (with setup and tear-down)", () => {
  beforeEach(() => {
    billAmt = 100;
    tipAmt = 25;
  });
  it("Should prevent the default event", () => {
    const e = jasmine.createSpyObj("e", ["preventDefault"]);
    submitPaymentInfo(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });

  
});
