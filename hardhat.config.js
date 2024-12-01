require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.27",
  networks: {
    rinkeby: {
        url: "https://mainnet.infura.io/v3/fb5e07fa3e3e42fa81200be7fa548035",
        accounts: ["23db45d0398d4e871ba15c78ab62da91428a310b8a0df1d291cf124135eb1730"],
    },
},
};
