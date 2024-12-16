import { ethers, formatEther } from "ethers";
import hardhat from "hardhat";

const getSigner = (await hardhat.ethers.getSigners())[0];

const toAddress = "0x90F79bf6EB2c4f870365E785982E1f101E93b906";

const tx = await getSigner.sendTransaction({
  to: toAddress,
  value: ethers.parseEther("1"),
});

console.log("tx sent .");
await tx.wait();

console.log("tx mined");

console.log("new balance :");

const localProvider = new ethers.JsonRpcProvider("http://127.0.0.1:8545/");

console.log(formatEther(await localProvider.getBalance(toAddress)));
