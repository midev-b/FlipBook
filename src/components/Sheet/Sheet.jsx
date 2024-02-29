import "./Sheet.css";

export function Sheet({ side }) {
  return (
    <div className={`sheet ${side === "back" ? "flip" : ""}`}>
      <div className="page1">Page1</div>
      <div className="page2">Page 2</div>
    </div>
  );
}
