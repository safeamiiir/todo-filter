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

// Table
export const TABLE_HEADS = {
  INDEX: '#',
  TITLE: 'Title',
  COMPLETED: 'Completed',
};

export const LOADING = 'L O A D I N G  . . .';
