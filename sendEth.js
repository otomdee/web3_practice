import { ethers, formatEther } from "ethers";
import 'dotenv/config';
import {getProvider, getSigner} from "./utils.js";

//signer for Two
const sepoliaSigner = getSigner();
const sepoliaProvider = getProvider();

const testWalletOne = "0x095D4Ee06aAb76a4F8E28a2E7D251cAF106320c2";
const testWalletTwo = "0xbD9453f380c8473ede8039Fffb55236599F9830F";

//function to send 20% of wallet balance eth from One to Two
async function sendEth() {
    //get signer for One
    const signerOne = ethers.Wallet.fromPhrase(process.env.PRIVATE_KEY, sepoliaProvider);

    const OneBalance = await sepoliaProvider.getBalance(testWalletOne);

    const tx = await signerOne.sendTransaction({
        to: testWalletTwo,
        value: OneBalance / 5n
    })

    await tx.wait();
    console.log("tx sent");
}