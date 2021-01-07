const YarockToken = artifacts.require("./YarockToken.sol");
const YarockTokenSale = artifacts.require("./YarockTokenSale.sol");

module.exports = function (deployer) {
  deployer.deploy(YarockToken,1000000).then(function(){
  	//token price is 0.001 Ether
  	var tokenPrice= 1000000000000000;
  	return deployer.deploy(YarockTokenSale,YarockToken.address,tokenPrice);
  })
};
