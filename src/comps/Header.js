import Link from "next/link";
import Logo from "./icons/logo";
import styles from "./Header.module.css";
import Box from "./Box";

const Header = () => {
  return (
    <div>
      <Link href="/">
        <Box>
          <Logo height={20} width={110} />
        </Box>
      </Link>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </div>
  );
};

export default Header;
