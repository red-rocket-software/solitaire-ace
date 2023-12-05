import styles from '@/app/typography.module.css';
import Cookies from '@/components/CookiesPolicy/Cookies';

export default function CookiesPolicy() {
  return (
    <div className={styles.container}>
      <Cookies />
    </div>
  );
}
