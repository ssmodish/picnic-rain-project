import React from 'react'
import Plant from './Plant'

import styles from '../styles/Farm.module.css'

const Farm = ({ farm }) => {
  return (
    <div className={styles.farm}>
      {farm.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.farmRow}>
          {row.map((col, colIndex) => (
            <Plant key={rowIndex.toString() + colIndex.toString()}>{col}</Plant>
          ))}
        </div>
      ))}
    </div>
  )
}

export default Farm
