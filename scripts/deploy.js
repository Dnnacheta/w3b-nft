async function main() {
  // Grab the contract factory 
  const NFT = await ethers.getContractFactory("W3bNFT");
  const wNFT = await NFT.attach(
    "0x21fE7704f9Bb608d1b8673c3Fe78CFFC1B1C804a" // The deployed contract address
  );

  await wNFT.mintNFT();

  console.log("Deployment started🔹🔹🔹, returning a promise that resolves to a contract object 🤞"); 

  // const wNFT = await NFT.deploy(); // 0x21fE7704f9Bb608d1b8673c3Fe78CFFC1B1C804a
  // console.log("Contract deployed to address:", wNFT.address);
}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });
