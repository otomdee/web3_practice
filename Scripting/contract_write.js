import { ethers, formatEther } from "ethers";
import "dotenv/config";
import { getSigner, getProvider } from "./utils.js";
import daiABI from "../abi/daiSepolia.js";

const ContractAddy = "0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357";
const walletTwoSigner = getSigner();
const testWalletOne = "0x095D4Ee06aAb76a4F8E28a2E7D251cAF106320c2";

const daiSepContract = new ethers.Contract(
  ContractAddy,
  daiABI,
  walletTwoSigner
);

console.log("sending tx...");
const sendDaiTx = await daiSepContract.transfer(
  testWalletOne,
  ethers.parseEther("100")
);
console.log("tx sent..");
await sendDaiTx.wait();
console.log("tx mined succesfully");
