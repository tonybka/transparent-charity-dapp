import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers"; // alias of hardhat-deploy-ethers
import "hardhat-deploy";
import { task } from "hardhat/config";

import { HardhatUserConfig } from "hardhat/types";

const fs = require("fs");
const mnemonic = fs.readFileSync(".secret").toString().trim();

const config: HardhatUserConfig = {
  defaultNetwork: "hardhat",
  networks: {
    localhost: {
      url: "http://127.0.0.1:8545",
    },
    hardhat: {
      accounts: { mnemonic: mnemonic, count: 20 },
      allowUnlimitedContractSize: true,
      loggingEnabled: false,
    },
  },
  namedAccounts: {
    deployer: 1,
  },
};

export default config;
