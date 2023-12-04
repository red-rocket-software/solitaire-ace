import React, { useCallback, useEffect, useMemo } from 'react';
import { RootReducerState } from '@/global';
import { Row } from 'antd';
import { useSelector } from 'react-redux';
import ColumnPile from '../Piles/ColumnPile.component';
import styles from './BoardFileds.module.css';
import useWindowSize from '@/hooks/useWindowSize';
import useMediaQuery from '@/hooks/useMediaQuery';
/**
 * Component that unites all the column piles
 */
function GameColumnWrapper() {
  // get piles from redux
  const { columns } = useSelector(({ Columns }: RootReducerState) => ({
    columns: Columns.columns,
  }));

  const { width, height } = useWindowSize();

  const xxxs = useMediaQuery('(width >= 400px)');
  const xxs = useMediaQuery('(width >= 600px)');
  const xs = useMediaQuery('(width >= 800px)');
  const sm = useMediaQuery('(width >= 1024px)');
  const md = useMediaQuery('(width >= 1280px)');
  const lg = useMediaQuery('(width >= 1440px)');
  const xl = useMediaQuery('(width >= 1600px)');
  const xxl = useMediaQuery('(width >= 1920px)');
  const xxxl = useMediaQuery('(width >= 2256px)');

  const getMarginByMedia = useCallback((): number => {
    if (xxxl) return 60;
    if (xxl) return 50;
    if (xl) return 45;
    if (lg) return 40;
    if (md) return 35;
    if (sm) return 30;
    if (xs) return 30;
    if (xxs) return 25;
    if (xxxs) return 20;

    return 15;
  }, [xxxs, xxs, xs, sm, md, lg, xl, xxl, xxxl]);

  //Specify gameBoard by screen height
  const boardMaxWidth = useMemo((): number => {
    if (!height) {
      return 100;
    }
    //was 400px
    if (height < 450) {
      return 50;
    }
    if (height < 600) {
      return 75;
    }
    return 100;
  }, [height]);

  useEffect(() => {
    const delay = 1000;
    const timeoutId = setTimeout(() => {
      updateParentHeight();
    }, delay);
    return () => clearTimeout(timeoutId);
  }, [width, height]);

  useEffect(() => {
    updateParentHeight();
  }, [columns]);

  const getLastElemInRow = () => {
    let maxArrayLength = 0;
    let lastElementOfLongestArray;
    // Iterate through object properties
    for (const column in columns) {
      if (columns.hasOwnProperty(column)) {
        const array = columns[column];
        const arrayLength = array.length;
        // Check if the current array is longer than the previous maximum
        if (arrayLength > maxArrayLength) {
          maxArrayLength = arrayLength;
          // Retrieve the last element of the longest array
          lastElementOfLongestArray = array[array.length - 1];
        }
      }
    }
    return lastElementOfLongestArray
      ? { cardId: lastElementOfLongestArray.id, maxLenght: maxArrayLength }
      : undefined;
  };

  const updateParentHeight = () => {
    const parentElem = document.getElementById('game-column-wrapper');
    const lastItem = getLastElemInRow();
    if (!parentElem || !height || !lastItem) {
      return;
    }
    const lastCard = parentElem.querySelector(`#card-${lastItem.cardId}`);
    if (!lastCard) {
      return;
    }
    const parentRect = parentElem.getBoundingClientRect();
    //Set to fit in fullscreen with margin of 20px
    let newParentHeight = height - parentRect.top - 20;

    //TODO for mobile advertisement
    // if ((width || 0) < (height || 0) && xxs) {
    //   newParentHeight += -200;
    // }
    parentElem.style.height = `${newParentHeight}px`;

    // const boardContainer = document.getElementById('game-board-container');
    // if (boardContainer) {
    //   boardContainer.style.maxWidth = `${boardMaxWidth}%`;
    // }

    //calculate new margins to all columnsPiles to fit in viewport
    for (const column in columns) {
      if (columns.hasOwnProperty(column)) {
        const array = columns[column];
        recalculateMargin(parentElem, array, newParentHeight);
      }
    }
  };

  const recalculateMargin = (
    parent: HTMLElement,
    columnsArray: Array<any>,
    parentHeight: number
  ) => {
    const lastInRow = columnsArray[columnsArray.length - 1];
    if (!lastInRow) {
      return;
    }
    const lastCard = parent.querySelector(`#card-${lastInRow.id}`);
    if (!lastCard) {
      return;
    }
    const aspectRatioChild = lastCard.firstChild as HTMLElement;
    const cardRect = aspectRatioChild.getBoundingClientRect();
    const heightDiff = parentHeight - cardRect.height;
    const newMargin = Math.abs(heightDiff) / (columnsArray.length - 1);
    columnsArray.map((x, index) => {
      if (index) {
        //skipping first card from column
        updateMarginForCards(parent, x.id, newMargin);
      }
    });
  };

  const updateMarginForCards = (
    parent: HTMLElement,
    cardId: number,
    marginVal: number
  ) => {
    const cardElem = parent.querySelector(`#card-${cardId}`);
    if (!cardElem) {
      return;
    }
    const currentmargin = getMarginByMedia();
    //update margin of element, if margin more than specified from initial by viewport, will take viewport margin
    (cardElem as HTMLElement).style.marginTop = `${
      !marginVal || marginVal > currentmargin ? currentmargin : marginVal
    }px`;
  };

  return (
    <Row
      className={styles.gameColumnsRow}
      align='top'
      justify={'space-between'}
    >
      <ColumnPile columnId='column1Pile' columnCards={columns.column1Pile} />
      <ColumnPile columnId='column2Pile' columnCards={columns.column2Pile} />
      <ColumnPile columnId='column3Pile' columnCards={columns.column3Pile} />
      <ColumnPile columnId='column4Pile' columnCards={columns.column4Pile} />
      <ColumnPile columnId='column5Pile' columnCards={columns.column5Pile} />
      <ColumnPile columnId='column6Pile' columnCards={columns.column6Pile} />
      <ColumnPile columnId='column7Pile' columnCards={columns.column7Pile} />
    </Row>
  );
}

export default GameColumnWrapper;
