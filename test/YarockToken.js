var YarockToken=artifacts.require("./YarockToken.sol");

contract('YarockToken',function(account){

	it('set the total supply upon deployment', function(){
		return YarockToken.deployed().then(function(instance){
			tokenInstance=instance;
			return tokenInstance.totalSupply();
		}).then(function(totalSupply){
			assert.equal(totalSupply.toNumber(),1000000,'sets the total supply to 1,000,000');
		});
	});
})
