import telegram from "@assets/icons/telegram.svg";
import twitter from "@assets/icons/twitter.svg";

import vk from "@assets/icons/vk.svg";
import whiteLogo from "@assets/icons/white-logo.svg";
import youtube from "@assets/icons/youtube.svg";
import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footer__container}>
        <div className={styles.footer__info__container}>
          <div className={styles.footer__logo}>
            <img src={whiteLogo} alt="White-logo" />
            <h1>Space.</h1>
          </div>
          <div className={styles.footer__info}>
            <a>Готовые решения</a>
            <a>Блог</a>
            <a>О нас</a>
            <a>Контакты</a>
          </div>
        </div>
        <div className={styles.footer__contacts}>
          <div>© ООО «Лого», 2008—20220</div>
          <div className={styles.footer__socials}>
            <a>
              <img src={telegram} alt="Telegram" />
            </a>
            <a>
              <img src={vk} alt="Vk" />
            </a>
            <a>
              <img src={twitter} alt="Twitter" />
            </a>
            <a>
              <img src={youtube} alt="Youtube" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
