import { gql } from "@apollo/client"

export const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 20, where: { winner: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            winner
            nftAddress
            tokenId
            price
        }
    }
`

export const GET_BUYED_ITEMS = gql`
    query GetAccountNfts($account: String!, $deployer: String!) {
        auctionEndeds(where: { winner: $account, winner_not: $deployer }) {
            id
            winner
            nftAddress
            tokenId
            price
        }
    }
`
