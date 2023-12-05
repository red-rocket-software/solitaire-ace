import styles from '@/app/typography.module.css';
import TermsOfUseContent from '@/components/TermsOfUse/TermsOfUseContent';

export default function TermsOfUse() {
  return (
    <div className={styles.container}>
      <TermsOfUseContent />
    </div>
  );
}
