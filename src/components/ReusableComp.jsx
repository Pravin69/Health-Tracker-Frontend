const ReusableComp = ({
  id,
  checked,
  onCheck,
  taskName,
  customColor,
  children,
}) => {
  return (
    <div className="h-20 mt-4 grid place-items-center rounded-xl bg-[#282828] shadow-gray-700">
      <div className={`px-4 flex items-center w-full h-8 text-${customColor}`}>
        <div className="basis-9 bg-[#3D3D3D] grid place-items-center h-full w-8 rounded-md">
          {children}
        </div>
        <p className="basis-4/5 ml-4">{taskName}</p>
        <input
          type="checkbox"
          checked={checked}
          onChange={() => onCheck(id)}
          className={`w-8 h-8 rounded-xl focus:ring-[${customColor}] ring-offset-gray-800 bg-[#3D3D3D] border-gray-600`}
          style={{ color: customColor }}
        />
      </div>
    </div>
  );
};

export default ReusableComp;
