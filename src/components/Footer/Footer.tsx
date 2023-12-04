'use client';
import Link from 'next/link';
import styles from './Footer.module.css';
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import { RootReducerState } from '@/global';
import { MouseEvent } from 'react';

const Footer = () => {
  const router = useRouter();
  const { gameMoves } = useSelector(({ GameBoard }: RootReducerState) => ({
    gameMoves: GameBoard.gameMoves,
  }));

  const showUnsavedWarning = () => {
    return confirm('You have unsaved changes');
  };

  const onChangeLink = (
    e: MouseEvent<HTMLAnchorElement, globalThis.MouseEvent>,
    path: string
  ) => {
    e.preventDefault();

    if (!gameMoves) {
      router.push(path);
      return;
    }

    if (showUnsavedWarning()) {
      router.push(path);
    }
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.footerWrapper}>
        <Link
          href='/about'
          onClick={(e) => onChangeLink(e, '/about')}
          className={styles.footerLink}
        >
          About us
        </Link>
        <Link
          href='/terms-of-use'
          onClick={(e) => onChangeLink(e, '/terms-of-use')}
          className={styles.footerLink}
        >
          Terms of use
        </Link>
        <Link
          href='/privacy-policy'
          onClick={(e) => onChangeLink(e, '/privacy-policy')}
          className={styles.footerLink}
        >
          Privacy Policy
        </Link>
        <Link
          href='/cookies'
          onClick={(e) => onChangeLink(e, '/cookies')}
          className={styles.footerLink}
        >
          Cookies
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
