/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ReusableComp from "./ReusableComp";

const Checklist = ({ goals, onCheck, onCheckAll }) => {
  const [fadeOut, setFadeOut] = useState(false);

  const handleClick = () => {
    setFadeOut(true);
    onCheckAll();
    setTimeout(() => {
      setFadeOut(false);
    }, 1500);
  };

  return (
    <div className="mt-8">
      <div className="flex items-center justify-between h-7">
        <p>Today&rsquo;s Goal</p>
        <img
          className="w-9 h-9"
          src="./heartbeat-unscreen.gif"
          alt="heartbeat-gif"
        />
      </div>

      {goals &&
        goals.map((goal, index) => (
          <ReusableComp
            key={index}
            id={goal.id}
            checked={goal.checked}
            onCheck={onCheck}
            taskName={goal.text}
            customColor={goal.color}
          >
            {goal.icon}
          </ReusableComp>
        ))}

      <div
        className={`bg-[#D15439] flex items-center w-76 h-14 rounded-full mt-4 px-2 ${
          fadeOut ? "animate-fadeoutright" : ""
        } cursor-pointer`}
        onClick={handleClick}
      >
        <div className="basis-10 rounded-full bg-[#EAE7EC] grid place-items-center h-10 w-10">
          <span className="text-[#D15439] text-xs font-semibold">Track</span>
        </div>
        <p className="basis-3/5 text-center">Swipe to track all</p>
        <div className="flex">
          <svg
            width="30px"
            height="30px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#D8715D"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.24000000000000005"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 7L15 12L10 17"
                // stroke="#"
                strokeWidth="0.8879999999999999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
          <svg
            width="30px"
            height="30px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#E4A096"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.24000000000000005"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 7L15 12L10 17"
                // stroke="#"
                strokeWidth="0.8879999999999999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
          <svg
            width="30px"
            height="30px"
            viewBox="-2.4 -2.4 28.80 28.80"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#F7ECF3"
            transform="rotate(0)"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth={0} />
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
              stroke="#CCCCCC"
              strokeWidth="0.24000000000000005"
            />
            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                d="M10 7L15 12L10 17"
                // stroke="#"
                strokeWidth="0.8879999999999999"
                strokeLinecap="round"
                strokeLinejoin="round"
              />{" "}
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Checklist;
