import { ethers } from "ethers";
import 'dotenv/config';

const infuraId = process.env.INFURA_KEY;
const infuraSepolia = `https://sepolia.infura.io/v3/${infuraId}`;
const infuraMainnet = `https://mainnet.infura.io/v3/${infuraId}`;

function getProvider(mainnet = false) {
   const providerUrl = mainnet ? infuraMainnet : infuraSepolia

   return new ethers.JsonRpcProvider(providerUrl);
}

 function createNewWallet() {
    //0xbD9453f380c8473ede8039Fffb55236599F9830F
   const wallet = ethers.Wallet.createRandom();
   return wallet
}

function getSigner() {
    const provider = getProvider();

    return new ethers.Wallet(process.env.NEW_PK_ONE, provider);
}

export {getProvider, createNewWallet, getSigner}