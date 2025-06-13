import styles from './index.module.css';

export function FooterOverlay() {
  return (
    <div className={styles.overlay}>
      <div className={styles['overlay-black']} />
      <div className={`${styles['overlay-img']} app-bg`} />
    </div>
  )
}