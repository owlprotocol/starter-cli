import { NFTGenerativeCollection, NFTGenerativeCollectionClass, NFTGenerativeTraitNumberClass, NFTGenerativeTraitEnumClass, NFTGenerativeTraitImageClass } from '@owlprotocol/nft-sdk';
declare const collExampleLoyaltyDef: NFTGenerativeCollection;
export declare const collExampleLoyalty: NFTGenerativeCollectionClass<{
    'Member ID': NFTGenerativeTraitNumberClass;
    'Status Tier': NFTGenerativeTraitEnumClass;
    Background: NFTGenerativeTraitImageClass;
    'Tier Badge': NFTGenerativeTraitImageClass;
    Points: NFTGenerativeTraitNumberClass;
    Country: NFTGenerativeTraitEnumClass;
    'Sub Group': NFTGenerativeTraitEnumClass;
    'Last Transferred': NFTGenerativeTraitNumberClass;
}, undefined>;
export default collExampleLoyaltyDef;
