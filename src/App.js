import About from "./components/About";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import TextArea from "./components/TextArea";
import Alert from "./components/Alert";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setmode] = useState("light");
  const [alert, setAlert] = useState(null);

  const toggleMode = () => {
    if (mode === "dark") {
      setmode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode has been enabled", "success");
    } else {
      setmode("dark");
      document.body.style.backgroundColor = "#272242";
      showAlert("Dark Mode has been enabled", "success");
    }
  };
  const showAlert = (msg, type) => {
    setAlert({ msg: msg, type: type });
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  };

  return (
    // //{/* <Navbar /> */}
    // <>
    //   <Navbar
    //     title="Arachnoid"
    //     about="About Page"
    //     toggleMode={toggleMode}
    //     elementMode={mode}
    //   />
    //   <Alert alert={alert} />
    //   <div className="container my-3">
    //     <TextArea
    //       heading="Enter Your Text Here"
    //       elementMode={mode}
    //       showAlert={showAlert}
    //     />
    //     <About elementMode={mode}/>
    //   </div>
    // </>
    <Router>
      <Navbar
        title="Arachnoid"
        about="About Page"
        toggleMode={toggleMode}
        elementMode={mode}
      />
      <Alert alert={alert} />
      <div className="container">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <TextArea
              heading="Enter Your Text Here"
              elementMode={mode}
              showAlert={showAlert}
            />
          }
        ></Route>
        <Route path="/about" element={<About elementMode={mode} />}></Route>
      </Routes>
      </div>
    </Router>
  );
}

export default App;
