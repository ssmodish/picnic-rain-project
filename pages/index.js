import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'
import useForm from '../hooks/useForm'

import Button from '../components/Button'

import Farm from '../components/Farm'

import styles from '../styles/Home.module.css'

const initialValues = {
  waterLevel: 1,
  farmRows: 10,
  farmCols: 10,
}

export default function Home() {
  const [{ waterLevel, farmRows, farmCols }, handleChanges, clearForm] = useForm(initialValues)
  const [farm, setFarm] = useState([])
  const [count, setCount] = useState(0)
  const [isRaining, setIsRaining] = useState({ row: -1, column: -1 })

  const generateFarm = () => {
    let newFarm = []
    for (let i = 0; i < farmRows; i++) {
      newFarm.push(new Array(farmCols).fill(0))
    }
    setFarm(newFarm)
  }

  useEffect(() => {
    generateFarm()
  }, [waterLevel, farmRows, farmCols])

  const generateRain = (farm) => {
    let wateredFarm = farm
    let rainCount = count

    const checkWatered = () => {
      // waterLevel sets minimum rain amount
      for (let row = 0; row < farmRows; row++) {
        for (let col = 0; col < farmCols; col++) {
          if (wateredFarm[row][col] < waterLevel) return false
        }
      }
      return true
    }

    while (!checkWatered()) {
      // generates a raindrop on a random plant
      let rainRow = Math.floor(Math.random() * farmRows)
      let rainCol = Math.floor(Math.random() * farmCols)

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
    <div className={styles.container}>
      <Head>
        <title>Rain Problem</title>
        <meta name='description' content='Challenge for Picnic' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Rain Problem</h1>
        <div className={styles.decoration}></div>

        <div className={styles.buttonBar}>
          <Button action={() => generateRain(farm)}>Generate Rain</Button>
          <Button action={() => resetFarm()}>Reset Farm</Button>
        </div>

        <div className={styles.farmDimensions}>
          <label>
            Number of rows on farm
            <input id='farmRows' name='farmRows' type='number' onChange={handleChanges} value={farmRows} />
          </label>
          <label>
            Number of columns on farm
            <input id='farmCols' name='farmCols' type='number' onChange={handleChanges} value={farmCols} />
          </label>
        </div>
        <div className={styles.minimumWater}>
          <label>
            Minimum amount of rain per plant
            <input name='waterLevel' type='number' onChange={handleChanges} value={waterLevel} />
          </label>
        </div>

        <div>Time elapsed = {count}</div>
        {/* display field */}
        <Farm farm={farm} waterLevel={waterLevel} />
      </main>

      <footer className={styles.footer}>
        Icons:
        <a href='http://www.freepik.com'> Designed by rawpixel.com / Freepik</a>
      </footer>
    </div>
  )
}
