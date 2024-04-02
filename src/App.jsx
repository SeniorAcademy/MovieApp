import Home from "./components/Home";
import Wish from "./components/Wish";
import { Routes, Route } from "react-router-dom";
import { ROUTER } from "./constant/router";
function App() {
  return (
    <>
      <Routes>
        <Route path={ROUTER.Home} element={<Home />} />
        <Route path={ROUTER.WishList} element={<Wish />} />
      </Routes>
    </>
  );
}

export default App;
