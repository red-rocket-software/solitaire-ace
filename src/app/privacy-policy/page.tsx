import PrivacyPolicyContent from '@/components/PrivacyPolicy/PrivacyPolicyContent';
import styles from '@/app/typography.module.css';

export default function PrivacyPolicy() {
  return (
    <div className={styles.container}>
      <PrivacyPolicyContent />
    </div>
  );
}
