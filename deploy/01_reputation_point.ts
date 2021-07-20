import { HardhatRuntimeEnvironment } from "hardhat/types";
import { DeployFunction } from "hardhat-deploy/types";

import * as ContractNames from "../constants/registry_contract_names";

const func: DeployFunction = async function (hre: HardhatRuntimeEnvironment) {
  const { deployments, getNamedAccounts, getChainId } = hre;
  const { deployer } = await getNamedAccounts();

  const chainId = await getChainId();
  console.log(`[Deployment] ChainId: ${chainId}`);

  const { deploy } = deployments;
  await deploy(ContractNames.REPUTATION_POINT, {
    from: deployer,
    gasLimit: 6000000,
    args: [],
    log: true,
  });
};
export default func;
func.tags = [ContractNames.REPUTATION_POINT];
