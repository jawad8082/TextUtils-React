import Navbar from "./Cumstom_Components/Navbar";
import Form from "./Cumstom_Components/Form";
import React, { useState } from "react";

function App() {
  const [Mode, setMode] = useState("light");
  const [BtnTxt, setBtnTxt] = useState("Enable Dark Mode");
  const [Dark, setDark] = useState({
    color: "black",
    backgroundColor: "white",
  });

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setBtnTxt("Disable Dark Mode");
      document.body.style.backgroundColor = "#282c34";
    } else {
      setMode("light");
      setBtnTxt("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
    }

    if (Dark.color === "black") {
      setDark({
        color: "White",
        backgroundColor: "#282c34",
      });
    } else {
      setDark({
        color: "black",
        backgroundColor: "white",
      });
    }
  };

  return (
    <>
      <Navbar
        Name="TextUtils"
        item="Home"
        toggleMode={toggleMode}
        Mode={Mode}
        ModeTxt={BtnTxt}
      />

      <Form heading="Text Converter" toggleMode={toggleMode} Dark={Dark} />
    </>
  );
}

export default App;
