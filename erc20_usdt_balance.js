const Web3 = require('web3');

// Initialize web3 with an HTTP provider pointing to an Ethereum node (like Infura)
const web3 = new Web3(new Web3.providers.HttpProvider('https://eth-mainnet.alchemyapi.io/v2/YZfmMo3qV3PLNl4okf78ic3HV2gr2Bvd'));


// USDT contract address on Ethereum mainnet
const usdtContractAddress = '0xdac17f958d2ee523a2206206994597c13d831ec7';

// ABI of the ERC-20 token standard
const minABI = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    }
];

// Create a new contract instance with the USDT contract address and ABI
const usdtContract = new web3.eth.Contract(minABI, usdtContractAddress);

// Function to get the USDT balance of a given address
async function getUsdtBalance(address) {
    try {
        // Call the balanceOf method to get the balance of USDT tokens
        const balance = await usdtContract.methods.balanceOf(address).call();

        // Convert the balance from Wei (the smallest unit) to USDT (with 6 decimal places)
        const balanceInUsdt = balance / 1e6; // USDT has 6 decimals

        console.log(`The USDT balance of address ${address} is ${balanceInUsdt} USDT`);
    } catch (error) {
        console.error(`Error fetching USDT balance for address ${address}:`, error);
    }
}

// Replace this with the Ethereum address you want to check
const address = '0xaEB70cbC59361665DCE0E2829C198B3CDC9729f3';

// Call the function to get the USDT balance
getUsdtBalance(address);
