// CONSTANTS
export const LOADING = 'L O A D I N G  . . .';

export const TODOS = 'Todos';

export const NO_RESULT = 'No result for the given search parameters!';

export const COMPLETED_OPTIONS = [
  {
    value: 'yes',
    label: 'yes',
  },
  {
    value: 'no',
    label: 'no',
  },
];

// TABLE
export const TABLE_HEADS = {
  INDEX: '#',
  TITLE: 'Title',
  COMPLETED: 'Completed',
};

// ENUMS
export enum FETCH_STATES {
  LOADING = 'loading',
  COMPLETE = 'complete',
  ERROR = 'error',
}

export enum COMPLETED_STATES {
  YES = 'yes',
  NO = 'no',
  ALL = 'all',
}
