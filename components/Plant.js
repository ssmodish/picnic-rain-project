import React from 'react'
import cn from 'classnames'

import styles from '../styles/Plant.module.css'

const Plant = ({ children }) => {
  let plantClass = cn(styles.plant, styles.unwatered)
  return <div className={plantClass}>{children}</div>
}

export default Plant
