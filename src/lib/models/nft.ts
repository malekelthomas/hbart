import type { User } from './user';

export interface NFT {
	tokenId: string;
	name: string;
	symbol: string;
	creatorAddress: string;
	cid: string;
	price: number;
	creator: User;
	image: string;
}
