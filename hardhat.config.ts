import "@nomiclabs/hardhat-waffle";
import "@nomiclabs/hardhat-ethers"; // alias of hardhat-deploy-ethers
import "hardhat-deploy";
import "hardhat-gas-reporter";
import "hardhat-contract-sizer";
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
  solidity: {
    version: "0.8.0",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
  namedAccounts: {
    deployer: 1,
  },
  paths: {
    sources: "./contracts",
    tests: "./test",
    cache: "./cache",
    artifacts: "./artifacts",
  },
  contractSizer: {
    alphaSort: true,
    runOnCompile: true,
    disambiguatePaths: false,
  },
  gasReporter: {
    currency: "USD",
    gasPrice: 200,
  },
};

export default config;
