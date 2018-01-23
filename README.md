# Ethereum Lottery Demo

Yet another prototype of a `Lottery` DApp which is currently just a renamed fork of [SampleCrowdsale.sol](https://github.com/OpenZeppelin/zeppelin-solidity/blob/master/contracts/examples/SampleCrowdsale.sol) obtained from the examples shared by [OpenZeppelin](https://github.com/OpenZeppelin/zeppelin-solidity) (an ERC20 token template).

To deploy the `Lottery` DApp on a truffle server, do the following:

	git clone https://github.com/strange-labs-uk/ethereum-lottery
	cd ethereum-lottery
	npm install -g truffle
	npm install
	truffle develop

In the `truffle(develop)>` console:

	deploy --reset

Now you can interact with the lottery contract. Lets send an ether to the lottery DApp to buy lottery tokens.
	
	lot = Lottery.deployed()
	lot.then(function(instance){return instance.send(1);})
	lot.then(instance=>instance.weiRaised())

Check the number of tickets associated with investor addresses:

	lot.then(function(instance){return instance.send(1).then(i=>i.logs[1].args['numTokens']);})


Check your `LTK` balance:
	
	lot = Lottery.at(Lottery.address)
	ltk = lot.token().then(address=>LotteryToken.at(address))
	ltk.then(instance=>instance.balanceOf(web3.eth.coinbase))

Check the vault:
	
	vlt = lot.vault().then(address=>RefundVault.at(address))
	vlt.then(instance=>instance.investors())

By far the easiest thing seems to be to put all of this into `test/Lottery.test.js` and run `test` inside `truffle(develop)>` console.


## Front-end

There is a simple front-end in ./frontend. To use it, do the following:

    cd frontend
    npm install
    npm start
    Then browse to http://localhost:3000
    
Note: This has not yet been intergrated with the smart contracts.

Front End can now call functions from the deployed contract (follow above instructions to serve the Front End)
    
Open another terminal:
    
    truffle develop
    migrate --reset
    
Copy deployed address of "Lottery: ....":

    cd frontend/public/js/lottery.js
    paste address to var contract_address
  
Refresh page at http://localhost:3000
    
    Front End should display the goal of the Fund Raise == 10000
	
