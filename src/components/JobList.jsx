import { useSelector } from "react-redux";

import { JobPosition } from "./JobPosition";

import { selectAllPosition } from "store/selectors/position-selector";

const JobList = () => {
  const position = useSelector(selectAllPosition);
  console.log(position);
  return (
    <div className="job-list">
      {position.map((item) => (
        <JobPosition key={item.id} {...item} />
      ))}
    </div>
  );
};

export { JobList };
