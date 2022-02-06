
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: 5000, years: 5, rate: 5})).toEqual('94.36');
  expect(calculateMonthlyPayment({amount: 100000, years: 100, rate: 2.5555})).toEqual('230.94');
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: 3000, years: 3, rate: 2.49})).toEqual('86.57');
  expect(calculateMonthlyPayment({amount: 3000, years: 3, rate: 2.49})).not.toEqual('94.361');
});

/// etc
