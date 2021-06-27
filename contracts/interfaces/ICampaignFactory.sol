//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

interface ICampaignFactory {
    function newCampaign(
        string calldata name,
        address representative,
        uint256 recipientId,
        uint256 startTime,
        uint256 endTime
    ) external returns (bool);

    function getCampaignCount() external view returns (uint256);
}
