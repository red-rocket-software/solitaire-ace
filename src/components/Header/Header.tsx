'use client';

import Image from 'next/image';
import styles from './Header.module.css';
import TurnOne from '@/icons/TurnOne';
import TurnThree from '@/icons/TurnThree';
import NewButton from '../Buttons/NewButton';
import GamePlayInfo from '../GamePlayInfo/GamePlayInfo';
import RestartButton from '../Buttons/RestartButton';
import UndoButton from '../Buttons/UndoButton';
import PauseButton from '../Buttons/PauseButton';
import HintButton from '../Buttons/HintButton';
import { useSelector } from 'react-redux';
import { RootReducerState } from '@/global';
import { GameModeTypes } from '@/redux/gameConfig/gameConfig.types';
import { usePathname, useRouter } from 'next/navigation';
import useTimer from '@/hooks/useTimer';
import Link from 'next/link';
import GameSwitchModal from '../Modals/GameSwitchModal';
import { useState } from 'react';

const Header = () => {
  const [showGameSwitchModal, setShowGameSwitchModal] = useState<{
    showModal: boolean;
    gameMode?: GameModeTypes;
  }>({
    showModal: false,
  });

  const router = useRouter();
  const path = usePathname();

  const isGamePath = path === '/' || path === '/turn-3';

  const { gameMode, gameMoves } = useSelector(
    ({ GameConfig, GameBoard }: RootReducerState) => ({
      gameMode: GameConfig.gameMode as GameModeTypes,
      gameMoves: GameBoard.gameMoves,
    })
  );

  const { seconds, minutes, hours } = useTimer();

  const navigateToOtherGameMode = (gameMode: GameModeTypes) => {
    if (gameMode === 'turnThree') {
      router.push('/turn-3');
      return;
    }
    router.push('/');
  };

  const onChangeGameMode = (newMode: GameModeTypes) => {
    if (newMode === gameMode) {
      return;
    }
    if (!gameMoves) {
      navigateToOtherGameMode(newMode);
      return;
    }
    setShowGameSwitchModal({
      showModal: true,
      gameMode: newMode,
    });
  };

  const onConfirmGameSwitch = () => {
    if (!showGameSwitchModal.gameMode) {
      hideModal();
      return;
    }
    navigateToOtherGameMode(showGameSwitchModal.gameMode);
    hideModal();
  };

  const hideModal = () => {
    setShowGameSwitchModal({
      showModal: false,
      gameMode: undefined,
    });
  };

  const getCardModeColor = (btnMode: GameModeTypes) => {
    if (gameMode === btnMode) {
      return '#9B69C9';
    }
    return '#6E4197';
  };

  return (
    <>
      <header className={isGamePath ? styles.gameHeader : styles.header}>
        <div
          className={
            isGamePath
              ? styles.innerWrapper
              : `${styles.innerWrapper} ${styles.height}`
          }
        >
          <div className={styles.logoDesctopWrapper}>
            <Link href='/'>
              <Image
                src='/images/logo.png'
                width={120}
                height={31}
                alt='logo'
                style={{ marginRight: '45px' }}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={styles.logoMobileWrapper}>
            <Link href='/'>
              <Image
                src='/images/logo-mobile.png'
                width={88}
                height={23}
                alt='logo'
                style={{ marginRight: '4px' }}
                className={styles.logo}
              />
            </Link>
          </div>
          <div className={isGamePath ? styles.cards : styles.hidden}>
            <div
              className={styles.cardWrapper}
              onClick={() => onChangeGameMode('default')}
            >
              <TurnOne fill={getCardModeColor('default')} />
            </div>
            <div className={styles.border} />
            <div
              className={styles.cardWrapper}
              onClick={() => onChangeGameMode('turnThree')}
            >
              <TurnThree fill={getCardModeColor('turnThree')} />
            </div>
          </div>
          <div className={isGamePath ? styles.newButtonWrapper : styles.hidden}>
            <NewButton />
          </div>
          <div
            className={isGamePath ? styles.desktopInfoButton : styles.hidden}
          >
            <GamePlayInfo seconds={seconds} hours={hours} minutes={minutes} />
            <RestartButton />
            <div
              style={{ margin: '0 3.5px', height: '28.4px' }}
              className={styles.border}
            />
            <UndoButton />
            <div
              style={{ margin: '0 3.5px', height: '28.4px' }}
              className={styles.border}
            />
            <PauseButton />
            <div
              style={{ margin: '0 3.5px', height: '28.4px' }}
              className={styles.border}
            />
            <HintButton />
          </div>
        </div>
        <div className={isGamePath ? styles.borderBottom : styles.hidden} />
        <div className={isGamePath ? styles.mobileInfoButton : styles.hidden}>
          <GamePlayInfo seconds={seconds} hours={hours} minutes={minutes} />
          <RestartButton />
          <div
            style={{ margin: '0 3.5px', height: '28.4px' }}
            className={styles.border}
          />
          <UndoButton />
          <div
            style={{ margin: '0 3.5px', height: '28.4px' }}
            className={styles.border}
          />
          <PauseButton />
          <div
            style={{ margin: '0 3.5px', height: '28.4px' }}
            className={styles.border}
          />
          <HintButton />
        </div>
      </header>
      <GameSwitchModal
        showModal={showGameSwitchModal.showModal}
        onClose={hideModal}
        onConfirm={onConfirmGameSwitch}
      />
    </>
  );
};

export default Header;
