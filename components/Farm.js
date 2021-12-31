import { useState, useEffect } from 'react'
import Plant from './Plant'

import styles from '../styles/Farm.module.css'

const Farm = ({ farmState, isRaining }) => {
  const [farm, setFarm] = useState([])

  // we need to generate a new farm
  const generateFarm = () => {
    let newFarm = new Array(parseInt(farmState.rows)).fill(null).map(() =>
      Array(parseInt(farmState.cols))
        .fill(null)
        .map(() => 0)
    )
    setFarm(newFarm)
  }

  // put rain on a timer

  // handle resets

  // handle win condition

  useEffect(() => {
    generateFarm()
  }, [])

  const generateRain = (farm) => {
    // this will have to change
    let wateredFarm = farm
    let rainCount = count

    const checkWatered = () => {
      // waterLevel sets minimum rain amount
      for (let row = 0; row < farmState.rows; row++) {
        for (let col = 0; col < farmState.cols; col++) {
          if (wateredFarm[row][col] < waterLevel) return false
        }
      }
      return true
    }

    while (!checkWatered()) {
      console.log(farmState.rows + ' - ' + farmState.cols)
      // generates a raindrop on a random plant
      let rainRow = Math.floor(Math.random() * farmState.rows)
      let rainCol = Math.floor(Math.random() * farmState.cols)

      // updates the farm and adds to the rain timer count
      wateredFarm[rainRow][rainCol]++
      rainCount++
    }

    // updates the state
    setFarm(wateredFarm)
    setCount(rainCount)
  }

  // rebuilds the farm
  const resetFarm = () => {
    generateFarm()
    setCount(0)
  }

  return (
    <div className={styles.farm}>
      {farm.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.farmRow}>
          {row.map((rainCollected, colIndex) => (
            <Plant
              key={rowIndex.toString() + colIndex.toString()}
              waterLevel={farmState.rainLevel}
              rainCollected={rainCollected}
            />
          ))}
        </div>
      ))}
    </div>
  )
}

export default Farm
