import { RootReducerState } from '@/global';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import gameBoardActions from '@/redux/gameBoard/gameBoard.actions';

const useTimer = () => {
  const dispatch = useDispatch();
  // get timer flag and the game pause from the GameBoard redux state
  const { timerFlag, gamePaused, gameOver, showingConfirm, gameTime } =
    useSelector(({ GameBoard, Goal, Pages }: RootReducerState) => ({
      timerFlag: GameBoard.gameFlag,
      gamePaused: GameBoard.gamePaused,
      gameOver: Goal.gameOver,
      showingConfirm:
        GameBoard.showingConfirm &&
        (Pages.confirmationModalProps.message1 !== '' ||
          Pages.confirmationModalProps.buttonConfirmId),
      gameTime: GameBoard.gameTime,
    }));

  let initialHours = 0;
  let initialMinutes = 0;
  let initialSeconds = 0;

  if (gameTime > 0) {
    initialHours = Math.floor(gameTime / 3600);
    initialMinutes = Math.floor((gameTime % 3600) / 60);
    initialSeconds = Math.floor((gameTime % 3600) % 60);
  }

  // set time states
  const [seconds, setSeconds] = useState(initialSeconds);
  const [minutes, setMinutes] = useState(initialMinutes);
  const [hours, setHours] = useState(initialHours);

  // update the timer at every 1 second
  useEffect(() => {
    const timerID = setInterval(() => tick(), 1000);
    return function cleanup() {
      clearInterval(timerID);
    };
  });
  // when the timer flag is toggled, reset the timer
  useEffect(() => {
    if (gameTime === 0) {
      setSeconds(0);
      setMinutes(0);
      setHours(0);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timerFlag, gameTime]);

  // add one second, minute or hour accordingly
  function tick() {
    // only add one second if the game is not paused
    if (!gamePaused && !gameOver && !showingConfirm) {
      // if a minute has passed
      if (seconds === 59) {
        // if 59 minutes have passed
        if (minutes === 59) {
          // the reset the minutes and seconds and add one hour
          setSeconds(0);
          setMinutes(0);
          setHours(hours + 1);
        } else {
          // the reset the seconds and add one minute
          setSeconds(0);
          setMinutes(minutes + 1);
        }
      } else {
        // if none of the above, then simply add one second
        setSeconds(seconds + 1);
      }
    }

    dispatch(
      gameBoardActions.saveGameTime(hours * 3600 + minutes * 60 + seconds)
    );
  }

  // return object with every time unit
  return { seconds, minutes, hours };
};

export default useTimer;
