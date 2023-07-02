export const TODO_FILTERS = {
  ALL: 'all',
  TITLE: 'title',
  COMPLETED: 'completed'
}

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'All',
    href: `/?filter=${TODO_FILTERS.ALL}`
  }
}
