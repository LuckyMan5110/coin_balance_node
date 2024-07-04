const Web3 = require('web3');

// Initialize web3 with an HTTP provider pointing to a BSC node
const web3 = new Web3(new Web3.providers.HttpProvider('https://bsc-dataseed.binance.org/'));

// USDT contract address on BSC
const usdtContractAddress = '0x55d398326f99059fF775485246999027B3197955';

// ABI of the BEP-20 token standard
const minABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [
            {
                "name": "_owner",
                "type": "address"
            }
        ],
        "name": "balanceOf",
        "outputs": [
            {
                "name": "balance",
                "type": "uint256"
            }
        ],
        "type": "function"
    },
];

// Create a new contract instance with the USDT contract address and ABI
const usdtContract = new web3.eth.Contract(minABI, usdtContractAddress);

// Function to get the USDT balance of a given address
async function getUsdtBalance(address) {
    try {
        // Call the balanceOf method to get the balance of USDT tokens
        const balance = await usdtContract.methods.balanceOf(address).call();
        
        // Convert the balance from Wei (the smallest unit) to USDT (with 18 decimal places)
        const balanceInUsdt = web3.utils.fromWei(balance, 'ether');
        
        console.log(`The USDT balance of address ${address} is ${balanceInUsdt} USDT`);
    } catch (error) {
        console.error(`Error fetching USDT balance for address ${address}:`, error);
    }
}

// Replace this with the address you want to check
const address = '0xAE7C48bF12C936907B57858147670Ec9243461F3';

// Call the function to get the USDT balance
getUsdtBalance(address);
