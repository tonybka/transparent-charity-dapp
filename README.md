# Transparent Charity DApp
<span style="color:orange;">[DRAFT]</span>
Bring transparency and accountability to charitable donations

## Use cases
- Survey report 2016-2018: https://www.theguardian.com/society/2019/may/07/fewer-britons-donate-charities-after-scandals-erode-trust
- Sad story of Wu Huayan: https://www.bbc.com/news/world-asia-china-51131296
- VN Comedian: https://e.vnexpress.net/news/life/culture/philanthropy-minus-transparency-equals-loss-of-trust-celebrities-discover-4284068.html


!!! 📝 **Disclaimer**:
We don't make any judgment or conclusion to the use cases above, just taking them as the problems that need to be solved

## Technology
### Ethereum Blockchain
- **Language:** Solidity
- **Build & development tool:** Hard hat
- **Test:** EthereJS/Waffle
- **Security & Audit:** Slither & [OpenZeppelin Defender](https://openzeppelin.com/defender/)


#### Smart contracts
- ERC-20
- ERC-721 & IPFS
- Multisig Contracts
- [Upgradable contracts with Proxy Pattern](https://docs.openzeppelin.com/upgrades-plugins/1.x/proxies) & Unstructured Storage 

## Design
### Entities
- Donor
- Ambassadors
- Supporters
- Receiver
### Records
- Campaign (Donations, Total amounts, Beneficiaries)
- Donation records (Donor, currency, amount, date)
- Allocation records (Receiver, currency, amount, date)