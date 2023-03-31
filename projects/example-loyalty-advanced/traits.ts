import { NFTGenerativeTraitImage, NFTGenerativeTraitEnum, NFTGenerativeTraitNumber } from '@owlprotocol/nft-sdk';

export const attrMemberIdNumber: NFTGenerativeTraitNumber = {
    name: 'Member ID',
    type: 'number',
    description: `Owner's membership ID`,
    min: 1000000,
    max: 99999999999,
    abi: 'uint48',
};

export const attrTierEnum: NFTGenerativeTraitEnum = {
    name: 'Status Tier',
    type: 'enum',
    description: 'Status tier in the loyalty program, can be one of: General, Blue, Silver, Gold, Platinum, Diamond',
    options: ['Bronze', 'Silver', 'Gold', 'Platinum', 'Diamond'],
};

export const attrTierBgImage: NFTGenerativeTraitImage = {
    name: 'Background',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Basic',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/bg-blue.png',
        },
        {
            value: 'Facets',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/bg-silver.png',
        },
        {
            value: 'Swirls',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/bg-purple.png',
        },
        {
            value: 'Dark',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/bg-dark.png',
        },
        {
            value: 'Tunnels',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/bg-squares.png',
        },
    ],
};

export const attrTierIconImage: NFTGenerativeTraitImage = {
    name: 'Tier Badge',
    type: 'image',
    image_type: 'png',
    options: [
        {
            value: 'Bronze',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/tier-bronze.png',
        },
        {
            value: 'Silver',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/tier-silver.png',
        },
        {
            value: 'Gold',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/tier-gold.png',
        },
        {
            value: 'Platinum',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/tier-platinum.png',
        },
        {
            value: 'Diamond',
            image_url:
                'https://leovigna.mypinata.cloud/ipfs/QmTeQUXNbaXZctrhfztbWsvfrz1vBNvaqHui6LVbDp14YV/tier-diamond.png',
        },
    ],
};

export const attrPointsNumber: NFTGenerativeTraitNumber = {
    name: 'Points',
    type: 'number',
    description: 'Points collected from participation',
    min: 0,
    max: 16777215,
    abi: 'uint24',
};

export const attrCountryEnum: NFTGenerativeTraitEnum = {
    name: 'Country',
    type: 'enum',
    description: `Owner's country`,
    options: [
        'United Arab Emirates',
        'Canada',
        'France',
        'Germany',
        'United States of America'
    ],
};

export const attrSubGroupEnum: NFTGenerativeTraitEnum = {
    name: 'Sub Group',
    type: 'enum',
    description: 'The special subgroup the user is part of, if any',
    options: ['None', 'Yacht Club', 'Car Club', 'Diving Club'],
    abi: 'uint16', // overrides the 'uint8' default
};

export const attrLastTransferTimestampNumber: NFTGenerativeTraitNumber = {
    name: 'Last Transferred',
    type: 'number',
    description: 'Time this NFT was last transferred, as seconds since the epoch - JS time.now() / 1000',
    min: 0,
    max: 4294967295,
    abi: 'uint32',
};
