import styles from '@/app/typography.module.css';
import About from '@/components/About/About';

export default function AboutPage() {
  return (
    <div
      className={styles.container}
      style={{
        maxWidth: '818px',
      }}
    >
      <About />
    </div>
  );
}
