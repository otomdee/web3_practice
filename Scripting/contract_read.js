import { ethers, formatEther } from "ethers";
import "dotenv/config";
import { getProvider } from "./utils.js";
import daiABI from "../abi/daiSepolia.js";

const ContractAddy = "0xFF34B3d4Aee8ddCd6F9AFFFB6Fe49bD371b8a357";
const ContractABI = daiABI;
const provider = getProvider();

const daiContract = new ethers.Contract(ContractAddy, ContractABI, provider);

console.log(
  formatEther(
    await daiContract.balanceOf("0x095D4Ee06aAb76a4F8E28a2E7D251cAF106320c2")
  )
);
