import { GHOContract, PBMContract, PaymentContract } from "@/configs/contract.config";
import { readContract, writeContract } from "viem/actions";
import { getPublicClient } from "wagmi/actions";
import { BrowserProvider, JsonRpcSigner, ethers } from "ethers";
import { Account, Chain, Client, Transport } from "viem";
import { config } from "@/providers/connectKit.provider";
import { Config } from '@wagmi/core'

export const payWithVoucher = async (chainId: number, from: `0x${string}`, hotelAddress: `0x${string}`, otaAddress: `0x${string}`, voucherId: bigint, paymentAmount: bigint, feeAmount: bigint, voucherAmount: bigint) => {
    try {
        const tokenName = "Gho Token";
        const pbmContract = PBMContract(chainId);
        const ghoContract = GHOContract(chainId);
        const paymentContract = PaymentContract(chainId)
    
        const currentNonce = await readContract(getPublicClient(), { address: ghoContract.address, abi: ghoContract.abi, functionName: "nonces", args: [from] });
        const nonce = currentNonce;
        const deadline = Math.floor((new Date().valueOf() + 60 * 60 * 1000) / 1000);
    
        const domain = {
            name: tokenName,
            version: "1",
            chainId: chainId,
            verifyingContract: ghoContract.address,
    
        }
        const types = {
            Permit: [
                { name: 'owner', type: 'address' },
                { name: 'spender', type: 'address' },
                { name: 'value', type: 'uint256' },
                { name: 'nonce', type: 'uint256' },
                { name: 'deadline', type: 'uint256' }
            ],
        }
        const values = {
            owner: from,
            spender: paymentContract.address,
            value: paymentAmount,
            nonce: nonce, //you will get once you import the erc20permit contract
            deadline: deadline // future timestamp
        }
        const signer = await new ethers.BrowserProvider((window as any)?.ethereum as any).getSigner();
        const signature = await signer.signTypedData(domain, types, values);
    
        const abiCoder = new ethers.AbiCoder();
        const data = abiCoder.encode(['address', 'address', 'address', 'uint256', 'uint256', 'address', 'tuple(uint256,uint256,bytes)'], [signer.address, hotelAddress, ghoContract.address, paymentAmount, feeAmount, otaAddress, [nonce, deadline, signature]]) as `0x${string}`
        
        const contract = new ethers.Contract(pbmContract.address, pbmContract.abi, signer);
        return contract.safeTransferFrom(from, hotelAddress, voucherId, voucherAmount, data);
        // return writeContract(config, { address: pbmContract.address, abi: pbmContract.abi, functionName: "safeTransferFrom", args: [from, hotelAddress, voucherId, voucherAmount, data]})
        // await pbmContract.safeTransferFrom(traveler.address, hotel, 0, voucherAmount, data);
        // const signature = await traveler.signTypedData(domain, types, values);
    } catch (e) {

    }
}

// export function clientToSigner(client: Client<Transport, Chain, Account>) {
//     const { account, chain, transport } = client
//     const network = {
//       chainId: chain.id,
//       name: chain.name,
//       ensAddress: chain.contracts?.ensRegistry?.address,
//     }
//     const provider = new BrowserProvider(transport, network)
//     const signer = new JsonRpcSigner(provider, account.address)
//     return signer
//   }
  
//   /** Action to convert a viem Wallet Client to an ethers.js Signer. */
//   export async function getEthersSigner(
//     config: Config,
//     { chainId }: { chainId?: number } = {},
//   ) {
//     const client = await getConnectorClient(config, { chainId })
//     return clientToSigner(client)
//   }