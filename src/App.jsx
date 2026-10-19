import { useState } from "react";

export default function DeepDiveLab() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  console.log("DeepDiveLab rendered!"); // Render ဘယ်နှစ်ခါဖြစ်လဲ စစ်ဖို့

  const handleDelayedAdd = () => {
    setTimeout(() => {
      // ဒီနေရာကို Stale state မဖြစ်အောင် ပြင်ပါ
      setCount((prevCount) => prevCount + 1);
    }, 3000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React Intermediate Lab 1: State & Renders</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount(count + 1)}>Increase Immediately</button>

      <button onClick={handleDelayedAdd} style={{ marginLeft: "10px" }}>
        Delayed Increase (+1 in 3s)
      </button>

      <div style={{ marginTop: "20px" }}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something (notice re-renders)..."
        />
      </div>
    </div>
  );
}
