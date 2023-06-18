require("@nomiclabs/hardhat-waffle");
require("dotenv").config();
require("@nomiclabs/hardhat-etherscan");

const privateKey = process.env.MNEMONIC
const maticUrl = process.env.MATIC_APP_ID
const polyScan = process.env.POLYGONSCAN
module.exports = {
  solidity: "0.8.0",
  networks: {
    matic: {
      chainId: 137,
      url: `https://rpc-mainnet.maticvigil.com/v1/${maticUrl}`,
      accounts: [privateKey]
    },
    mantle: {
      chainId: 5001,
      url: `https://rpc.testnet.mantle.xyz/`,
      accounts: [privateKey]
    },
    mymetaverse: {
      chainId: 1687098052079624,
      url: `https://mymetaverse-1687098052079624-1.jsonrpc.sp1.sagarpc.io/`,
      accounts: [privateKey]
    }
  },
  //* Keep name as 'etherscan' to avoid errors.
  etherscan: {
    url: 'https://polygonscan.com/',
    apiKey: polyScan
  }
};
