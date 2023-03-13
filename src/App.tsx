import { Routes, Route } from "react-router-dom";
import { Public } from "./pages/Public";
import Client from "./pages/Client";
import { Cart } from "./components/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Public />}>
        <Route index element={<Client />} />
      </Route>
    </Routes>
  );
}

export default App;
