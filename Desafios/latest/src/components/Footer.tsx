import { type FilterType } from '../types'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterType
  handleFilter: (filter: FilterType) => void
}

export const Footer: React.FC<Props> = ({ filterSelected, handleFilter }) => {
  return (
    <footer className='footer'>
      <span>Tareas Pendientes</span>
      <Filters filterSelected={filterSelected} handleFilter={handleFilter} />
    </footer>
  )
}
