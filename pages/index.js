import Head from 'next/head'
import Image from 'next/image'

import { useState, useEffect } from 'react'

import Button from '../components/Button'

import Farm from '../components/Farm'

import styles from '../styles/Home.module.css'

const initialFarmState = {
  rows: '10',
  cols: '10',
  rainLevel: '1',
}

export default function Home() {
  const [farmState, setFarmState] = useState(initialFarmState)
  const [isRaining, setIsRaining] = useState(false)

  const handleFarmChanges = (e) => {
    const { name, value } = e.target
    setFarmState({ ...farmState, [name]: value })
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
          <Button action={() => setIsRaining(true)}>Generate Rain</Button>
          <Button action={() => setIsRaining(false)}>Reset Farm</Button>
        </div>

        <div className={styles.farmDimensions}>
          <label>
            Number of rows on farm
            <input id='rows' name='rows' type='number' onChange={handleFarmChanges} value={farmState.rows} />
          </label>
          <label>
            Number of columns on farm
            <input id='cols' name='cols' type='number' onChange={handleFarmChanges} value={farmState.cols} />
          </label>
        </div>

        <div className={styles.minimumWater}>
          <label>
            Minimum amount of rain per plant
            <input name='rainLevel' type='number' onChange={handleFarmChanges} value={farmState.rainLevel} />
          </label>
        </div>

        <div>
          {farmState.rows} x {farmState.cols} Farm | Time elapsed =
        </div>

        {/* display farm */}
        <Farm farmState={farmState} isRaining={isRaining} />
      </main>

      <footer className={styles.footer}>
        Icons:
        <a href='http://www.freepik.com'> Designed by rawpixel.com / Freepik</a>
      </footer>
    </div>
  )
}
