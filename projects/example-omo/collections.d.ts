import { NFTGenerativeCollectionClass, NFTGenerativeTraitEnumClass, NFTGenerativeTraitImageClass } from '@owlprotocol/nft-sdk';
export declare const collHatsChild: NFTGenerativeCollectionClass<{
    Hats: NFTGenerativeTraitImageClass;
}, undefined>;
export declare const collExample: NFTGenerativeCollectionClass<{
    Vibe: NFTGenerativeTraitEnumClass;
    Background: NFTGenerativeTraitImageClass;
    Body: NFTGenerativeTraitImageClass;
}, {
    Hats: NFTGenerativeCollectionClass<{
        Hats: NFTGenerativeTraitImageClass;
    }>;
}>;
export default collExample;
