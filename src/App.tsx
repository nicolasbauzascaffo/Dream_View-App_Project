import "./App.css";
import { Route, Routes } from "react-router-dom";
import Cartelera from "./pages/cartelera";
import Destacadas from "./pages/destacadas";
import Reseña from "./pages/reseña";
import Notfound from "./pages/not_found";
import Layout from "./components/layout";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Destacadas />} />
          <Route path="cartelera" element={<Cartelera />} />
          <Route path="reseña" element={<Reseña />} />
        </Route>
        <Route path="*" element={<Notfound />} />
      </Routes>
    </div>
  );
}

export default App;
