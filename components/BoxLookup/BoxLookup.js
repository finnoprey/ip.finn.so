import styles from './BoxLookup.module.scss'

export default function BoxLookup(props) {
  return (
    <div className={styles.boxLookup}>
      <h1>Address Lookup</h1>
      <p><strong>Country </strong> { props.data.country }</p>
      <p><strong>Region </strong> { props.data.region }</p>
      <p><strong>City </strong> { props.data.city }</p>
      <p><strong>ISP </strong> { props.data.isp }</p>
    </div>
  )
}
