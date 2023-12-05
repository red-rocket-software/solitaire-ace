import Link from 'next/link';
import styles from '@/app/typography.module.css';

const TermsOfUseContent = () => {
  return (
    <>
      <h1 className={styles.heading}>Terms of use</h1>
      <p className={styles.text}>&nbsp;</p>
      <ol className={styles.list}>
        <li>
          Acceptance of Terms By using SolitaireAce.com, you agree to these
          Terms of Use. If you disagree with these terms, please do not use this
          website. We reserve the right to modify these terms anytime, so please
          check for changes regularly. Your continued use of SolitaireAce.com
          after posting changes to these terms indicates your acceptance of
          those changes.
        </li>
        <li>
          Use of the Website SolitaireAce.com is intended for personal,
          non-commercial use. You may not use SolitaireAce.com for any illegal
          or unauthorized purpose. International users agree to comply with all
          local laws regarding online conduct and acceptable content.
        </li>
        <li>
          Intellectual Property Rights All content on SolitaireAce.com,
          including but not limited to text, graphics, logos, icons, images,
          audio clips, and software, is the property of SolitaireAce.com or its
          content suppliers and is protected by international copyright laws.
        </li>
        <li>User Conduct You agree not to use SolitaireAce.com to:</li>
      </ol>
      <ul className={styles.list}>
        <li>
          Transmit any content that is unlawful, harmful, threatening, abusive,
          harassing, defamatory, vulgar, obscene, invasive of another's privacy,
          hateful, racially, ethnically, or otherwise objectionable.
        </li>
        <li>Harm minors in any way.</li>
        <li>
          Impersonate any person or entity or falsely state or otherwise
          misrepresent your affiliation with a person or entity.
        </li>
      </ul>
      <ol className={styles.list} start={5}>
        <li>
          Disclaimer of Warranties: You expressly understand and agree that
          using SolitaireAce.com is at your sole risk. The website is provided
          on an "as is" and "as available" basis.
        </li>
        <li>
          Limitation of Liability: You expressly understand and agree that
          SolitaireAce.com shall not be liable for any direct, indirect,
          incidental, special, consequential, or exemplary damages resulting
          from your use or inability to use the website.
        </li>
        <li>
          Governing Law These Terms of Use shall be governed by and construed by
          the laws of the USA
        </li>
      </ol>
      <p className={styles.text}>
        By using SolitaireAce.com, you signify your acceptance of these Terms of
        Use. If you disagree with this policy, please do not use our site.
      </p>
      <p className={styles.text}>
        For questions about these Terms of Use, please contact us at&nbsp;
        <Link href='mailto:info@SolitaireAce.com' className={styles.link}>
          info@SolitaireAce.com
        </Link>
      </p>
      <p className={styles.text}>Last updated: August 24, 2023</p>
    </>
  );
};

export default TermsOfUseContent;
