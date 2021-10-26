import "./App.css";
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import {Switch, Route} from "react-router-dom"
import Dashboard from "./Pages/Dashboard"
import Cart from "./Pages/Cart"
import ItemDetail from "./Pages/ItemDetail"
import SearchResult from "./Pages/SearchResult";
import { createStore } from "redux"
import { rootReducer } from "./Redux/rootReducer";
import { Provider } from "react-redux"
import { composeWithDevTools } from "redux-devtools-extension"


const store = createStore(rootReducer, composeWithDevTools())

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
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
