import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faFacebookF,
    faInstagram,
    faLinkedin,
    faTwitter,
    faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import logo from '../../../assets/images/logo-black-2.png';
import styles from './FooterTop.module.scss';

const cx = classNames.bind(styles);

const menuValues = {
    quickLinks: ['HOME', 'ABOUT', 'SHOP', 'BLOGS', 'CONTACT'],
    helpAndInfo: [
        'TRACK YOUR ORDER',
        'RETURNS POLICIES',
        'SHIPPING + DELIVERY',
        'CONTACT US',
        'FAQS',
    ],
};

const mediaIcons = [faFacebookF, faInstagram, faTwitter, faLinkedin, faYoutube];

const selectedMenu = 'helpAndInfo';

function FooterTop() {
    return (
        <div className={cx('footer-top')}>
            <div className={cx('grid wide')}>
                <div className={cx('footer-menu-list', 'row')}>
                    <div className={cx('footer-menu-item', 'col l-3')}>
                        <div className={cx('footer-menu-item__logo')}>
                            <img src={logo} className={cx('footer-logo')} />
                        </div>
                        <p>
                            Nisi, purus vitae, ultrices nunc. Sit ac sit
                            suscipit hendrerit. Gravida massa volutpat aenean
                            odio erat nullam fringilla.
                        </p>
                        <div className={cx('footer-menu-item__media')}>
                            {mediaIcons.map((icon, index) => (
                                <div
                                    className={cx(
                                        'footer-menu-item__media-box'
                                    )}
                                    key={index}
                                >
                                    <FontAwesomeIcon icon={icon} />
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className={cx('footer-menu-item', 'col l-2')}>
                        <h5>Quick Links</h5>
                        <ul className={cx('footer-menu-item__list')}>
                            {menuValues.quickLinks.map((value, index) => (
                                <li
                                    className={cx(
                                        'footer-menu-item__list-item'
                                    )}
                                    key={index}
                                >
                                    <Link>{value}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('footer-menu-item', 'col l-3')}>
                        <h5>Help & Info Help</h5>
                        <ul className={cx('footer-menu-item__list')}>
                            {menuValues.helpAndInfo.map((value, index) => (
                                <li
                                    className={cx(
                                        'footer-menu-item__list-item'
                                    )}
                                    key={index}
                                >
                                    <Link>{value}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className={cx('footer-menu-item', 'col l-3')}>
                        <h5>Contact Us</h5>
                        <p>
                            <span>Do you have any queries or suggestions?</span>
                            <Link className={cx('footer-menu-item__link')}>
                                yourinfo@gmail.com
                            </Link>
                        </p>
                        <p>
                            <span>If you need support? Just give us a call.</span>
                            <Link>+55 111 222 333 44</Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FooterTop;
