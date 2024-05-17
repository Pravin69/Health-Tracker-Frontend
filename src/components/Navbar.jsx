import React from "react";

const Navbar = ({ activePage, onPageClick }) => {
  return (
    <div className="sticky bottom-0 w-96 flex bg-[#242424] h-16 items-center justify-around">
      <a
        className={`grid place-items-center cursor-pointer ${
          activePage === 1 ? "text-[#DE6C53]" : "text-[#6C6C6C]"
        }`}
        href="#"
        onClick={() => onPageClick(1)}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 24 24"
          fill={activePage === 1 ? "#DE6C53" : "#6C6C6C"}
          stroke={activePage === 1 ? "#DE6C53" : "#6C6C6C"}
          xmlns="http://www.w3.org/2000/svg"
          // className="mb-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z" />
          </g>
        </svg>
        <p className="text-xs">Page 1</p>
      </a>
      <a
        className={`grid place-items-center cursor-pointer ${
          activePage === 2 ? "text-[#DE6C53]" : "text-[#6C6C6C]"
        }`}
        href="#"
        onClick={() => onPageClick(2)}
      >
        <svg
          width="40px"
          height="40px"
          version="1.1"
          id="Icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 32 32"
          xmlSpace="preserve"
          fill={activePage === 2 ? "#DE6C53" : "#6C6C6C"}
          stroke={activePage === 2 ? "#DE6C53" : "#6C6C6C"}
          // className="mb-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <style type="text/css" />{" "}
            <g>
              {" "}
              <path d="M7,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C10,23.7,8.7,25,7,25z" />{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M25,25c-1.7,0-3-1.3-3-3V10c0-1.7,1.3-3,3-3s3,1.3,3,3v12C28,23.7,26.7,25,25,25z" />{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M23,17H9c-0.6,0-1-0.4-1-1s0.4-1,1-1h14c0.6,0,1,0.4,1,1S23.6,17,23,17z" />{" "}
            </g>{" "}
            <g>
              {" "}
              <path d="M2,10.2c-1.2,0.4-2,1.5-2,2.8v6c0,1.3,0.8,2.4,2,2.8V10.2z" />{" "}
              <path d="M30,10.2v11.6c1.2-0.4,2-1.5,2-2.8v-6C32,11.7,31.2,10.6,30,10.2z" />{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="text-xs">Page 2</span>
      </a>
      <a
        className={`grid place-items-center ${
          activePage === 3 ? "text-[#DE6C53]" : "text-[#6C6C6C]"
        }`}
        href="#"
        onClick={() => onPageClick(3)}
      >
        <svg
          width="40px"
          height="40px"
          version="1.1"
          id="icons"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xmlSpace="preserve"
          fill={activePage === 3 ? "#DE6C53" : "#6C6C6C"}
          stroke={activePage === 3 ? "#DE6C53" : "#6C6C6C"}
          // className="mb-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <style type="text/css" />{" "}
            <g>
              {" "}
              <path
                className="st0"
                d="M215.078,8.156c-9.297,0-16.828,7.531-16.828,16.844v84.188h-27.203V23.328 C171.047,10.438,160.609,0,147.734,0c-12.891,0-23.328,10.438-23.328,23.328v85.859H97.219V25c0-9.313-7.547-16.844-16.844-16.844 S63.531,15.688,63.531,25v107.5h0.313c2.563,19.625,22.344,38.313,51.484,46.375v294.281c0,17.875,14.516,32.375,32.406,32.375 c17.875,0,32.359-14.5,32.359-32.375V178.094c25.313-7.219,48.906-22.516,51.547-45.594h0.266V25 C231.906,15.688,224.375,8.156,215.078,8.156z"
              />{" "}
              <path
                className="st0"
                d="M363.266,16.031c-18.797-6.375-47.188-10.188-47.188,18.656c0,0,0,419.594,0,443.375 c0,23.75,13.578,33.938,30.547,33.938s30.531-10.188,30.531-30.563c0-20.344,0-185.281,0-185.281s35.656,0,50.938,0 s20.375-18.688,20.375-32.281c0,0,0-50.969,0-93.406C448.469,78.281,403.031,29.563,363.266,16.031z"
              />{" "}
            </g>{" "}
          </g>
        </svg>
        <span className="text-xs">Page 3</span>
      </a>
      <a
        className={`grid place-items-center ${
          activePage === 4 ? "text-[#DE6C53]" : "text-[#6C6C6C]"
        }`}
        href="#"
        onClick={() => onPageClick(4)}
      >
        <svg
          width="40px"
          height="40px"
          viewBox="0 0 32 32"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          fill={activePage === 4 ? "#DE6C53" : "#6C6C6C"}
          stroke={activePage === 4 ? "#DE6C53" : "#6C6C6C"}
          // className="mb-2"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path d="M29.5 7c-1.381 0-2.5 1.12-2.5 2.5 0 0.284 0.058 0.551 0.144 0.805l-6.094 5.247c-0.427-0.341-0.961-0.553-1.55-0.553-0.68 0-1.294 0.273-1.744 0.713l-4.774-2.39c-0.093-1.296-1.162-2.323-2.482-2.323-1.38 0-2.5 1.12-2.5 2.5 0 0.378 0.090 0.732 0.24 1.053l-4.867 5.612c-0.273-0.102-0.564-0.166-0.873-0.166-1.381 0-2.5 1.119-2.5 2.5s1.119 2.5 2.5 2.5c1.381 0 2.5-1.119 2.5-2.5 0-0.332-0.068-0.649-0.186-0.939l4.946-5.685c0.236 0.073 0.48 0.124 0.74 0.124 0.727 0 1.377-0.316 1.834-0.813l4.669 2.341c0.017 1.367 1.127 2.471 2.497 2.471 1.381 0 2.5-1.119 2.5-2.5 0-0.044-0.011-0.086-0.013-0.13l6.503-5.587c0.309 0.137 0.649 0.216 1.010 0.216 1.381 0 2.5-1.119 2.5-2.5s-1.119-2.5-2.5-2.5z" />{" "}
          </g>
        </svg>
        <span className="text-xs">Page 4</span>
      </a>
    </div>
  );
};

export default Navbar;
