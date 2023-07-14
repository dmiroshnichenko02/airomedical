import styles from "./Header.module.scss";

import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <Link className={styles.btn} to={"/"}>
                Go to Home page
            </Link>
            <h1 className={styles.title}>Bear Recipes</h1>
        </header>
    );
};

export default Header;
