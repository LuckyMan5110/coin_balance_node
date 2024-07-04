const Web3 = require('web3');
const fetch = require('node-fetch');

// Initialize web3 with an HTTP provider pointing to a Tron node
const web3 = new Web3(new Web3.providers.HttpProvider('https://api.trongrid.io'));

// Function to get the TRX balance of a given address using JSON-RPC
async function getTrxBalance(address) {
    try {
        const response = await fetch('https://api.trongrid.io/wallet/getaccount', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                address: address
            })
        });

        const data = await response.json();

        // Check if the response contains the balance
        if (data && data.balance !== undefined) {
            // Convert the balance from sun to TRX (1 TRX = 1,000,000 sun)
            const balanceInTrx = web3.utils.fromWei(data.balance.toString(), 'mwei');
            console.log(`The balance of address ${address} is ${balanceInTrx} TRX`);
        } else {
            console.log(`No balance information found for address ${address}`);
        }
    } catch (error) {
        console.error(`Error fetching balance for address ${address}:`, error);
    }
}

// Replace this with the address you want to check
const address = 'TWcPhpvTLkJkUwiQGxm6eMgrYs8oaVqNMT';
// const address = 'TNqZ2qx5PCDo5UwpsJTuJTErBmjunf32Hq';


// Call the function to get the balance
getTrxBalance(address);
