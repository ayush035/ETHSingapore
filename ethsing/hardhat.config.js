
const { morphHolesky } = require("viem/chains")

module.exports = {
    solidity: "0.8.18",
    zksolc: {
      version: "latest",
      compilerSource: "binary",
      settings: {
        optimizer: {
          enabled: true,
        },
      },
    },
  }
  networks: {
      morphHolesky : {
        chainId: 2810
        url: "https://rpc-holesky.morphl2.io"
        accounts:[PRIVATE_KEY]
      }
    };