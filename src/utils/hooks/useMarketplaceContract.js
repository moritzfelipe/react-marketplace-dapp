import { useContract } from './useContract';
import { marketplaceContractAddress } from '../constants';
import MarketPlaceAbi from '../../contracts/Marketplace.abi.json';

export const useMarketplaceContract = () => useContract(MarketPlaceAbi, marketplaceContractAddress);
