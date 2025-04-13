import space from "@assets/icons/space.svg";
import styles from "./Header.module.css";

import mail from "@assets/icons/mail.svg";
import phone from "@assets/icons/phone.svg";

export const Header = () => {
  return (
    <header className={styles.header__container}>
      <div className={styles.header__content}>
        <div className={styles.header__logo}>
          <img src={space} alt="Logo" />
          <h1>Space.</h1>
        </div>
        <div className={styles.header__contacts}>
          <div className={styles.header__contacts__text}>
            <div>8 800 000 00 00</div>
            <div>sales@logo.ru</div>
          </div>
          <div className={styles.header__svgs}>
            <a>
              <img src={phone} alt="Phone" />
            </a>
            <a>
              <img src={mail} alt="Mail" />
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};
