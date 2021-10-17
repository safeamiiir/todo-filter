import { ListType } from 'types/requests.interface';
import { COMPLETED_STATES } from 'constant';

const handleSearch = (item: ListType, searchedText) =>
  !searchedText?.trim() || item.title.includes(searchedText.trim());

const handleCompleted = (item: ListType, completed) =>
  !completed ||
  completed === COMPLETED_STATES.ALL ||
  (item.completed ? COMPLETED_STATES.YES : COMPLETED_STATES.NO) === completed;

export { handleSearch, handleCompleted };
