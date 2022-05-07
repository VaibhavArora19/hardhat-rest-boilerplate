// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
// Contract by CAT6#2699
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MintyFreshCoin is ERC20 {
    uint constant standardAmount = 10000 * 10 ** 18;
    function quickMint() public { _mint(msg.sender, standardAmount); } 
    constructor() ERC20("Minty Fresh Coin", "FRESH") {  }
}