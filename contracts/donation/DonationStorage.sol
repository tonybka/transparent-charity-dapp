pragma solidity ^0.8.0;

contract DonationStorage {
    struct DonationCampaign {
        string name;
        address creator;
        uint256 totalFunded;
        address recipient;
        uint8 state;
    }

    // campaign => its metadata
    mapping(uint256 => DonationCampaign) donationCampaigns;
    // campaign => corresponding donation amounts from investors
    mapping(uint256 => mapping(address => uint256)) donationAmounts;
    // campaign => donators
    mapping(uint256 => address[]) donators;
}
