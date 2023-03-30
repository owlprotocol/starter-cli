import { traitEnumVibe, traitImageBg, traitImageBody, traitImageHats } from './traits.js';
import { NFTGenerativeCollectionClass, } from '@owlprotocol/nft-sdk';
const collHatsChildDef = {
    name: 'Tutorial Example - NFT Hats Sub-Collection',
    description: 'Example from https://docs.owlprotocol.xyz/contracts/tutorials/nft-image-layers',
    external_url: 'https://docs.owlprotocol.xyz/contracts/tutorials/nft-image-layers',
    seller_fee_basis_points: 5000,
    fee_recipient: '0xc2A3cB7d4BF24e456051E3a710057ac61f5dB133',
    generatedImageType: 'png',
    traits: {
        Hats: traitImageHats,
    },
};
const collNestedDef = {
    name: 'Thread Haus - Innovot NFT Collection',
    description: 'Example from https://docs.owlprotocol.xyz/contracts/tutorials/nft-image-layers',
    external_url: 'https://docs.owlprotocol.xyz/contracts/tutorials/nft-image-layers',
    seller_fee_basis_points: 10000,
    fee_recipient: '0xc2A3cB7d4BF24e456051E3a710057ac61f5dB133',
    generatedImageType: 'png',
    traits: {
        Vibe: traitEnumVibe,
        Background: traitImageBg,
        Body: traitImageBody,
    },
    //@ts-ignore
    children: {
        Hats: collHatsChildDef,
    },
};
export const collHatsChild = NFTGenerativeCollectionClass.fromData(collHatsChildDef);
export const collExample = NFTGenerativeCollectionClass.fromData(collNestedDef);
export default collExample;
