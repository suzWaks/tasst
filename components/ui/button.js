import ChevronRight from '../../components/Icons/Chevronright';
import styles from './button.module.css';

export default function Button(props) {
  return (
    <div className={styles.btn}>{props.text}<ChevronRight /></div>
  )
}
