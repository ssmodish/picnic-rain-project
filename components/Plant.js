import Image from 'next/image'
import cn from 'classnames'

import styles from '../styles/Plant.module.css'

const Plant = ({ rainCollected, waterLevel }) => {
  let plantClass = cn(styles.plant, waterLevel <= rainCollected ? styles.watered : styles.unwatered)

  if (waterLevel <= rainCollected) {
    return (
      <div className={plantClass}>
        <Image src='/watered.png' width='35px' height='35px' />
        {rainCollected}
      </div>
    )
  }
  return (
    <div className={plantClass}>
      <Image src='/dry.png' width='35px' height='35px' />
      {rainCollected}
    </div>
  )
}

export default Plant
