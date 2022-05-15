import styles from './BoxTitle.module.scss'

export default function BoxTitle(props) {
  return (
    <div className={styles.boxPrimary}>
      <h1>Public Address</h1>
			<p>{ props.data.ip }</p>
    </div>
  )
}