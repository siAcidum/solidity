/*
Constant attached to the published smart contract
*/
const Migrations = artifacts.require("Migrations");

/*
Publication of the artifact and the contract attached to it.
@param Migrations - artifact const.
*/
module.exports = function (deployer) {
  deployer.deploy(Migrations);
};
