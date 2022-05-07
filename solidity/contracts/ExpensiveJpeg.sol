// SPDX-License-Identifier: MIT
pragma solidity >=0.7.0 <0.9.0;
// Contract by CAT6#2699
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract ExpensiveJpeg is ERC721 { 
    string private baseUri;
    uint private _tokenIds;
    function quickMint() public returns(uint) {
        _tokenIds++;
        _mint(msg.sender, _tokenIds); 
        return _tokenIds; }    

    function approveAll(address spender) public returns(uint[] memory) {
        uint[] memory collection = _fetchInventory(msg.sender);
        for (uint i; i < collection.length; i++) { _approve(spender, collection[i]); }
        return collection; }  

    function _fetchInventory(address user) internal view returns(uint[] memory) {
        uint tokenCount = balanceOf(user);
        if (tokenCount == 0) { return new uint[](0); } 
        else {
            uint[] memory result = new uint[](tokenCount);
            uint resultIndex;
            for (uint tokenId = 1; tokenId <= _tokenIds; tokenId++) {
                if (ownerOf(tokenId) == user) {
                    result[resultIndex] = tokenId;
                    resultIndex++; } }
        return result; } }

    function _baseURI() internal view override returns (string memory) { return baseUri; } 
    constructor(string memory uri) ERC721("Expensive JPEG", "$JPG") { baseUri = uri; }
}
