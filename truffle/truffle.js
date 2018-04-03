require('babel-register');
require('babel-polyfill');

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!

  networks: {
    development: {
      host: 'localhost',
      port: 9545,
      network_id: "*",
      gas:4712388,
    },
    ganache: {
      host: process.env.GANACHE_HOST || 'ganache',
      port: 8545,
      network_id: "*",
      gas:4712388,
    },
    ropsten: {
      host: 'localhost',
      port: 8545,
      network_id: 3,
      gas: 4712388
    },
    localropsten: {
      host: "192.168.0.32",
      port: 8545,
      network_id: "3",
      gas: 4612388,
      from: "0xc4feb381534d0d806a3e2be0e96d64620d03eb7d",
    }
  },
  mocha: {
    useColors: false
  }
};