import React from 'react';
import styles from './Card.module.css';
import Image from 'next/image';
import getImageByName from '@/utils/getCardImage';

interface CardImageProps {
  image?: string;
  directory: string;
  additionalClassName?: string;
  onClick?: () => void;
}

const CardImage = ({
  image = 'default.png',
  directory,
  additionalClassName = '',
  onClick,
}: CardImageProps) => {
  const handleOnClick = () => {
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <div
      onClick={handleOnClick}
      className={`${styles.cardDefault} ${additionalClassName}`}
    >
      <Image
        width={200}
        height={300}
        priority
        draggable={false}
        className={styles.cardImage}
        src={getImageByName(directory, image) || `/images/${directory}/${image}`}
        alt=""
      />
    </div>
  );
};

export default CardImage;
