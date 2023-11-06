import { SKILLS, WORK_EXPERIENCE } from "@/utilities/experience";
import React from "react";
import ProgressBar from "./progress-bar";

export default function Experience() {
  return (
    <div className="w-full h-full flex items-center justify-center">
      <div className="w-full hidden md:block">
        <div className="w-[60%] h-full flex flex-col m-auto">
          {SKILLS.map((skill, idx) => (
            <ProgressBar
              key={idx}
              title={skill.title}
              amount={skill.expertise}
            />
          ))}
        </div>
      </div>
      <div className="w-full">
        {WORK_EXPERIENCE.map((experience, idx) => {
          return (
            <div
              key={idx}
              className="bg-transparent flex p-4 w-full md:w-[70%]  min-h-[180px] hover:bg-[#1E293B80] hover:opacity-[100] rounded-2xl  mt-8 text-white"
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
