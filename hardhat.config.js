require('dotenv').config();
require("@nomiclabs/hardhat-waffle");
const getProvider = require("./lib/providers");
const extractedObject = require('./lib/json');


const mainnetAccount = [process.env.MAINNET_KEY];
const testnetAccounts = extractedObject("./data", "testnetBank").privateKeys;


module.exports = {
  defaultNetwork: "localhost",
  networks: {
    ethereum: {
      url: getProvider(1),
      accounts: mainnetAccount
    },
    optimism: {
      url: getProvider(10),
      accounts: mainnetAccount
    },
    ropsten: {
      url: getProvider(3),
      accounts: testnetAccounts
    },
    rinkeby: {
      url: getProvider(4),
      accounts: testnetAccounts
    },
    kovan: {
      url: getProvider(42),
      accounts: testnetAccounts
    },
    goerli: {
      url: getProvider(420),
      accounts: testnetAccounts
    },
    optimismKovan: {
      url: getProvider(69),
      accounts: testnetAccounts
    },


    arbitrum: {
      url: getProvider(42161),
      accounts: mainnetAccount
    },
    arbitrumTestnet: {
      url: getProvider(421611),
      accounts: testnetAccounts
    },


    binance: {
      url: getProvider(56),
      accounts: mainnetAccount
    },
    binanceTestnet: {
      url: getProvider(97),
      accounts: testnetAccounts
    },


    polygon: {
      url: getProvider(137),
      accounts: mainnetAccount
    },
    mumbai: {
      url: getProvider(80001),
      accounts: testnetAccounts
    },


    avalanche: {
      url: getProvider(43114),
      accounts: mainnetAccount
    },
    avalancheTestnet: {
      url: getProvider(43113),
      accounts: testnetAccounts
    },


    fantom: {
      url: getProvider(250),
      accounts: mainnetAccount
    }
  },


  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs:200
      }
    }
  },


  paths: {
    sources: "./solidity/contracts",
    tests: "./solidity/test",
    cache: "./solidity/cache",
    artifacts: "./solidity/artifacts"
  },

  mocha: { timeout: 40000 }
};
