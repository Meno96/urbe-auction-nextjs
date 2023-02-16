import { gql } from "@apollo/client"

const GET_ACTIVE_ITEMS = gql`
    {
        activeItems(first: 5, where: { winner: "0x0000000000000000000000000000000000000000" }) {
            id
            buyer
            winner
            nftAddress
            tokenId
            price
        }
    }
`
export default GET_ACTIVE_ITEMS
