const { runDeployment } = require("./deployment");
const hre = require("hardhat");
const ethers = hre.ethers;


async function deployAll() {
    const provider = new ethers.providers.JsonRpcProvider(hre.network.config.url);
    const { chainId } = await provider.getNetwork();
    await runDeployment("MintyFreshCoin", chainId);
    await runDeployment("ExpensiveJpeg", chainId);
}


(async () => {await deployAll()})();