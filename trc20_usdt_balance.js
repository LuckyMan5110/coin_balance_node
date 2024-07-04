const Web3 = require('web3');

// Initialize web3 with a Tron provider (e.g., Trongrid)
const web3 = new Web3(new Web3.providers.HttpProvider('https://api.trongrid.io'));

// USDT TRC20 contract address on Tron
const usdtContractAddress = 'TR7NHqjeKQxGTCi8q8ZY4pL8otSzgjLj6t';

// ABI of the TRC20 token standard
const usdtAbi = [
    // balanceOf
    {
        "constant": true,
        "inputs": [{"name":"_owner","type":"address"}],
        "name":"balanceOf",
        "outputs":[{"name":"balance","type":"uint256"}],
        "type":"function"
    }
];

// Create a new contract instance
const usdtContract = new web3.eth.Contract(usdtAbi, usdtContractAddress);

// Function to get the USDT TRC20 balance of a given address
async function getUsdtBalance(walletAddress) {
    try {
        // Call the balanceOf function on the USDT TRC20 contract
        const balance = await usdtContract.methods.balanceOf(walletAddress).call();

        // Convert balance from sun (the smallest unit) to USDT (with 6 decimal places)
        const balanceInUSDT = balance / 1e6; // USDT on Tron has 6 decimals

        console.log(`USDT balance of ${walletAddress}: ${balanceInUSDT} USDT`);
    } catch (error) {
        console.error('Error fetching USDT balance:', error);
    }
}

// Replace with your Tron wallet address
const walletAddress = 'TNqZ2qx5PCDo5UwpsJTuJTErBmjunf32Hq';

// Call the function to get the USDT TRC20 balance
getUsdtBalance(walletAddress);
