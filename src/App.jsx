import "./App.css";
import { useState } from "react";
import { Sheet } from "./components/Sheet/Sheet";

export default App;

function App() {
  const [variant, setVariant] = useState("front");

  const flipPage = () => {
    return setVariant(variant === "front" ? "back" : "front");
  };

  return (
    <div
      style={{
        width: "500px",
        margin: "auto",
      }}
    >
      <button onClick={flipPage}>toggle</button>
      <Sheet side={variant} />
    </div>
  );
}
