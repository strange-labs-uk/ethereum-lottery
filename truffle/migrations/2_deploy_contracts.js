var HashKeyRaffle = artifacts.require("./HashKeyRaffle.sol");

var price = 1000;
var secretKeyHash = 'apple';
var drawPeriod = 30; // seconds
var start = web3.eth.getBlock('latest').timestamp + 60; //seconds
var end = start + (5 * 60); // seconds
var feePercent = 10;
var minPlayers = 1;
var account = web3.eth.accounts[0];

module.exports = function(deployer) {
  deployer.deploy(HashKeyRaffle, price, secretKeyHash, drawPeriod, start, end, feePercent, minPlayers);
};

// Create a new game using the deployed contract
HashKeyRaffle.deployed().then(function(instance) {
  return instance.currentGameIndex();
}).then(function(result){
  console.log('HashKeyRaffle.currentGameIndex:', web3.toDecimal(result));
}).catch(error => console.log(error));
