const hre = require("hardhat");

async function main() {
  const GameItem = await hre.ethers.getContractFactory("GameItems");
  const gameItem = await GameItem.attach('0x6721De8B1865A6cD98C64165305611B1f28B95e4');

  const account = "0x98000edf79B0eb598085721D57d93B5865c87751";
  const totalBalance = await gameItem.getTotalBalance(account);

  console.log(`Total balance for ${account}: ${totalBalance}`);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
