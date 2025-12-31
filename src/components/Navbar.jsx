import styles from "./Pricing.module.css";
function Navbar() {
    return (
        <nav className={styles.navbar}>
            <h1 className={styles.logo}>Pricing App</h1>
            <ul className={styles.navlinks}>
                <li>Home</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
        </nav>
    );
}
export default Navbar;
