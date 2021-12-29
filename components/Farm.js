import React from 'react'
import Plant from './Plant'

import styles from '../styles/Farm.module.css'

const Farm = ({ farm, waterLevel }) => {
  return (
    <div className={styles.farm}>
      {farm.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.farmRow}>
          {row.map((rainCollected, colIndex) => (
            <Plant
              key={rowIndex.toString() + colIndex.toString()}
              waterLevel={waterLevel}
              rainCollected={rainCollected}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Farm
