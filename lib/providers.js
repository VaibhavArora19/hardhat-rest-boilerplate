require('dotenv').config();
const mNodeKey = process.env.MORALIS_KEY;
const aMNodeKey = process.env.ALCHEMY_OPTM_KEY;
const aTNodeKey = process.env.ALCHEMY_OPTT_KEY;


function getProvider(chainId) {
  const mRegions = ["speedy-nodes-nyc"];
  const mUrl = `https://${mRegions[0]}.moralis.io/${mNodeKey}/`;
  const aUrl = `g.alchemy.com/v2/`;
  switch (chainId) {
    case 1:
      return mUrl + "eth/mainnet";
    case 10:
      return "https://opt-mainnet." + aUrl + aMNodeKey;
    case 3:
      return mUrl + "eth/ropsten";
    case 4:
      return mUrl + "eth/rinkeby";
    case 42:
      return mUrl + "eth/kovan";
    case 420:
      return mUrl + "eth/goerli";
    case 69:
      return "https://opt-kovan." + aUrl + aTNodeKey;


    case 42161:
      return mUrl + "arbitrum/mainnet";
    case 421611:
      return mUrl + "arbitrum/testnet";


    case 56:
      return mUrl + "bsc/mainnet";
    case 97:
      return mUrl + "bsc/testnet";


    case 137:
      return mUrl + "polygon/mainnet";
    case 80001:
      return mUrl + "polygon/mumbai";  


    case 43114:
      return mUrl + "avalanche/mainnet";
    case 43113:
      return mUrl + "avalanche/testnet";


    case 250:
      return mUrl + "fantom/mainnet";
      

    default:
      return "unsupported/chainId";
  }
}


module.exports = getProvider;