import { useState, useEffect } from 'react'

import Button from '../components/Button'
import Plant from './Plant'

import styles from '../styles/Farm.module.css'

const Farm = ({ farmState, isRaining }) => {
  const [farm, setFarm] = useState([])
  const [rainTimer, setRainTimer] = useState(0)
  const [isRaining, setIsRaining] = useState(false)

  // we need to generate a new farm
  const generateFarm = () => {
    let newFarm = new Array(parseInt(farmState.rows)).fill(null).map(() =>
      Array(parseInt(farmState.cols))
        .fill(null)
        .map(() => 0)
    )

    setFarm(newFarm)
  }

  useEffect(() => {
    generateFarm()
  }, [farm])

  // put rain on a timer and only have timer run when isRaining === true
  // - win condition
  const checkWatered = () => {
    // waterLevel sets minimum rain amount
    for (let row = 0; row < farmState.rows; row++) {
      for (let col = 0; col < farmState.cols; col++) {
        if (wateredFarm[row][col] < waterLevel) return false
      }
    }
    return true
  }

  const generateRain = (farm) => {
    let wateredFarm = farm
    let rainRow = Math.floor(Math.random() * farmState.rows)
    let rainCol = Math.floor(Math.random() * farmState.cols)

    wateredFarm[rainRow][rainCol]++
    return wateredFarm
  }

  useEffect(() => {
    if (isRaining) {
      const itsRaining = setTimeout(() => {
        setFarm(generateRain)
        setRainTimer(rainTimer++)
      }, 100)
      return () => {
        clearTimeout(itsRaining)
      }
    }
  })

  // handle resets

  // handle win condition

  // rebuilds the farm
  const resetFarm = () => {
    generateFarm()
    setCount(0)
  }

  return (
    <div className={styles.farm}>
      <div className={styles.buttonBar}>
        <Button action={() => setIsRaining(true)}>Generate Rain</Button>
        <Button
          action={() => {
            setIsRaining(false)
            generateFarm()
          }}
        >
          Reset Farm
        </Button>
      </div>
      <h2>{rainTimer}</h2>
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
