const Details = ({
  name,
  email,
  linkdin,
  instragram,
  github,
  twitter,
  number,
  collage,
  degree,
  start_time,
  end_time,
  languega,
  skills,
  summary,
}) => {
  return (
    <div className="pt-5 pb-5">
      <h3 className=" uppercase font-bold text-[18px]">{name}</h3>
      <hr />
      <div className="text-[15px] space-y-2 font-normal pt-2">
        {email && <h4>{email}</h4>}
        {number && <h4>{number}</h4>}
        {linkdin && <h4>{linkdin}/</h4>}
        {github && <h4>{github}/</h4>}
        {instragram && <h4>{instragram}/</h4>}
        {twitter && <h4>{twitter}/</h4>}
        {degree && <h4 className=" font-medium">{degree}</h4>}
        {collage && <h4>{collage}</h4>}
        {start_time && end_time && (
          <p>
            {start_time} - {end_time}
          </p>
        )}
        {skills && <p>{skills}</p>}
        {languega && <p>{languega}</p>}
        {summary && <p>{summary}</p>}
      </div>
    </div>
  );
};
export default Details;
