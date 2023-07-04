import { type FilterType } from '../type'
import { Filters } from './Filters'

interface Props {
  filterSelected: FilterType
  completedTaskCount: number
}

export const Footer: React.FC<Props> = ({ filterSelected, onHandelFilter, completedTaskCount }) => {
  return (
    <footer>
      <span>{completedTaskCount} Tareas Completadas</span>
      <Filters filterSelected={filterSelected} onHandelFilter={onHandelFilter} />
    </footer>
  )
}
