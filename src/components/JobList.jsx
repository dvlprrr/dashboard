import { useSelector } from "react-redux";

import { JobPosition } from "./JobPosition";

import { selectVisiblePosition } from "store/selectors/position-selector";
import { useDispatch } from "react-redux";
import { addFilter } from "store/actions/filter-action";
import { selectFilter } from "store/selectors/filter-selector";

const JobList = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  const position = useSelector((state) =>
    selectVisiblePosition(state, currentFilter)
  );
  
  function handleAddFilter(filter) {
    dispatch(addFilter(filter));
  }
  return (
    <div className="job-list">
      {position.map((item) => (
        <JobPosition
          handleAddFilter={handleAddFilter}
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
};

export { JobList };
