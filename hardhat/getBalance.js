import { ethers, formatEther } from "ethers";
import hardhat from "hardhat";

async function main() {
  const localProvider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

  const firstAddress = "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266";

  console.log(formatEther(await localProvider.getBalance(firstAddress)));
}

main();
