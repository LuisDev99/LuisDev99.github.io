import WindowsControls from "@/assets/icons/windows-controls";
import { SKILLS, WORK_EXPERIENCE } from "@/utilities/experience";
import DragableSkill from "@/components/dragable-skill/dragable-skill";
import React from "react";

export default function Experience() {
  return (
    <div className="w-full h-full flex">
      <div className="w-[60%] flex flex-col items-center overflow-auto">
        {SKILLS.map((skill, idx) => (
          <DragableSkill key={idx} imgUrl={skill} />
        ))}
      </div>
      <div className="w-full">
        {WORK_EXPERIENCE.map((experience, idx) => {
          return (
            <div
              key={idx}
              className="bg-transparent flex p-4 w-[70%] min-h-[180px] hover:bg-[#1E293B80] hover:opacity-[100] rounded-2xl  mt-8 text-white"
            >
              <div className="w-[20%] text-right">
                <p className="text-[#94A3B8BF]">{experience.workedDate}</p>{" "}
              </div>
              <div className="w-[60%] ml-5">
                <h3>{experience.title}</h3>
                <p className="text-[#94A3B8BF] mt-4">
                  {experience.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
