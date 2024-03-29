import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Home from "../src/pages/Home/Home";
import Header from "../src/components/Header/Header";
import Cursor from "./components/cursor/cursor";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <div className="relative">
        <Cursor />
        <Header />
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
        <div className="absolute w-full ">
          {" "}
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
