import API from "../../Api/backend"
import { shopActions } from './shopping-reducer'

export const fetchItems = () => dispatch => {
    return API.get("/get/all")
    .then(res => {
        const result = res.data.Items
        dispatch(shopActions.setItems(result))
        return result
    })
    .catch(err => console.error(err))
}
