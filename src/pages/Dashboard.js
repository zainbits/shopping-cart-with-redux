import React from 'react'
import { ItemCard } from '../components/Card/ItemCard'
import { connect } from "react-redux"

const Dashboard = ({ items }) => {
    return (
        <div>
            {items.map(item=><ItemCard key={item.id} itemData={item}/>)}
            {/* <ItemCard /> */}
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.shop.items
})

export default connect(mapStateToProps)(Dashboard)