import { useState, memo } from "react";

// ၁။ Input ကို သီးသန့် Component အဖြစ် ခွဲထုတ်ခြင်း
const TextInputSection = memo(() => {
  const [text, setText] = useState("");
  console.log("TextInputSection rendered!"); // Input ရိုက်တဲ့အခါ ဒါပဲ ပုံနှိပ်တော့မယ်

  return (
    <div style={{ marginTop: "20px" }}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something..."
      />
    </div>
  );
});

export default function DeepDiveLab() {
  const [count, setCount] = useState(0);

  console.log("DeepDiveLab rendered!"); // Count ပြောင်းမှသာ ဒီဟာက ထွက်တော့မယ်

  const handleDelayedAdd = () => {
    setTimeout(() => {
      setCount((prev) => prev + 1); // Stale state မဖြစ်အောင် prev သုံးထားပါတယ်
    }, 3000);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "sans-serif" }}>
      <h2>React Intermediate Lab 1: State & Renders</h2>
      <p>Count: {count}</p>

      <button onClick={() => setCount((prev) => prev + 1)}>
        Increase Immediately
      </button>

      <button onClick={handleDelayedAdd} style={{ marginLeft: "10px" }}>
        Delayed Increase (+1 in 3s)
      </button>

      {/* ၂။ ခွဲထုတ်ထားသော Component ကို ခေါ်သုံးခြင်း */}
      <TextInputSection />
    </div>
  );
}
