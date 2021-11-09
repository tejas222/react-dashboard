import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Topbar from "./components/Topbar";
import { useState } from "react";
import Mainboard from "./components/Mainboard";
import Footer from "./components/Footer";

function App() {
  const [open, setOpen] = useState(false);
  return (
    <Router>
      <div>
        <Sidebar
          onCollapse={(open) => {
            console.log(open);
            setOpen(open);
          }}
        />
        <div className={`main-container ${open ? "inactive" : ""}`}>
          <Topbar />
          <Mainboard />

          <Footer />
        </div>
      </div>
    </Router>
  );
}

export default App;
