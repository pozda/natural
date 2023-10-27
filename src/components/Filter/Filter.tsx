import withLogger from '../withLogger/withLogger'
import styles from './Filter.module.css'
import classNames from 'classnames'
import { IFilter } from './IFilter'

const FilterComponent: React.FC<IFilter> = ({
  onChange,
  placeholder = 'Search by author name',
  className,
}: IFilter) => {
  const FilterClasses = classNames(styles.filter, className?.filter)

  return (
    <input
      className={FilterClasses}
      id="postsFilter"
      name="postsFilter"
      type="text"
      placeholder={placeholder}
      onChange={onChange}
    />
  )
}

FilterComponent.displayName = 'Filter'

export const Filter: React.FC<IFilter> = withLogger<IFilter>(FilterComponent)
