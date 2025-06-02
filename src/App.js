import "./App.css";
import { Routes, Route } from "react-router-dom"; 
import Container from "./components/Container";
import Gallery1 from "./components/pages/gallery1/gallery1";
import Gallery2 from "./components/pages/gallery2/gallery2";
import Gallery3 from "./components/pages/gallery3/gallery3";
import Gallery4 from "./components/pages/gallery4/gallery4";
import Gallery5 from "./components/pages/gallery5/gallery5";
import Gallery6 from "./components/pages/gallery6/gallery6";

function App() {
  return (
    <div className="App">
     
      <Container />

      
      
      <Routes>
        <Route path="/" element={<Container />} />
        <Route path="/gallery" element={<Container />} />
        <Route path="/gallery1" element={<Gallery1 />} />
        <Route path="/gallery2" element={<Gallery2 />} />
        <Route path="/gallery3" element={<Gallery3 />} />
        <Route path="/gallery4" element={<Gallery4 />} />
        <Route path="/gallery5" element={<Gallery5 />} />
        <Route path="/gallery6" element={<Gallery6 />} />
      </Routes>
    </div>
  );
}

export default App;