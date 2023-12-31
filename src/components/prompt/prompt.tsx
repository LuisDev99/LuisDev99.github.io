import React, { useEffect, useState } from "react";
import CursorSVG from "@/assets/icons/cursor-svg";
import "./prompt.css";
import WindowsControls from "@/assets/icons/windows-controls";

const message = `Hey there! Welcome to my portfolio 👋 I'm Luis Ponce, a Full-Stack Software Engineer 🧑‍💻 

It looks like it's just you floating in space 🧑‍🚀 and somehow found my portfolio! 

Explore some of my work below 👇 that I've prepared for you! 
  
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
    <div className="prompt p-4 rounded-md h-full md:h-[80%]">
      <div className="flex items-center">
        <div className="mr-auto">
          <WindowsControls />
        </div>
        <div className="mr-auto flex items-center">
          <img src="/mac-folder.png" width={24} height={24} alt="" />{" "}
          <p className="ml-2 text-white">luisgpt</p>
        </div>
      </div>

      <div className="prompt-text-area mt-12 p-4 text-white">
        <div className="prompt-text-input">
          <p className="whitespace-pre-wrap md:whitespace-nowrap">
            &gt; <Method text="Write" /> a short introduction about myself
          </p>{" "}
        </div>

        <div className="prompt-text-response mt-12 p-2">
          <pre className="whitespace-pre-wrap">
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

const Method = ({ text }: { text: string }) => {
  return <span className="text-[#e6cd69]">{text}</span>;
};
