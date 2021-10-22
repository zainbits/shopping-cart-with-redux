import "./App.css";
import React from "react"
import Navbar from "./components/Navbar/Navbar"
import {Switch, Route} from "react-router-dom"
import Dashboard from "./pages/Dashboard"
import {Cart} from "./pages/Cart"
import {ItemDetail} from "./pages/ItemDetail"
import { createStore } from "redux"
import { rootReducer } from "./redux/rootReducer";
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
        </Switch>
      </div>
    </Provider>
  );
}

export default App;
