import React from 'react'
import classNames from 'classnames'
import withLogger from '../withLogger/withLogger'
import styles from './Loader.module.css'
import { ILoader } from './ILoader'

const LoaderComponent: React.FC<ILoader> = ({ className }) => {
  const loaderClasses = classNames(styles.loader, className?.loader)
  const loaderContainerClasses = classNames(styles.loaderContainer, className?.loaderContainer)
  const loaderItemClasses = classNames(styles.loaderItem, className?.loaderItem)
  const loaderTextClasses = classNames(styles.loaderText, className?.loaderText)

  return (
    <div className={loaderClasses}>
      <div className={loaderContainerClasses}>
        <div className={loaderItemClasses}></div>
        <div className={loaderItemClasses}></div>
        <div className={loaderItemClasses}></div>
        <div className={loaderItemClasses}></div>
        <div className={loaderItemClasses}></div>
      </div>
      <div className={loaderTextClasses}>LOADING</div>
    </div>
  )
}

LoaderComponent.displayName = 'Loader'

export const Loader: React.FC<ILoader> = withLogger<ILoader>(LoaderComponent)
