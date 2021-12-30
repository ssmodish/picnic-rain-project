import Head from 'next/head'

import { useFarmState } from '../hooks/useFarmState'

import Farm from '../components/Farm'

import styles from '../styles/Home.module.css'

export default function Home() {
  const [waterLevel, farm, count, setFarm, resetFarm, generateRain] = useFarmState()

  return (
    <div className={styles.container}>
      <Head>
        <title>Rain Problem</title>
        <meta name='description' content='Challenge for Picnic' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <h1>Rain Problem</h1>

        <button onClick={() => generateRain(farm)}>Generate Rain</button>
        <button onClick={() => resetFarm()}>Reset Farm</button>

        <div>Time elapsed = {count}</div>
        {/* display field */}
        <Farm farm={farm} waterLevel={waterLevel} />
      </main>
    </div>
  )
}
