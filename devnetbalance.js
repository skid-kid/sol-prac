import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
 
const connection = new Connection(clusterApiUrl("devnet"));
const address = new PublicKey("4Vf5wQ9zfPMRkdXWqGeicmmsxDpEXJJ4NtrB8etYRexQ");
const balance = await connection.getBalance(address);
 
console.log(`The balance of the account at ${address} is ${balance} lamports`);
console.log(`✅ Finished!`);