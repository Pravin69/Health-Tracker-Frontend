import React from "react";

const Progress = ({ progress, completedGoals }) => {
  const progressBarWidth = `${(progress / 100) * 13}rem`;

  return (
    <div className="flex justify-center items-center gap-2 h-24 rounded-2xl bg-gradient-to-r from-sky-300  to-blue-500">
      <svg
        className="basis-3/12"
        width="48px"
        height="47px"
        fill="#B5B5B5"
        viewBox="-8 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        stroke="#B5B5B5"
      >
        <g id="SVGRepo_bgCarrier" strokeWidth={0} />
        <g
          id="SVGRepo_tracerCarrier"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <g id="SVGRepo_iconCarrier">
          <path d="M248 8C111.03 8 0 119.03 0 256s111.03 248 248 248 248-111.03 248-248S384.97 8 248 8zm0 432c-101.69 0-184-82.29-184-184 0-101.69 82.29-184 184-184 101.69 0 184 82.29 184 184 0 101.69-82.29 184-184 184zm0-312c-70.69 0-128 57.31-128 128s57.31 128 128 128 128-57.31 128-128-57.31-128-128-128zm0 192c-35.29 0-64-28.71-64-64s28.71-64 64-64 64 28.71 64 64-28.71 64-64 64z" />
        </g>
      </svg>
      <div className="basis-9/12">
        <div className="leading-tight mb-2">
          <p className="font-semibold text-base leading-none">
            Your Daily Goal Almost Done
          </p>
          <span className="font-light text-xs leading-none">
            {completedGoals} Of 5 Completed
          </span>
        </div>
        {/* Progress Bar */}
        <div className="leading-none">
          <div className="w-52 h-[2px]  rounded-sm bg-[#7da7ce]">
            <div
              className={`h-full bg-[#E1EAF2]`}
              style={{ width: progressBarWidth }}
            ></div>
          </div>
          <span className="ml-48 text-[10px] w-8 h-2">{progress}%</span>
        </div>
      </div>
    </div>
  );
};

export default Progress;
