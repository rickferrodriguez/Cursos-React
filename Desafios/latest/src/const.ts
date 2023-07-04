export const TODO_FILTERS = {
  ALL: 'all',
  PENDING: 'pending',
  COMPLETED: 'completed'
} as const

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completed',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  },
  [TODO_FILTERS.PENDING]: {
    literal: 'Pending',
    href: `/?filter=${TODO_FILTERS.PENDING}`
  }
} as const
