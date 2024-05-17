import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { Page1, Page2, Page3, Page4 } from "./pages";
import { generatePreviousDates } from "./utils/helper";

function App() {
  const [goals, setGoals] = useState([
    {
      id: 1,
      text: "Workout for 20 mins",
      checked: false,
      icon: (
        <svg
          width="30px"
          height="25px"
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          aria-hidden="true"
          role="img"
          className=" iconify iconify--emojione-monotone"
          preserveAspectRatio="xMidYMid meet"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M58.891 6.624l.982-2.731L54.727 2l-3.134 8.706c-.059-1.162-.798-2.075-2.077-2.45a3.764 3.764 0 0 0-1.049-.16c-.832 0-1.932.328-2.641 1.817a1.926 1.926 0 0 0-.244.164c-3.725-.57-8.243-.981-13.592-.981c-5.342 0-9.854.411-13.575.979a1.884 1.884 0 0 0-.244-.163c-.708-1.488-1.808-1.816-2.639-1.816a3.77 3.77 0 0 0-1.049.16c-.549.16-1.006.42-1.358.771a2.522 2.522 0 0 0-.723 1.666L9.273 2L4.127 3.893l.983 2.731L2 7.768l5.113 14.207l3.111-1.146l.983 2.731l4.499-1.657l1.005 4.091l8.004 11.35l-.002 9.145h.025l-2.391 1.797c-1.531 1.16-2.143 2.248-2.143 3.531v6.471h-.008c-1.375 0-2.49 2.209-2.49 3.701V62h7.006v-8.631l3.816-3.01h.025a2.663 2.663 0 0 1 1.752-.668h3.385c.865 0 1.891.781 1.891.781l3.703 2.896V62h7.006v-.012c0-1.492-1.113-3.701-2.49-3.701h-.01v-6.471c0-1.283-.611-2.371-2.141-3.531l-2.391-1.797h.025v-9.146l7.985-11.345l1.021-4.096l4.502 1.659l.982-2.731l3.111 1.146L62 7.768l-3.109-1.144M23.713 61H18.88c.295-.902.902-1.713 1.317-1.713h3.516V61m16.572-1.713h3.516c.414 0 1.02.808 1.315 1.713h-4.831v-1.713m-.478-37.912c.054-.023.541-.252.779-.737c.099-.163.176-.408.256-.822c.533-.031.781.465.781 1.524c0 1.196-.473 1.775-1.533 1.874l-.307.028l-.039.306c-.494 3.801-5.687 6.213-7.744 6.213c-2.061 0-7.251-2.412-7.745-6.213l-.04-.306l-.307-.028c-1.059-.099-1.531-.678-1.531-1.874c0-1.013.24-1.526.712-1.526l.067.002c.077.408.154.655.239.789c.253.519.742.747.797.771l.636.282l-.098-.688c-.001-.008-.104-.751-.067-1.727c.228-3.378.457-3.66 1.106-3.66c.325 0 .779.087 1.351.2c1.121.221 2.657.522 4.88.522s3.759-.302 4.881-.522c.571-.113 1.025-.2 1.35-.2c.649 0 .879.282 1.105 3.649c.037.986-.066 1.729-.068 1.737l-.098.688l.637-.282M14.766 9.216c.284-.083.538-.12.767-.12c.896 0 1.394.569 1.697 1.173a66.333 66.333 0 0 0-3.82.757c-.117-1.369 1.11-1.739 1.356-1.81m2.683 15.594l-2.672-10.879c-.432-.049-.648-.391-.921-1.213a67.328 67.328 0 0 1 3.442-.674l-.169-.644c-.206-.795.659-1.093.967-.18l.261.821a.936.936 0 0 1-.629 1.166l-.08.023l2.693 10.928l-2.892.652m9.383 6.991l-5.284-6.928l-2.75-11.158a1.9 1.9 0 0 0 .358-.468a1.93 1.93 0 0 0 .161-1.486l-.008-.028a84.678 84.678 0 0 1 6.193-.634c-2.163 1.461-2.899 4.087-2.947 8.056c-.473.202-.948.756-.948 2.186c0 1.816.99 2.429 1.93 2.601c.566 2.993 3.726 5.277 6.342 6.174v.925c-.138.183-.628.491-1.13.762h-1.917zM32 34.354a3.32 3.32 0 0 1-2.848-1.63c.814-.42 1.727-1.021 1.727-1.612V30.4c.405.086.784.133 1.121.133c.334 0 .709-.046 1.111-.131v.71c0 .591.916 1.193 1.732 1.613A3.316 3.316 0 0 1 32 34.354m5.164-2.553h-1.918c-.504-.271-.996-.579-1.135-.763v-.921c2.617-.895 5.783-3.181 6.35-6.177c.942-.171 1.933-.784 1.933-2.601c0-1.673-.651-2.149-1.188-2.261c-.039-3.973-.677-6.552-2.803-7.986l.033.002c2.278.15 4.362.373 6.252.64l-.009.028a1.937 1.937 0 0 0 .522 1.952l-2.739 11.111l-5.298 6.976m12.057-17.87L46.547 24.81l-2.891-.65l2.693-10.928l-.08-.023a.937.937 0 0 1-.631-1.166l.266-.828c.337-.938 1.16-.556.963.187l-.169.646c1.251.211 2.39.44 3.442.675c-.272.818-.487 1.159-.919 1.208m-2.453-3.66c.303-.604.802-1.175 1.699-1.175c.229 0 .484.037.768.12c.244.071 1.472.441 1.354 1.813a67.372 67.372 0 0 0-3.821-.758"
              fill="#9E4CB8"
            />
            <path
              d="M29.898 21.521a1.44 1.44 0 0 0-1.454-1.446c-.804 0-1.455.633-1.455 1.446a1.44 1.44 0 0 0 1.455 1.445a1.44 1.44 0 0 0 1.454-1.445"
              fill="#9E4CB8"
            />
            <path
              d="M35.555 20.074A1.44 1.44 0 0 0 34.1 21.52c0 .813.649 1.445 1.455 1.445a1.44 1.44 0 0 0 1.455-1.445c0-.813-.652-1.446-1.455-1.446"
              fill="#9E4CB8"
            />
            <path
              d="M34.321 25.946c-1.495 1.175-3.157 1.175-4.646 0c-.179-.135-.342.091-.219.316c.454.858 1.37 1.58 2.542 1.58c1.174 0 2.09-.722 2.543-1.58c.123-.225-.04-.45-.22-.316"
              fill="#9E4CB8"
            />
          </g>
        </svg>
      ),
      color: "#9E4CB8",
    },
    {
      id: 2,
      text: "Read book for 15 mins",
      checked: false,
      icon: (
        <svg
          width="30px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            <path
              d="M5.926 20.574a7.26 7.26 0 0 0 3.039 1.511c.107.035.179-.105.107-.175-2.395-2.285-1.079-4.758-.107-5.873.693-.796 1.68-2.107 1.608-3.865 0-.176.18-.317.322-.211 1.359.703 2.288 2.25 2.538 3.515.394-.386.537-.984.537-1.511 0-.176.214-.317.393-.176 1.287 1.16 3.503 5.097-.072 8.19-.071.071 0 .212.072.177a8.761 8.761 0 0 0 3.003-1.442c5.827-4.5 2.037-12.48-.43-15.116-.321-.317-.893-.106-.893.351-.036.95-.322 2.004-1.072 2.707-.572-2.39-2.478-5.105-5.195-6.441-.357-.176-.786.105-.75.492.07 3.27-2.063 5.352-3.922 8.059-1.645 2.425-2.717 6.89.822 9.808z"
              fill="#DE6C53"
            />
          </g>
        </svg>
      ),
      color: "#D15439",
    },
    {
      id: 3,
      text: "30 mins walk",
      checked: false,
      icon: (
        <svg
          width="30px"
          height="25px"
          fill="#81B47D"
          version="1.1"
          id="Capa_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 515.458 515.458"
          xmlSpace="preserve"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <g>
              {" "}
              <path d="M298.794,386.711c27.805,9.522,52.357,15.587,87.633,26.427C372.875,584.374,210.952,516.371,298.794,386.711z M443.366,229.409c-1.826-51.415-10.882-118.86-83.017-108.292c-33.815,8.825-58.8,45.962-70.551,110.035 c-6.454,35.229-2.701,84.678,4.912,114.32c6.951,20.889,4.587,19.605,12.058,23.572c28.916,6.514,57.542,13.725,86.693,21.078 C423.075,369.209,447.397,258.182,443.366,229.409z M220.752,225.463c7.607-29.646,11.36-79.095,4.909-114.32 C213.919,47.067,188.931,9.924,155.11,1.105C82.975-9.463,73.919,57.981,72.093,109.399 c-4.031,28.768,20.294,139.802,49.911,160.711c29.149-7.353,57.771-14.558,86.696-21.078 C216.162,245.069,213.798,246.352,220.752,225.463z M129.029,293.132c13.547,171.234,175.47,103.231,87.63-26.427 C188.854,276.228,164.304,282.292,129.029,293.132z" />{" "}
            </g>{" "}
          </g>
        </svg>
      ),
      color: "#81B47D",
    },
    {
      id: 4,
      text: "Sleep at 11 sharp",
      checked: false,
      icon: (
        <svg
          width="30px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M18 2.75C17.5858 2.75 17.25 2.41421 17.25 2C17.25 1.58579 17.5858 1.25 18 1.25H22C22.3034 1.25 22.5768 1.43273 22.6929 1.71299C22.809 1.99324 22.7449 2.31583 22.5304 2.53033L19.8107 5.25H22C22.4142 5.25 22.75 5.58579 22.75 6C22.75 6.41421 22.4142 6.75 22 6.75H18C17.6967 6.75 17.4232 6.56727 17.3071 6.28701C17.191 6.00676 17.2552 5.68417 17.4697 5.46967L20.1894 2.75H18ZM13.5 8.75C13.0858 8.75 12.75 8.41421 12.75 8C12.75 7.58579 13.0858 7.25 13.5 7.25H16.5C16.8034 7.25 17.0768 7.43273 17.1929 7.71299C17.309 7.99324 17.2449 8.31583 17.0304 8.53033L15.3107 10.25H16.5C16.9142 10.25 17.25 10.5858 17.25 11C17.25 11.4142 16.9142 11.75 16.5 11.75H13.5C13.1967 11.75 12.9232 11.5673 12.8071 11.287C12.691 11.0068 12.7552 10.6842 12.9697 10.4697L14.6894 8.75H13.5Z"
              fill="#63A7A7"
            />{" "}
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 11.5373 21.3065 11.4608 21.0672 11.8568C19.9289 13.7406 17.8615 15 15.5 15C11.9101 15 9 12.0899 9 8.5C9 6.13845 10.2594 4.07105 12.1432 2.93276C12.5392 2.69347 12.4627 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              fill="#63A7A7"
            />{" "}
          </g>
        </svg>
      ),
      color: "#63A7A7",
    },
    {
      id: 5,
      text: "Drink 3L water",
      checked: false,
      icon: (
        <svg
          width="35px"
          height="35px"
          viewBox="0 0 76 76"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          version="1.1"
          baseProfile="full"
          enableBackground="new 0 0 76.00 76.00"
          xmlSpace="preserve"
          fill="#000000"
        >
          <g id="SVGRepo_bgCarrier" strokeWidth={0} />
          <g
            id="SVGRepo_tracerCarrier"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <g id="SVGRepo_iconCarrier">
            {" "}
            <path
              fill="#5A92CB"
              fillOpacity={1}
              strokeWidth="0.2"
              strokeLinejoin="round"
              d="M 38,19C 40,28 50,36 50,44C 50,52 43,57 38,57C 33,57 26,52 26,44C 26,36 36,28 38,19 Z M 44,35C 44,35 47,40 45.5,50.75C 52,43 44,35 44,35 Z "
            />{" "}
          </g>
        </svg>
      ),
      color: "#5A92CB",
    },
  ]);
  const [progress, setProgress] = useState(0);
  const [selectedPage, setSelectedPage] = useState(1);
  const [progressData, setProgressData] = useState(generatePreviousDates());

  useEffect(() => {
    const completedGoals = goals.filter((goal) => goal.checked).length;
    const progressPercentage = (completedGoals / goals.length) * 100;
    setProgress(progressPercentage);

    const options = { day: "2-digit", month: "2-digit", year: "numeric" };
    const today = new Date().toLocaleDateString("en-GB", options);
    const [day, month] = today.split("/");
    const formattedDate = `${day}/${month}`;
    setProgressData((prevData) => {
      const existingEntry = prevData.find(
        (entry) => entry.date === formattedDate
      );
      if (existingEntry) {
        return prevData.map((entry) =>
          entry.date === formattedDate
            ? { ...entry, percentage: progressPercentage }
            : entry
        );
      } else {
        return [
          ...prevData,
          { date: formattedDate, percentage: progressPercentage },
        ];
      }
    });
  }, [goals]);

  const handleCheck = (id) => {
    setGoals(
      goals.map((goal) =>
        goal.id === id ? { ...goal, checked: !goal.checked } : goal
      )
    );
  };

  const handleCheckAll = () => {
    const allChecked = goals.every((goal) => goal.checked);
    setGoals(goals.map((goal) => ({ ...goal, checked: !allChecked })));
  };

  const handlePageClick = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const renderPage = () => {
    switch (selectedPage) {
      case 1:
        return (
          <Page1
            goals={goals}
            progress={progress}
            onCheck={handleCheck}
            onCheckAll={handleCheckAll}
            progressData={progressData}
          />
        );
      case 2:
        return <Page2 />;
      case 3:
        return <Page3 />;
      case 4:
        return <Page4 />;
    }
  };

  return (
    <div className="relative w-96 h-full overflow-x-hidden rounded-sm bg-[#212121] overflow-y-auto no-scrollbar">
      {renderPage()}
      <Navbar activePage={selectedPage} onPageClick={handlePageClick} />
    </div>
  );
}

export default App;
