import React from 'react'
import Plant from './Plant'

import styles from '../styles/Farm.module.css'

const Farm = ({ farm, waterLevel }) => {
  return (
    <div className={styles.farm}>
      {farm.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.farmRow}>
          {row.map((plant, colIndex) => (
            <Plant key={rowIndex.toString() + colIndex.toString()} waterLevel={waterLevel} plant={plant} />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Farm
