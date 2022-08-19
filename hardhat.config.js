require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */

require('dotenv').config();
require("@nomiclabs/hardhat-ethers");

const { GOERLI_URL, PRIVATE_KEY } = process.env;

module.exports = {
   solidity: "0.8.9",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: GOERLI_URL,
         accounts: [PRIVATE_KEY]
      }
   },
}
