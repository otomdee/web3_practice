import { ethers } from "ethers";
import 'dotenv/config';

const infuraId = process.env.INFURA_KEY;
const infuraUrl = `https://mainnet.infura.io/v3/${infuraId}`;

const provider = new ethers.JsonRpcProvider(infuraUrl);

console.log(await provider.resolveName("atg.eth"));