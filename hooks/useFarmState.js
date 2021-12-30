import { useState, useEffect } from 'react'

export function useFarmState() {
  const [waterLevel, setWaterLevel] = useState(1)
  const [farmRows, setFarmRows] = useState(10) // allows changes in farm rows
  const [farmCols, setFarmCols] = useState(10) // allows changes in farm columns
  const [farm, setFarm] = useState([])
  const [count, setCount] = useState(0)
  const [isRaining, setIsRaining] = useState({ row: -1, column: -1 })

  const generateFarm = () => {
    let newFarm = new Array(farmRows).fill(null).map(() =>
      Array(farmCols)
        .fill(null)
        .map(() => new Object({ collectedRain: 0, isRaining: false }))
    )
    setFarm(newFarm)
  }

  useEffect(() => {
    generateFarm()
    console.table(farm)
  }, [])

  const generateRain = (farm) => {
    let wateredFarm = farm
    let rainCount = count

    const checkWatered = () => {
      // waterLevel sets minimum rain amount
      for (let row = 0; row < farmRows; row++) {
        for (let col = 0; col < farmCols; col++) {
          if (wateredFarm[row][col].collectedRain < waterLevel) return false
        }
      }
      return true
    }

    while (!checkWatered()) {
      let rainRow = Math.floor(Math.random() * farmRows)
      let rainCol = Math.floor(Math.random() * farmCols)

      wateredFarm[rainRow][rainCol].collectedRain += 1
      rainCount++
    }
    setFarm(wateredFarm)
    setCount(rainCount)
  }

  return [
    waterLevel,
    setWaterLevel,
    farmRows,
    setFarmRows,
    farmCols,
    setFarmCols,
    farm,
    setFarm,
    count,
    setCount,
    isRaining,
    setIsRaining,
    generateFarm,
    generateRain,
  ]
}
