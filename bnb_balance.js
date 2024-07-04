const Web3 = require('web3');
// const {Web3} = require('web3');


// Connect to BSC node
const web3 = new Web3('https://bsc-dataseed.binance.org/');

// Function to get BNB balance
async function getBnbBalance(address) {
    try {
        const balanceWei = await web3.eth.getBalance(address);
        const balanceBnB = web3.utils.fromWei(balanceWei, 'ether');
        return balanceBnB;
    } catch (error) {
        console.error('Error getting BNB balance:', error);
    }
}

// Replace with the BSC wallet address you want to check
// const walletAddress = '0xAE7C48bF12C936907B57858147670Ec9243461F3';
const walletAddress = '0x8ab10FB8444875b551D6eB3762c015a29b50022A';

// Get and log the balance
getBnbBalance(walletAddress).then(balance => {
    console.log(`Balance: ${balance} BNB`);
});
