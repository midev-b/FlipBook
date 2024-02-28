import "./App.css";
import { useState } from "react";

export default App;

function App() {
  const [isClicked, setIsClicked] = useState(false);
  const flipPage = () => {
    return setIsClicked(true);
  };
  return (
    <div onClick={flipPage} className={`book ${isClicked ? "flip" : ""}`}>
      <div className={`page1 ${isClicked ? "flip-front" : ""}`}>Page1</div>
      <div className={`page2 ${isClicked ? "flip-back" : ""}`}>Page 2</div>
    </div>
  );
}
