import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'

import Button from '../components/Button'

import Farm from '../components/Farm'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [waterLevel, setWaterLevel] = useState(1)
  const [farmRows, setFarmRows] = useState(10) // allows changes in farm rows
  const [farmCols, setFarmCols] = useState(10) // allows changes in farm columns
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
  }, [])

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
      let rainRow = Math.floor(Math.random() * farmRows)
      let rainCol = Math.floor(Math.random() * farmCols)

      wateredFarm[rainRow][rainCol]++
      rainCount++
    }

    // console.log(rainCount)
    setFarm(wateredFarm)
    setCount(rainCount)
  }

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
