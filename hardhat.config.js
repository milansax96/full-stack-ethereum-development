module.exports = {
  defaultNetwork: "hardhat",
  paths: {
    artifacts: './src/artifacts',
  },
  networks: {
    hardhat: {},
    ropsten: {
      url: "https://ropsten.infura.io/v3/2de36bd8a91f4769ba2064eefc046c9d",
      accounts: [`0xde9be858da4a475276426320d5e9262ecfc3ba460bfac56360bfa6c4c28b4ee0`]
    }
  },
  solidity: "0.8.4",
};