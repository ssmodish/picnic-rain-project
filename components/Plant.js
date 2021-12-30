import cn from 'classnames'

import styles from '../styles/Plant.module.css'

const Plant = ({ plant, waterLevel }) => {
  let plantClass = cn(styles.plant, waterLevel <= plant.collectedRain ? styles.watered : styles.unwatered)

  return <div className={plantClass}>{plant.collectedRain}</div>
}

export default Plant
