/*
Constant attached to the published smart contract
*/
const Factorial = artifacts.require("Factorial");

/*
Publication of the artifact and the contract attached to it.
@param Factorial - artifact const.
*/
module.exports = function (deployer) {
  deployer.deploy(Factorial);
};
