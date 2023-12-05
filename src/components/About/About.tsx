import styles from '@/app/typography.module.css';
import Link from 'next/link';

const About = () => {
  return (
    <>
      <h1 className={styles.heading}>About Us</h1>
      <p className={styles.text}>&nbsp;</p>
      <p className={styles.text}>
        Welcome to SolitaireAce.com, the brainchild of our founder and
        visionary, Soli Chen.
      </p>
      <p className={styles.text}>
        A leading platform in the online gaming world, SolitaireAce.com is a
        testament to Steve's passion for card games and his knack for creating
        engaging digital experiences.
      </p>
      <p className={styles.text}>
        Soli's journey with SolitaireAce.com began in the early 2020s. An avid
        solitaire player, he realized there was a gap in the market for a
        high-quality, immersive online solitaire game. He wanted to create a
        platform that was entertaining and provided a sense of community for
        solitaire lovers worldwide.
      </p>
      <p className={styles.text}>
        The choice to develop a solitaire game was not random. Soli was always
        fascinated by the strategic depth and simplicity of solitaire. He
        believed that the game, despite its solitary nature, had the potential
        to connect millions of people across the globe. And so, he set out on
        his mission to bring solitaire into the digital age.
      </p>
      <p className={styles.text}>
        The process of creating SolitaireAce.com was both exciting and
        challenging. Soli spent countless hours fine-tuning the game mechanics,
        ensuring that the platform was user-friendly, and making an engaging and
        visually appealing design. His dedication to detail and commitment to
        creating the best possible gaming experience were evident in every step
        of the development process.
      </p>
      <p className={styles.text}>
        Today, SolitaireAce.com is more than just a game; it's a global
        phenomenon. With over 40 million daily users from all corners of the
        world, Soli is proud to be one of the most successful online games
        worldwide. This achievement is a testament to Soli's vision and
        dedication.
      </p>
      <p className={styles.text}>
        Soli is incredibly proud and humbled by the success of SolitaireAce.com.
        He cherishes every user's feedback and constantly strives to improve and
        expand the platform.
      </p>
      <p className={styles.text}>
        His dream of creating a global community of solitaire players has become
        a reality.
      </p>
      <p className={styles.text}>
        At SolitaireAce.com, Soli's mission remains unchanged: to provide our
        users with an entertaining, high-quality online solitaire experience.
      </p>
      <p className={styles.text}>
        Soli is committed to maintaining his position as a leader in the online
        gaming industry.
      </p>
      <p className={styles.text}>
        Thank you for being part of our journey. We hope you enjoy playing
        solitaire as much as we enjoy bringing it to you.
      </p>
      <p className={styles.text}>
        Welcome to SolitaireAce.com - your ace in the game!
      </p>
      <p className={styles.text}>
        Feel free to email me any ideas, bugs or questions you have: &nbsp;
        <Link
          className={styles.link}
          target='_blank'
          rel='noopener noreferrer'
          href=' solitaireace.team@gmail.com'
        >
          solitaireace.team@gmail.com
        </Link>
      </p>
    </>
  );
};

export default About;
