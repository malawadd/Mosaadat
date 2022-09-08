require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config()

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  settings: {
    optimizer: {
      enabled: true,
      runs: 3000
    },
  },
  networks: {
    goerli: {
      url: process.env.GOERLI,
      accounts: [process.env.MNENOMIC],

    },
  }
};
