import React from 'react';
import styles from './footer.module.css'
import logo from '../../../icon/iconAutoTuning.png'
import tg from '../../../icon/tg.png'
import inst from '../../../icon/inst.png'
import vk from '../../../icon/vk.png'

const Footer = () => {
    return (
        <div className={styles.mainFooter}>
            <div className={styles.content}>
                <div className={styles.mainInfo}>
                    <div className={styles.logoCnt}>
                        <img className={styles.logo} alt='logo' src={logo} />
                        <div className={styles.logoText}>Brooklin Detailing</div>
                    </div>
                    <div className={styles.rightFlang}>
                        <h2>Наши контакты</h2>
                        <div className={styles.phone}>+7 505 420-14-88</div>
                        <div className={styles.adress}>Грозный ул. Трошева 7</div>
                        <div className={styles.map}>Показать на карте</div>
                    </div>
                </div>
                <hr />
                <div className={styles.links}>
                    <img className={styles.tg} alt='' src={tg} />
                    <img className={styles.inst} alt='' src={inst} />
                    <img className={styles.vk} alt='' src={vk} />
                </div>
            </div>
        </div>
    );
};

export default Footer;