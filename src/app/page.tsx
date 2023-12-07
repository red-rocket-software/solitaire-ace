'use client';
import GameBoard from '@/components/GameBoard/GameBoard.component';
import GameInfo from '@/components/Home/GameInfo';
import gameConfigActions from '@/redux/gameConfig/gameConfig.actions';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import styles from './page.module.css';
import AdsBlock from '@/components/Ads/AdsBlock';
import Script from 'next/script';
import useMediaQuery from '@/hooks/useMediaQuery';

export default function Home() {
  const dispatch = useDispatch();
  const isDesktop = useMediaQuery('(width >= 1024px)');

  useEffect(() => {
    dispatch(gameConfigActions.setGameMode('default'));
  }, []);
  return (
    <main>
      <div className={styles.boardWithAdsContainer}>
        <div id='game-board-container' className={styles.boardContainer}>
          <GameBoard />
        </div>
        {isDesktop && (
          <div className={styles.adsContainer}>
            <AdsBlock />
          </div>
        )}
      </div>
      <GameInfo />
    </main>
  );
}
