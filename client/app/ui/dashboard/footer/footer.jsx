import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Company Admin</div>
      <div className={styles.text}>© All rights reserved 2025.</div>
    </div>
  );
};

export default Footer;
