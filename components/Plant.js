import React from 'react'
import cn from 'classnames'

import styles from '../styles/Plant.module.css'

const Plant = ({ rainCollected, waterLevel }) => {
  let plantClass = cn(styles.plant, waterLevel <= rainCollected ? styles.watered : styles.unwatered)
  return <div className={plantClass}>{rainCollected}</div>
}

export default Plant
