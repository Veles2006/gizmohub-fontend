import styles from './HeaderBottom.module.scss';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../assets/images/logo-black-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faUser,
    faCartShopping,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState, useEffect } from 'react';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const barValueOrigin = [
    { value: 'HOME', link: '/' },
    { value: 'ABOUT', link: '/about' },
    { value: 'SHOP', link: '/shop' },
    { value: 'BLOGS', link: '/blogs' },
    { value: 'PAGES', link: '/pages' },
    { value: 'CONTACT', link: '/contact' },
];

const btnIcons = [faMagnifyingGlass, faUser, faHeart];

function HeaderBottom() {
    const location = useLocation();
    const [barValue, setBarValue] = useState([]);

    useEffect(() => {
        const updated = barValueOrigin.map((item) => ({
            ...item,
            active: item.link === location.pathname,
        }));
        setBarValue(updated);
    }, [location.pathname]);

    return (
        <div className={cx('header-bottom', 'grid', 'wide')}>
            <div className={cx('logo-wrapper')}>
                <Link to="/">
                    <img src={logo} className={cx('logo')} alt="Logo" />
                </Link>
            </div>

            <div className={cx('bar-list-wrapper')}>
                <ul className={cx('bar-list')}>
                    {barValue.map(({ value, active, link }, index) => (
                        <li
                            key={index}
                            className={cx('bar-item', 'btn-hover', {
                                'bar-item--active': active,
                            })}
                        >
                            <Link to={link}>{value}</Link>
                            {value === 'PAGES' && (
                                <FontAwesomeIcon icon={faCaretDown} />
                            )}
                        </li>
                    ))}
                    <li className={cx('bar-item', 'btn-hover')}>
                        <Link to="/get-pro">GET PRO</Link>
                    </li>
                </ul>
            </div>

            <div className={cx('bar-btn-list')}>
                {btnIcons.map((icon, index) => (
                    <div key={index} className={cx('bar-btn-item', 'btn-hover')}>
                        <FontAwesomeIcon icon={icon} />
                    </div>
                ))}
                <div className={cx('bar-btn-item', 'bar-btn-cart', 'btn-hover')}>
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>(02)</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
