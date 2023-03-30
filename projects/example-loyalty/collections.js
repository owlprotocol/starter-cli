import { attrMemberIdNumber, attrTierEnum, attrTierBgImage, attrTierIconImage, attrPointsNumber, attrSubGroupEnum, } from './traits.js';
import { NFTGenerativeCollectionClass, } from '@owlprotocol/nft-sdk';
const collExampleLoyaltyDef = {
    name: 'Tutorial Example - Loyalty Program',
    description: 'Example from https://docs.owlprotocol.xyz/contracts/tutorials/nft-data',
    external_url: 'https://docs.owlprotocol.xyz/contracts/tutorials/nft-data',
    seller_fee_basis_points: 0,
    fee_recipient: '0xc2A3cB7d4BF24e456051E3a710057ac61f5dB133',
    generatedImageType: 'png',
    traits: {
        'Member ID': attrMemberIdNumber,
        'Status Tier': attrTierEnum,
        Background: attrTierBgImage,
        'Tier Badge': attrTierIconImage,
        Points: attrPointsNumber,
        'Sub Group': attrSubGroupEnum,
    },
};
export const collExampleLoyalty = NFTGenerativeCollectionClass.fromData(collExampleLoyaltyDef);
export default collExampleLoyaltyDef;
