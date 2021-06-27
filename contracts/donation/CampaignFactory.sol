//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "../interfaces/ICampaignFactory.sol";

contract CampaignFactory is ICampaignFactory {
    function newCampaign(
        string calldata name,
        address representative,
        uint256 recipientId,
        uint256 startTime,
        uint256 endTime
    ) external override returns (bool) {
        return true;
    }

    function getCampaignCount() external view override returns (uint256) {
        return 0;
    }
}
