describe("Servers test (with setup and tear-down)", function () {
  beforeEach(function () {
    // initialization logic
    serverNameInput.value = "Alice";
  });

  it("should add a new server to allServers on submitServerInfo()", function () {
    submitServerInfo();

    expect(Object.keys(allServers).length).toEqual(1);
    expect(allServers["server" + serverId].serverName).toEqual("Alice");
  });
  it("should clear server input after submission", function() {
    submitServerInfo()
    expect(serverNameInput.value).toEqual("")
  })
  it("should return the current server in loop", function(){
    submitServerInfo();

    let curServer
    for (let key in allServers) {
      curServer = allServers[key];
    }
    expect(curServer).toEqual({serverName: 'Alice'})
  })

  afterEach(function () {
    // teardown logic
    allServers = {};
    serverId = 0;
    serverTbody.innerHTML = "";
  });
});
