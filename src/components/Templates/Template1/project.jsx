const Projects = ({ Name, dic, tech, git, live, subName }) => {
  return (
    <div className="text-[15px] space-y-2 font-normal pt-5">
      <h1 className=" font-semibold text-[16px]">{Name}</h1>

      <p className=" text-[14px]">{dic}</p>
      <h3 className=" text-[14px] font-medium">{tech}</h3>
      <div className=" flex gap-5">
        <h3 className="cursor-pointer">{git}</h3>
        <h3 className="cursor-pointer">{live}</h3>
      </div>
    </div>
  );
};
export default Projects;
