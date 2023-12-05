import styles from '@/app/typography.module.css';
import About1 from '@/../public/images/About/about-1.png';
import About2 from '@/../public/images/About/about-2.png';
import About3 from '@/../public/images/About/about-3.png';
import About4 from '@/../public/images/About/about-4.png';
import About5 from '@/../public/images/About/about-5.png';
import Image from 'next/image';

const GameInfo = () => {
  return (
    <div className={styles.container} style={{ maxWidth: '856px' }}>
      <h1
        className={styles.heading2}
        style={{
          fontSize: '1.875rem',
        }}
      >
        How to Play Solitaire: A Beginner's Guide
      </h1>
      <p className={styles.text}>&nbsp;</p>
      <p className={styles.text}>
        Solitaire is a term for a game that covers various single-player card
        games. This short guide will help you understand the basic & quick rules
        and strategies of playing Solitaire.
      </p>
      <p className={styles.text}>&nbsp;</p>
      <h2
        className={styles.text}
        style={{
          fontWeight: 700,
        }}
      >
        The objective of the Game
      </h2>
      <p className={styles.text}>
        The aim is to organise and manage all cards into four foundation piles
        in ascending order by suit, starting from Ace to King.
      </p>
      <p className={styles.text}>&nbsp;</p>
      <h3
        className={styles.text}
        style={{
          fontWeight: 700,
        }}
      >
        Game Setup
      </h3>
      <ul className={styles.list}>
        <li>
          Tableau: Consists of seven columns of cards. The first column has one
          card, the second has two, and so on, with each column having one more
          card than the last. Only the top card of each pile is face-up.
        </li>
        <li>
          Stockpiles: Contains the remaining cards not in the tableau; usually
          there are 24.
        </li>
        <li>
          Waste Pile: Cards from the stockpile are usually placed here if they
          are not to be used.
        </li>
        <li>
          Foundation Piles: Four piles where you build sequences of each suit
          from Ace to King.
        </li>
      </ul>
      <div
        style={{
          marginTop: '2rem',
          margin: '2rem auto 0 auto',
          maxWidth: '700px',
          width: '100%',
        }}
      >
        <Image
          src={About1}
          alt='Solitaire Ace game setup'
          style={{
            width: '100%',
            height: 'auto',
          }}
        />
      </div>
      <div style={{ marginTop: '2.75rem' }}>
        <h4
          className={styles.text}
          style={{
            fontWeight: 700,
          }}
        >
          Gameplay and Rules
        </h4>
        <ol className={styles.list}>
          <li>
            Move Cards in the Tableau: You can move face-up cards to other
            tableau columns if they are of the opposite color and a rank lower.
          </li>
        </ol>
        <div
          style={{
            marginTop: '2rem',
            margin: '2rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
          }}
        >
          <Image
            src={About2}
            alt='Solitaire Ace Gameplay and Rules'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2.75rem' }}>
        <ol className={styles.list} start={2}>
          <li>
            Use the Stock and Waste Piles: Draw cards from the stockpile, moving
            unused ones to the waste pile.
          </li>
        </ol>
        <div
          style={{
            marginTop: '2rem',
            margin: '2rem auto 0 auto',
            maxWidth: '324px',
            width: '100%',
          }}
        >
          <Image
            src={About3}
            alt='Solitaire Ace Use the Stock and Waste Piles'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2.75rem' }}>
        <ol className={styles.list} start={3}>
          <li>
            Empty Columns: Only Kings can be placed in empty tableau columns.
          </li>
        </ol>
        <div
          style={{
            marginTop: '2rem',
            margin: '2rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
          }}
        >
          <Image
            src={About4}
            alt='Solitaire Ace Empty Columns'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2.75rem' }}>
        <ol className={styles.list} start={4}>
          <li>
            Foundation Piles: Start each with an Ace, then place cards of the
            same suit in ascending order.
          </li>
        </ol>
        <div
          style={{
            marginTop: '2rem',
            margin: '2rem auto 0 auto',
            maxWidth: '700px',
            width: '100%',
          }}
        >
          <Image
            src={About5}
            alt='Solitaire Ace Foundation Piles'
            style={{
              width: '100%',
              height: 'auto',
            }}
          />
        </div>
      </div>
      <div style={{ marginTop: '2.75rem' }}>
        <h5
          className={styles.text}
          style={{
            fontWeight: 700,
          }}
        >
          Strategies for Winning
        </h5>
        <ul className={styles.list}>
          <li>Focus on revealing cards in the bigger tableau columns first.</li>
          <li>Use the first stockpile card wisely to start the game.</li>
          <li>If stuck, consider using cards from the foundation piles.</li>
          <li>
            Aim to clear a tableau column if you have a King to place there.
          </li>
          <li>
            Utilize hints and undo if available in the game version you are
            playing.
          </li>
        </ul>
        <p className={styles.text}>&nbsp;</p>
        <h6
          className={styles.text}
          style={{
            fontWeight: 700,
          }}
        >
          Frequently Asked Questions
        </h6>
        <ul className={styles.list}>
          <li>
            <span
              style={{
                fontWeight: 700,
              }}
            >
              Winning Difficulty:
            </span>
            <br />
            Based on past game data, we calculated about 34% for Turn 1 games
            and 12% for Turn 3 games.
          </li>
          <li>
            <span
              style={{
                fontWeight: 700,
              }}
            >
              Turn 1 vs Turn 3:
            </span>
            <br />
            Turn 1 flips one card at a time from the stock, whereas Turn 3 flips
            three, making it more challenging.
          </li>
        </ul>
        <p className={styles.text}>&nbsp;</p>
        <p className={styles.text}>
          This guide provides a basic understanding of Solitaire. For a more
          interactive learning experience, consider watching tutorial videos or
          playing online versions that offer hints and step-by-step guidance.
        </p>
      </div>
    </div>
  );
};

export default GameInfo;
