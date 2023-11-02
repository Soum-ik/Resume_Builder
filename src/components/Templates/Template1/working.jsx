const Working = ({ Name, dic, tech, git, live, subName, start, end }) => {
  return (
    <div className="text-[15px] font-normal pt-10">
      <h1 className=" font-semibold uppercase text-[16px]">{Name}</h1>
      <div className=" flex items-center justify-between">
        <h2 className=" font-semibold text-[16px] text-dimWhite pt-3">
          {subName}
        </h2>
        <p>
          {start} - {end}
        </p>
      </div>
      <p className=" text-[14px] ">{dic}</p>
    </div>
  );
};
export default Working;
