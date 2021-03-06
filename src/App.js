import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/Headers/MainHeader";
import ProductDetails from "./pages/ProductDetails";
import { Route, Switch,Redirect } from "react-router-dom";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome"></Redirect>
          </Route>
          <Route path="/welcome">
            <Welcome />
          </Route>
          <Route path="/products" exact>
            <Products />
          </Route>
          <Route path="/products/:productId">
            <ProductDetails />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
