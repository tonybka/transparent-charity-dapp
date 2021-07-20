// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * ERC20 token represents the repuation of an user
 */
contract ReputationPoint is ERC20 {
    // Default decimals is 18
    constructor() ERC20("Reputation Point", "RPT") {}
}
