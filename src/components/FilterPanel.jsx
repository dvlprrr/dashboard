import { useSelector, useDispatch } from "react-redux";

import { Badge } from "UI/Badge";
import { Card } from "UI/Card";
import { Stack } from "UI/Stack";
import { clearFilter, removeFilter } from "store/actions/filter-action";
import { selectFilter } from "store/selectors/filter-selector";

const FilterPanel = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector(selectFilter);
  if (currentFilter.length === 0) {
    return null;
  }
  return (
    <Card className="filter-panel">
      <div className="filter-panel-wrapper">
        <Stack>
          {currentFilter.map((filter) => {
            return (
              <Badge
                onClear={() => dispatch(removeFilter(filter))}
                key={filter}
                variant="clearable"
              >
                {filter}
              </Badge>
            );
          })}
        </Stack>
        <button onClick={() => dispatch(clearFilter)} className="link">
          Clear
        </button>
      </div>
    </Card>
  );
};

export { FilterPanel };
