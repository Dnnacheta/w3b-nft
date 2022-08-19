require('dotenv').config();
const ethers = require('ethers');

const GOERLI_API_KEY = process.env.GOERLI_API_KEY;

const provider = new ethers.providers.AlchemyProvider('goerli', GOERLI_API_KEY);

const contract = require("../artifacts/contracts/w3b-nft.sol/W3bNFT.json");
// console.log(JSON.stringify(contract.abi));

// Create a signer
const privateKey = process.env.PRIVATE_KEY
const signer = new ethers.Wallet(privateKey, provider);

const abi = contract.abi
const contractAddress = '0x21fE7704f9Bb608d1b8673c3Fe78CFFC1B1C804a'

const wNft = new ethers.Contract(contractAddress, abi, signer);


// Get the NFT Metadata IPFS URL
const tokenUri = "https://gateway.pinata.cloud/ipfs/QmaF7PfVJm8xqUyAMNxeRwJBKxKvjVPcyhFxdNba4WCgJn"

// Call mintNFT function
const mintNFT = async () => {
    let nftTxn = await wNft.mintNFT(signer.address, tokenUri)
    await nftTxn.wait()
    console.log(`Here is your NFT ⏩ https://goerli.etherscan.io/tx/${nftTxn.hash}`)
}

mintNFT()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });


