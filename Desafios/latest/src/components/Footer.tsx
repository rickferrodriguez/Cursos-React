import { type filterValue } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: (filter: filterValue) => void
  handleFilter: () => void
  pendingTaskCount: number
}

export const Footer: React.FC<Props> = ({
  filterSelected,
  handleFilter,
  pendingTaskCount
}) => {
  return (
    <footer className='footer'>
      <span>{pendingTaskCount}</span>
      <Filters filterSelected={filterSelected} handleFilter={handleFilter} />
    </footer>
  )
}
