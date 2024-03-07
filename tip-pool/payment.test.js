describe("Payment test (with setup and tear-down)", () => {
  beforeEach(() => {
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    paymentId = 0;
  });
  it("Should prevent the default event", () => {
    const e = jasmine.createSpyObj("e", ["preventDefault"]);
    submitPaymentInfo(e);
    expect(e.preventDefault).toHaveBeenCalled();
  });
  it("Should return correct create current payment objec", () => {
    submitPaymentInfo();
    expect(paymentId).toEqual(1);
  });
  afterEach(() => {
    billAmtInput.value = "";
    tipAmtInput.value = "";
    paymentId = 0;
    allPayments = {};
    paymentTbody.innerHTML = "";
  });
});
