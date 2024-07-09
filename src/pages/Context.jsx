import { useState, React } from "react";
import { MyContext } from "../components/MyContext";
import ContextApi from "../components/ContextApi";

function Context() {
  const [text, setText] = useState("");

  return (
    <div>
      <MyContext.Provider value={{ text, setText }}>
        <ContextApi />
      </MyContext.Provider>
    </div>
  );
}

export default Context;