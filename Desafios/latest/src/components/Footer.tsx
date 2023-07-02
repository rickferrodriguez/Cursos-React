import { Filters } from './Filters'

export const Footer: React.FC<Props> = ({ filterSelected, onHandelFilter, completedTaskCount }) => {
  return (
    <footer>
      <span>{completedTaskCount}</span>
      <Filters filterSelected={filterSelected} onHandelFilter={onHandelFilter} />
    </footer>
  )
}
