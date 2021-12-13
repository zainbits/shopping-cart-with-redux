import React from 'react'
import ItemCard from '../../components/Card/ItemCard'
import { connect } from "react-redux"
import "./Dashboard.css"
import { fetchItems } from '../../Redux/Shopping/shopping-actions'

const Dashboard = ({ items, fetch }) => {

    React.useEffect(() => {
        fetch()
    },[fetch])

    return (
        <div className="block__dashboard">
            {items.map(item=><ItemCard key={item.id} itemData={item}/>)}
        </div>
    )
}

const mapStateToProps = state => ({
    items: state.shop.items
})

const mapDispatchToProps = dispatch => ({
    fetch: () => dispatch(fetchItems())
})

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)