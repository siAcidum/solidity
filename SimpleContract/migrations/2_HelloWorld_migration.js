/*
Constant attached to the published smart contract.
*/
const HelloWorld = artifacts.require("HelloWorld");

/*
Publication of the artifact and the contract attached to it.
@param HelloWorld - artifact const.
*/
module.exports = function (deployer) {
  deployer.deploy(HelloWorld);
};
