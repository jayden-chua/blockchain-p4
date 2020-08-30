const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "f12d737a380c41d494508dcc37254eff";
const mnemonic = "language tragic drift envelope damp vapor tube rotate prevent attend use nature";
module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    },
    rinkeby: {
      provider: () => new HDWalletProvider(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
      network_id: 4,       // rinkeby's id
      gas: 4500000,        // rinkeby has a lower block limit than mainnet
      gasPrice: 10000000000
    }
  },
  compilers: { solc: { version: "0.4.24" } }
};