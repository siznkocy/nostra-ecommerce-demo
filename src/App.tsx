import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/Public";
import Client from "./pages/Client";
import { Cart } from "./components/Cart/Cart";
import ProductsPage from "./features/products/ProductsPage";

function App() {
  let myObj: object;

  myObj = ["t", "h"];

  return (
    <Routes>
      <Route path="/" element={<Public />}>
        <Route index element={<Client />} />
        <Route path="products" element={<ProductsPage />} />
      </Route>
    </Routes>
  );
}

export default App;
