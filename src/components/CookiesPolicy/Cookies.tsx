import styles from '@/app/typography.module.css';
import Link from 'next/link';
const Cookies = () => {
  return (
    <>
      <h1 className={styles.heading}>Cookie Policy</h1>
      <p className={styles.text}>&nbsp;</p>
      <ol className={styles.list}>
        <li>Effective Date: August 24, 2023</li>
        <ol className={styles.list} style={{ listStyle: 'lower-alpha' }}>
          <li>
            Introduction This Cookie Policy explains how SolitaireAce.com uses
            cookies and similar technologies to recognize you when you visit our
            website. It explains what these technologies are, why we use them,
            and your rights to control our use of them.
          </li>
          <li>
            What Are Cookies? Cookies are small data files placed on your
            computer or mobile device when you visit a website. Cookies are
            widely used by website owners to make their websites work or to work
            more efficiently, as well as to provide reporting information.
          </li>
          <li>
            Why Do We Use Cookies? We use cookies for several reasons. Some
            cookies are required for technical reasons for our website to
            operate, and we refer to these as "essential" or "strictly
            necessary" cookies. Other cookies enable us to track and target the
            interests of our users to enhance the experience on our website.
          </li>
          <li>
            Cookies We Set
            <ul className={styles.list} style={{ listStyle: 'disc' }}>
              <li>
                Site preferences cookies: To provide you with a great experience
                on this site, we provide the functionality to set your
                preferences for how this site runs when you use it.
              </li>
              <li>
                Third Party Cookies: In some cases, we also use cookies from
                trusted third parties.
              </li>
            </ul>
          </li>
          <li>
            How Can You Control Cookies? You have the right to decide whether to
            accept or reject cookies. You can modify your web browser controls
            to accept or refuse cookies. If you choose to reject cookies, you
            may still use our website, though your access to some functionality
            and areas of our website may be restricted.
          </li>
          <li>
            Changes To This Cookie Policy We may update this Policy from time to
            time to reflect, for example, changes to the cookies we use or for
            other operational, legal, or regulatory reasons.
          </li>
          <li>
            Contact Us If you have any questions about our use of cookies or
            other technologies, please email us at&nbsp;
            <Link
              href='mailto:solitaireace.team@gmail.com'
              className={styles.link}
            >
              solitaireace.team@gmail.com
            </Link>
          </li>
        </ol>
        <li>
          Using SolitaireAce.com, you agree that we can store and access cookies
          and other tracking technologies as described in this Cookie Policy.
        </li>
        <li>Thank you for choosing SolitaireAce.com.</li>
      </ol>
    </>
  );
};

export default Cookies;
