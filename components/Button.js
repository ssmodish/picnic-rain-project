import styles from '../styles/Button.module.css'

const Button = ({ action, children }) => {
  return (
    <div onClick={action} className={styles.button}>
      {children}
    </div>
  )
}

export default Button
