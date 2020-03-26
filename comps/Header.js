import Link from "next/link";
import Logo from "./icons/logo";
import styles from './Header.module.css';

const Header = () => {
  return (
    <div className={styles.nav}>
      <Link href="/">
        <a className={styles.logo}>
          <Logo height={20} width={110} />
        </a>
      </Link>
      <Link href="/">
        <a className={styles.link}>Home</a>
      </Link>
      <Link href="/about">
        <a className={styles.link}>About</a>
      </Link>
    </div>
  );
};

export default Header;
