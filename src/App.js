import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Home from "./components/Home"
import TemplateProvider from "./templateProvider";
// import Cart from "./components/Cart"
// import Details from "./components/Details";

function App() {
  return (
    <TemplateProvider>
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* <Route path="/cart" exact component={Cart} />
          <Route path="/details/:id" exact component={Details} /> */}
        </Switch>
      </Router>

    </TemplateProvider>
  );
}

export default App;
