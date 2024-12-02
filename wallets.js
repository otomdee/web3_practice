import { ethers } from "ethers";

const myWallet = ethers.Wallet.createRandom();
const seed = myWallet.mnemonic.phrase;

const wallet7 = ethers.Wallet.fromPhrase(seed, {path: `m/44'/60'/0'/0/7`});
const wallet4 = ethers.Wallet.fromPhrase(seed, {path: `m/44'/60'/0'/0/4`});

console.log(wallet7.address);
console.log(wallet4.address);