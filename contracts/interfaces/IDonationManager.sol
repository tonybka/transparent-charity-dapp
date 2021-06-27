//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface IDonationManager {
    function donate(uint256 campaignId) external returns (bool);

    function getFundRaised(uint256 campaignId)
        external
        view
        returns (uint256);
}
