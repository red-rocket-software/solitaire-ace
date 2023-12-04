import styles from '@/app/page.module.css';
interface AdTagProps {
  id?: string;
  className?: string;
}
const AdTag = (props: AdTagProps) => {
  return (
    <div
      className={props.className || ''}
      style={{
        backgroundColor: !props.id ? '#ffffff' : '',
      }}
    >
      <div id={props.id}></div>
    </div>
  );
};

const AdsBlock = () => {
  return (
    <>
      <AdTag
        className={styles.adUnitSm}
        id={'tag_b2c437e2-496c-4159-ab0a-61c48f90e12b'}
      />
    </>
  );
};
export default AdsBlock;
