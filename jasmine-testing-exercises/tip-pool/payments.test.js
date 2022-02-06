describe("Servers test (with setup and tear-down)", function() {
  beforeEach(function() {
    // initialization logic
    serverNameInput.value = 'Alice';
  });

  it('should add a new server to allServers on submitServerInfo()', function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers['server' + serverId].serverName).toEqual('Alice');
  });

  it('should not update with no server added', function(){
    serverNameInput.value = '';
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(0);
  });

  it('should update server table on updateServerTable()', function(){
    submitServerInfo();
    updateServerTable();

    let currentServerTable = document.querySelectorAll('#serverTable tbody tr td');

    expect(currentServerTable.length).toEqual(2);
    expect(currentServerTable[0].innerText).toEqual('Alice');
    expect(currentServerTable[1].innerText).toEqual('$0.00');
  });

  afterEach(function() {
    serverTbody.innerHTML = '';
    serverId = 0;
    allServers = {};
  });
});