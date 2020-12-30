const YarockToken = artifacts.require("./YarockToken.sol");

module.exports = function (deployer) {
  deployer.deploy(YarockToken,1000000);
};
