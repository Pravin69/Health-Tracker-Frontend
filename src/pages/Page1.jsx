import Progress from "../components/Progress";
import Checklist from "../components/Checklist";
import MyBarChart from "../components/BarChart";

const Page1 = ({ progress, goals, onCheck, onCheckAll, progressData }) => {
  const completedGoals = goals.filter((goal) => goal.checked).length;

  return (
    <div className="p-6">
      <Progress progress={progress} completedGoals={completedGoals} />
      <Checklist goals={goals} onCheck={onCheck} onCheckAll={onCheckAll} />
      <MyBarChart progressData={progressData} />
    </div>
  );
};

export default Page1;
