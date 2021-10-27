import React from 'react'
import ItemCard from '../../components/Card/ItemCard'
import { connect } from "react-redux"
import "./Dashboard.css"
const Dashboard = ({ items }) => {
    return (
        <div className="block__dashboard">
            {items.map(item=><ItemCard key={item.id} itemData={item}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.shop.items
})

export default connect(mapStateToProps)(Dashboard)