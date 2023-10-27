import classNames from 'classnames'
import withLogger from '../withLogger/withLogger'
import styles from './EmptyState.module.css'
import johnTravolta from '../../assets/johntravolta.gif'
import { IEmptyState } from './IEmptyState'

const EmptyStateComponent: React.FC<IEmptyState> = ({ className, title }: IEmptyState) => {
  const EmptyStateClasses = classNames(styles.emptyState, className?.emptyState)
  const EmptyStateTitleClasses = classNames(styles.emptyStateTitle, className?.emptyStateTitle)
  const EmptyStateImageClasses = classNames(styles.emptyStateImage, className?.emptyStateImage)
  return (
    <div className={EmptyStateClasses}>
      <h1 className={EmptyStateTitleClasses}>{title}</h1>
      <img className={EmptyStateImageClasses} src={johnTravolta} alt="Nothing to see here" />
    </div>
  )
}

EmptyStateComponent.displayName = 'EmptyState'

export const EmptyState: React.FC<IEmptyState> = withLogger<IEmptyState>(
  EmptyStateComponent,
  'John Travolta lives alone in',
)
