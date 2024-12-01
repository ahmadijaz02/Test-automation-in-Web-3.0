// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract SimpleToken is ERC20, Ownable {
    uint256 public constant INITIAL_SUPPLY = 1_000_000 * 10**18; // 1 million tokens with 18 decimals

    constructor(address initialOwner) ERC20("SimpleToken", "STK") Ownable(initialOwner) {
        _mint(initialOwner, INITIAL_SUPPLY);
    }

   
    function mint(address account, uint256 amount) external onlyOwner {
        _mint(account, amount);
    }

   
}