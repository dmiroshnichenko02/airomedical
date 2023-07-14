import styles from "./Footer.module.scss";

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <h2 className={styles.title}>
                &#169; Created special for AirMedical
            </h2>
        </footer>
    );
};

export default Footer;
