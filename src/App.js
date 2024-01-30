import { Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import PortfolioScreen from "./screens/PortfolioScreen";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeScreen />}></Route>
        <Route path="/portfolio" element={<PortfolioScreen />}></Route>
      </Routes>
    </>
  );
}

export default App;
