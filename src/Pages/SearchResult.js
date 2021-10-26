import React from 'react'
import ItemCard from '../components/Card/ItemCard'
import { connect } from "react-redux"

const SearchResult = ({ items }) => {
    return (
        <div>
            {items.map(item=><ItemCard key={item.id} itemData={item}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.shop.searchItems
})

export default connect(mapStateToProps)(SearchResult)