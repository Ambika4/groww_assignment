import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import thunk from "redux-thunk";
import rootReducer from "./redux/rootReducer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import Favourites from "./pages/Favourites/Favourites";
import BankDetails from "./pages/BankDetails/BankDetails";
import SideNav from "./components/SideNav/SideNav";

function App() {
  const store = createStore(rootReducer, applyMiddleware(thunk));
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="  container">
          <hr />
          <div className="app">
            <SideNav />
            <Switch>
              <Route path="/all-banks" exact component={Home} />
              <Route exact path="/favourites" component={Favourites} />
              <Route path="/bank-details/:ifsc_code" component={BankDetails} />
              <Route path="*" component={Home} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
