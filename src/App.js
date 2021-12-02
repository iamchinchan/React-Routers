import Welcome from "./pages/Welcome";
import Products from "./pages/Products";
import MainHeader from "./components/Headers/MainHeader";
import { Route } from "react-router-dom";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Route path="/welcome">
          <Welcome />
        </Route>
        <Route path="/products">
          <Products />
        </Route>
      </main>
    </div>
  );
}

export default App;
