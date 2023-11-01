import React, { useEffect, useState } from "react";
import CursorSVG from "@/assets/icons/cursor-svg";
import "./prompt.css";
import WindowsControls from "@/assets/icons/windows-controls";

const message = `Hey there! Welcome to my portfolio 👋 I'm Luis Ponce, a Full-Stack Software Engineer 🧑‍💻 

Take a peek 👇 at some of my work! (Prepare your astronaout suit)
  
Enjoy the ride! 🚀`;

const introductionDelay = 3000;
const typingSpeed = 25;

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
      }, typingSpeed);

      return () => clearInterval(intervalId);
    }, introductionDelay);

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
            &gt; <Method text="Write" /> a short introduction about myself
          </p>{" "}
        </div>

        <div className="prompt-text-response mt-12 p-2">
          <pre>
            {displayResponse} {<CursorSVG />}
          </pre>
        </div>

        {shouldShowBtn && (
          <div className="text-[#4E9A06] mt-32 flex w-full items-center justify-center underline cursor-pointer">
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
