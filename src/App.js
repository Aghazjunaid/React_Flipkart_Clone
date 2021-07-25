import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
// import Cart from "./components/Cart"
// import Details from "./components/Details";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Home} />
        {/* <Route path="/cart" exact component={Cart} />
        <Route path="/details/:id" exact component={Details} /> */}

      </Switch>
    </Router>
  );
}

export default App;
