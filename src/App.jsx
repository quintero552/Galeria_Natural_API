import './App.css'
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Favorites from "./views/Favorites";
import Home from "./views/Home";
import MycontextProvider from './Context/MyContext';



const App = () => {
  return (
    <MycontextProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favoritos" element={<Favorites />} />
      </Routes>
    </MycontextProvider>
  );
};
export default App;
