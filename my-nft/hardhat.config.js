/**
* @type import('hardhat/config').HardhatUserConfig
*/
require('dotenv').config();
require("@nomiclabs/hardhat-ethers");
const { API_URL, PRIVATE_KEY } = process.env;
module.exports = {
   solidity: "0.7.3",
   defaultNetwork: "goerli",
   networks: {
      hardhat: {},
      goerli: {
         url: `https://eth-goerli.alchemyapi.io/v2/s39NakDTUzw6BI6Dqp8FIbfjyb23Pyo8`,
         accounts: [`0x4fabf04c248cf76641a636d6ea07190686112b7544d1d058c65a881c146bbc14`]
      }
   },
}