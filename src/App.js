import "./App.css";
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import {Switch, Route, Redirect} from "react-router-dom"
import Dashboard from "./Pages/Dashboard/Dashboard"
import Cart from "./Pages/Cart/Cart"
import ItemDetail from "./Pages/ItemDetail/ItemDetail"
import SearchResult from "./Pages/SearchResult/SearchResult";
import { createStore, applyMiddleware } from "redux"
import { rootReducer } from "./Redux/rootReducer";
import thunk from "redux-thunk"
import { Provider } from "react-redux"
// import { composeWithDevTools } from "redux-devtools-extension"


const store = createStore(rootReducer, applyMiddleware(thunk))

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/item/:id" component={ItemDetail} />
          <Route exact path="/SearchResult" component={SearchResult} />
          <Redirect exact to="/" />
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
