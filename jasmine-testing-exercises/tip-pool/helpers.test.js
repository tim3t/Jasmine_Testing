describe ('helpers tests', function() {

  beforeEach(function(){
    billAmtInput.value = 100;
    tipAmtInput.value = 20;
    submitPaymentInfo();
  });

  it('should sum total tips', function(){
    expect(sumPaymentTotal('tipAmt')).toEqual(20);
    
    billAmtInput.value = 200;
    tipAmtInput.value = 40;
    
    submitPaymentInfo();
    
    expect(sumPaymentTotal('tipAmt')).toEqual(60);
  })

  it('should sum total bill amounts', function () {
    expect(sumPaymentTotal('billAmt')).toEqual(100);

    billAmtInput.value = 200;
    tipAmtInput.value = 40;

    submitPaymentInfo();

    expect(sumPaymentTotal('billAmt')).toEqual(300);
  });

  it('should sum total tip percent', function () {
    expect(sumPaymentTotal('tipPercent')).toEqual(20);

    billAmtInput.value = 100;
    tipAmtInput.value = 20;

    submitPaymentInfo();

    expect(sumPaymentTotal('tipPercent')).toEqual(40);
  });

  it('should sum tip percent', function () {
    expect(calculateTipPercent(100, 25)).toEqual(25);
    expect(calculateTipPercent(200, 20)).toEqual(10);
  });

  it('should generate and append tds to trs', function () {
    let newTr = document.createElement('tr');

    appendTd(newTr, 'test');

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('test');
  });

  it('should generate delete and append', function () {
    let newTr = document.createElement('tr');

    appendDelete(newTr);

    expect(newTr.children.length).toEqual(1);
    expect(newTr.firstChild.innerHTML).toEqual('X');
  });

    afterEach(function(){
      billAmtInput.value = '';
      tipAmtInput.value = '';
      paymentTbody.innerHTML = '';
      summaryTds[0].innerHTML = '';
      summaryTds[1].innerHTML = '';
      summaryTds[2].innerHTML = '';
      serverTbody.innerHTML = '';
      allPayments = {};
      paymentId = 0;
    });
})