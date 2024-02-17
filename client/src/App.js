import logo from './logo.svg';
import './App.css';
import {BrowserRouter, createBrowserRouter, RouterProvider, Route, Routes} from "react-router-dom";
import Home from './components/home';
import PickNum from './components/picknum';
import JoinGame from './components/joinGame';
// import InputComponent from './components/inputComponent';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/pickNum" element={<PickNum />} />
        <Route path="/joinGame" element={<JoinGame />} />
        {/* Add more routes as needed */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
