import { PBMABI } from "@/constants/abis/PBM.abi";
import { addressMapping } from "./address.config";
import { PBMManagerABI } from "@/constants/abis/PBMManager.abi";
import { GHO_ABI } from "@/constants/abis/Gho.abi";
import { Payment_ABI } from "@/constants/abis/Payment.abi";

const PBMContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).TravelPBM,
    abi: PBMABI,
  };
};

const PBMManagerContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).TravelPBMManger,
    abi: PBMManagerABI,
  };
};

const GHOContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).GHO,
    abi: GHO_ABI,
  };
};

const PaymentContract = (chainId: number) => {
  return {
    address: addressMapping(chainId).Payment,
    abi: Payment_ABI,
  };
};


const Contract = (chainId: number) => {
  return [PBMContract(chainId), PBMManagerContract(chainId), GHOContract(chainId), PaymentContract(chainId)];
};

export { PBMContract, PBMManagerContract, GHOContract, PaymentContract };

export default Contract;
