import React, { useEffect, useState } from "react";
import CursorSVG from "@/assets/icons/cursor-svg";
import "./prompt.css";
import WindowsControls from "@/assets/icons/windows-controls";

const message = `Hey there! Welcome 👋 I'm Luis Ponce, a Full-Stack Software Engineer 🧑‍💻 

Take a peek 👇 at some of my work! (Prepare your astronaout suit)
  
Enjoy the ride! 🚀
`;

export default function AIPrompt() {
  const [displayResponse, setDisplayResponse] = useState("");
  const [shouldShowBtn, setShowBtn] = useState(false);

  useEffect(() => {
    // Delay execution by 3 seconds
    const timer = setTimeout(() => {
      let i = 0;

      const intervalId = setInterval(() => {
        setDisplayResponse(message.slice(0, i));

        i++;

        if (i > message.length) {
          clearInterval(intervalId);
          setShowBtn(true);
        }
      }, 30);

      return () => clearInterval(intervalId);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="prompt p-4 rounded-md h-[80%]">
      <div>
        <WindowsControls />
      </div>

      <div className="prompt-text-area mt-12">
        <div className="prompt-text-input">
          <p>
            &gt; <Method text="Introduce" />(
            <Parameter text="Name" /> = &quot;Luis Ponce&quot;,{" "}
            <Parameter text="IsFullStack" /> = true)
          </p>{" "}
        </div>

        <div className="prompt-text-response mt-12 p-2">
          <pre>
            {displayResponse} {<CursorSVG />}
          </pre>
        </div>

        {shouldShowBtn && (
          <div className="text-[#4E9A06] flex w-full items-center justify-center mt-32 cursor-pointer">
            Jump to projects 💼
          </div>
        )}
      </div>
    </div>
  );
}

const Parameter = ({ text }: { text: string }) => {
  return <span className="text-[#55b5db]">{text}</span>;
};

const Method = ({ text }: { text: string }) => {
  return <span className="text-[#e6cd69]">{text}</span>;
};
