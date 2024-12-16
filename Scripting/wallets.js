import { ethers, formatEther } from "ethers";
import 'dotenv/config'

const infuraId = process.env.INFURA_KEY;
const infuraUrl = `https://sepolia.infura.io/v3/${infuraId}`;

const provider = new ethers.JsonRpcProvider(infuraUrl);

const wallet = ethers.Wallet.fromPhrase(process.env.PRIVATE_KEY, provider);

const myBalance = await provider.getBalance(wallet.address);

const tx = await wallet.sendTransaction(
    {
        to: "0x4f3C4d972600D23C8dF09E736d3C4D32AB219Ec9",
        value: myBalance / 5n,
    }
)

console.log("sending tx...", tx);

await tx.wait();

console.log("tx sent");