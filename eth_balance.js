const Web3 = require('web3');

// Initialize web3 with an HTTP provider pointing to an Ethereum node
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/YZfmMo3qV3PLNl4okf78ic3HV2gr2Bvd'));

// Function to get the ETH balance of a given address
async function getEthBalance(address) {
    try {
        // Fetch the balance in Wei
        const balanceInWei = await web3.eth.getBalance(address);
        
        // Convert the balance from Wei to Ether
        const balanceInEth = web3.utils.fromWei(balanceInWei, 'ether');
        
        console.log(`The balance of address ${address} is ${balanceInEth} ETH`);
    } catch (error) {
        console.error(`Error fetching balance for address ${address}:`, error);
    }
}

// Replace this with the address you want to check
const address = '0x7cb6113AC2361aE5ba66984Dd6Ca651fEd6B102d';

// Call the function to get the balance
getEthBalance(address);
