const hre = require("hardhat");

async function main() {
    const GameItem = await hre.ethers.getContractFactory("GameItems");
    const gameItem = await GameItem.attach('0x6721De8B1865A6cD98C64165305611B1f28B95e4');

    const NUM_ITEMS = 1;
    const tokenURIs = [
        "https://bafkreiczapdwomdlotjqt4yaojyizlgarn4kq57smi3ptkwn5lug5yz7yu.ipfs.nftstorage.link/"
    ];

    for (let i = 0; i < NUM_ITEMS; i++) {
        console.log(`Minting tokens: Batch ${i + 1}`);
        await gameItem.batchMint(tokenURIs);
    }
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
