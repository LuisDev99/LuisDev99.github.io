"use client";

import React, { useEffect, useState } from "react";

const INTERVAL_POSITION = 5;
const INTERVAL_ROTATION = 100;

export default function RocketCursor() {
  const [lastCursorPos, setLastCursorPos] = useState({ x: -999, y: -999 });
  const [currentCursorPos, setCurrentCursorPosition] = useState({
    x: -999,
    y: -999,
  });

  const [lastCursorAngle, setLastCursorAngle] = useState(0);
  const [cursorAngle, setCursorAngle] = useState(0);

  const [cursorTransform, setCursorTransform] = useState("");
  const [cursorImageTransform, setCursorImageTransform] = useState("");

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setCurrentCursorPosition({ x: e.clientX, y: e.clientY });
    });

    // Interval for updating cursor-position
    setInterval(setCurrentCursorProps, INTERVAL_POSITION);

    setInterval(() => {
      const delt = {
        x: lastCursorPos.x - currentCursorPos.x,
        y: lastCursorPos.y - currentCursorPos.y,
      };

      if (Math.abs(delt.x) < 3 && Math.abs(delt.y) < 3) return;

      setCursorAngle((Math.atan2(delt.y, delt.x) * 180) / Math.PI);

      setCurrentCursorProps();

      setLastCursorPos(currentCursorPos);
      setLastCursorAngle(cursorAngle);
    }, INTERVAL_ROTATION);

    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  const setCurrentCursorProps = () => {
    // Ensure correct rotation transition direction
    let tempCursorAngle = cursorAngle;

    while (Math.abs(lastCursorAngle - cursorAngle) > 180) {
      if (cursorAngle > lastCursorAngle) {
        // cursorAngle -= 360;
        tempCursorAngle -= 360;
      } else if (cursorAngle < lastCursorAngle) {
        tempCursorAngle += 360;
      }
    }

    setCursorAngle(tempCursorAngle);
    setCursorTransform(
      `translate(${currentCursorPos.x}px, ${currentCursorPos.y}px)`
    );
    setCursorImageTransform(`rotate(${tempCursorAngle - 90}deg)`);
  };

  console.log({ cursorTransform, cursorImageTransform });
  return (
    <div className="w-full h-full bg-white">
      <div id="cursor" style={{ transform: cursorTransform }}>
        <img
          style={{ transform: cursorImageTransform }}
          alt="Cursor Hand"
          src="https://static.wixstatic.com/media/2d89eb_f05aaa37b2a64ca2a607b0a903d8ad30~mv2.png/v1/fill/w_68,h_106/rocket-cursor.png"
        />
      </div>
    </div>
  );
}
