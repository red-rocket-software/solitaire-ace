import styles from '@/app/page.module.css';
import { useEffect, useRef } from 'react';
interface AdTagProps {
  id?: string;
  className?: string;
}
const AdTag = (props: AdTagProps) => {
  return (
    <div
      aria-hidden={true}
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
  const banner = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!banner.current) return;
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://sm1.selectmedia.asia/cdn/tags/tag_b2c437e2-496c-4159-ab0a-61c48f90e12b.js`;

    if (banner.current) {
      banner.current.append(script);
    }
  }, []);
  return (
    <>
      <div ref={banner}></div>
      <AdTag
        className={styles.adUnitSm}
        id={'tag_b2c437e2-496c-4159-ab0a-61c48f90e12b'}
      />
      {/*<Script*/}
      {/*  async*/}
      {/*  strategy='lazyOnload'*/}
      {/*  type='text/javascript'*/}
      {/*  src='https://sm1.selectmedia.asia/cdn/tags/tag_b2c437e2-496c-4159-ab0a-61c48f90e12b.js'*/}
      {/*></Script>*/}
    </>
  );
};
export default AdsBlock;
