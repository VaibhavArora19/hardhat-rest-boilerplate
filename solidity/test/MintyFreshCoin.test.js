/* eslint-disable jest/valid-expect */
const { ethers } = require("hardhat");
const { expect } = require("chai");
const extractedObject = require("../../lib/json");

describe("MintyFreshCoin", () => {
    let MintyFreshCoin;
    let deployer, otherClients; // eslint-disable-line no-unused-vars
    
    beforeEach(async () => {
        // Get ContractFactory and Signers
		const MintyFreshCoinFactory = await ethers.getContractFactory("MintyFreshCoin");
		[deployer, ...otherClients] = await ethers.getSigners();
        const args = extractedObject("./solidity/scripts", "constructor");
		MintyFreshCoin = await MintyFreshCoinFactory.connect(deployer).deploy(...args["MintyFreshCoin"]); // Deploy
    });

    describe("Deployment", () => {
        it("Should put out some constants", async () => {
            expect(await MintyFreshCoin.name()).to.equal("Minty Fresh Coin");
            expect(await MintyFreshCoin.symbol()).to.equal("FRESH");
        });
    });
});