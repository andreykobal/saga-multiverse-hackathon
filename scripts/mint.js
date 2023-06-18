const hre = require("hardhat");
const NUM_ITEMS = 1;
//const OWNER_ADDRESS = "0x98000edf79B0eb598085721D57d93B5865c87751";

async function main() {

      const GameItem = await hre.ethers.getContractFactory("GameItem");
      const gameItem = await GameItem.attach('0xca9785544566C10B83dF3e49dcc2BbE8EB203138')

      for (var i = 1; i <= NUM_ITEMS; i++) {
            await gameItem.mintItem(`https://bafkreiczapdwomdlotjqt4yaojyizlgarn4kq57smi3ptkwn5lug5yz7yu.ipfs.nftstorage.link/`, {value: hre.ethers.utils.parseEther("0.5")});
      }
}

main()
      .then(() => process.exit(0))
      .catch((error) => {
            console.error(error);
            process.exit(1);
      });
