import { NFTGenerativeCollection, NFTGenerativeCollectionClass, NFTGenerativeTraitNumberClass, NFTGenerativeTraitEnumClass, NFTGenerativeTraitImageClass } from '@owlprotocol/nft-sdk';
declare const collExampleLoyaltyDef: NFTGenerativeCollection;
export declare const collExampleLoyalty: NFTGenerativeCollectionClass<{
    'Member ID': NFTGenerativeTraitNumberClass;
    'Status Tier': NFTGenerativeTraitEnumClass;
    Background: NFTGenerativeTraitImageClass;
    'Tier Badge': NFTGenerativeTraitImageClass;
    Points: NFTGenerativeTraitNumberClass;
    'Sub Group': NFTGenerativeTraitEnumClass;
}, undefined>;
export default collExampleLoyaltyDef;
