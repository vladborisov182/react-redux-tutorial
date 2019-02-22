import { CHANGE_FILTER, BASE_FILTER } from '../../../constants';
import { load } from 'redux-localstorage-simple';

let ACTIVE_FILTER = load({ namespace: 'todo-list' });

if (!ACTIVE_FILTER || !ACTIVE_FILTER.filters) {
  ACTIVE_FILTER = {
    filters: BASE_FILTER,
  }
}

const filters = (state = ACTIVE_FILTER.filters, { type, activeFilter }) => {
  switch (type) {
    case CHANGE_FILTER:
      return activeFilter;
    default:
      return state;
  }
}

export default filters;