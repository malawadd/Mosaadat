const hre = require("hardhat");
const fs = require("fs");

async function main() {
  const Mosaadat = await hre.ethers.getContractFactory("Pledges");
  const mosaadat = await Mosaadat.deploy();

  await mosaadat.deployed();

  console.log("mosaadat deployed to:", mosaadat.address);

  fs.writeFileSync(
    "./config.js", `
    export const mosaadatAddress = "${mosaadat.address}"`
  )

}
// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
