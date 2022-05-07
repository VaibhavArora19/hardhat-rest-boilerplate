const fs = require("fs");
const { ethers, artifacts } = require("hardhat");
const extractedObject = require("../../lib/json");

async function runDeployment(contractName, chainId) {
  const [deployer] = await ethers.getSigners();
  // deploy contracts here:
  const NewFactory = await ethers.getContractFactory(contractName);
  const constructorArgs = extractedObject("./solidity/scripts", "constructor");
  const NewContract = await NewFactory.deploy(...constructorArgs[contractName]);
  console.log(`\n${contractName} deployed to ${NewContract.address}`);
  console.log(`Account balance: ${(await deployer.getBalance()).toString()}`);
  // For each contract, pass the deployed contract and name to this function to save a copy of the contract ABI and address to the front end.
  saveFrontendFiles(NewContract, contractName, chainId);
  return NewContract;
}


function saveFrontendFiles(contract, name, chainId) {
  const pathToData = `./data/${chainId}`;
  const missingFolder = !fs.existsSync(pathToData);
  if (missingFolder) fs.mkdirSync(pathToData, { recursive: true }); 

  const pathToAddress = `${pathToData}/${name}-address.json`;
  const addressCache = JSON.stringify({ address: contract.address }, undefined, 2);
  fs.writeFileSync(pathToAddress, addressCache);

  const pathToArtifact = `${pathToData}/${name}.json`;
  const artifactCache = JSON.stringify(artifacts.readArtifactSync(name), null, 2);
  fs.writeFileSync(pathToArtifact, artifactCache);
  
  console.log(`${name} artifacts saved || chain:${chainId}`);
}


module.exports = { runDeployment, saveFrontendFiles };