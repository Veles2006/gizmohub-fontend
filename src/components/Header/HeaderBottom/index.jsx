import styles from './HeaderBottom.module.scss';
import { Link } from 'react-router-dom';
import logo from '../../../assets/images/logo-black-2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import {
    faMagnifyingGlass,
    faUser,
    faCartShopping,
    faCaretDown,
} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import classNames from 'classnames/bind';

const barValueOrigin = [
    { value: 'HOME', active: true },
    { value: 'ABOUT', active: false },
    { value: 'SHOP', active: false },
    { value: 'BLOGS', active: false },
    { value: 'PAGES', active: false },
    { value: 'CONTACT', active: false },
];

const btnIcons = [faMagnifyingGlass, faUser, faHeart];

const cx = classNames.bind(styles);

function HeaderBottom() {
    const [barValue, setBarValue] = useState(barValueOrigin);

    const handleFocus = (index) => {
        setBarValue((prev) =>
            prev.map((item, idx) => ({
                ...item,
                active: idx === index,
            }))
        );
    };

    return (
        <div className={cx('header-bottom', 'grid', 'wide')}>
            <div className={cx('logo-wrapper')}>
                <Link to={'#'}>
                    <img src={logo} className={cx('logo')} alt="Logo" />
                </Link>
            </div>

            <div className={cx('bar-list-wrapper')}>
                <ul className={cx('bar-list')}>
                    {barValue.map(({ value, active }, index) => (
                        <li
                            className={cx('bar-item', 'btn-hover', {
                                'bar-item--active': active,
                            })}
                            onClick={() => handleFocus(index)}
                            key={index}
                        >
                            <Link to="#">{value}</Link>

                            {value === 'PAGES' ? (
                                <FontAwesomeIcon icon={faCaretDown} />
                            ) : null}
                        </li>
                    ))}
                    <li className={cx('bar-item', 'btn-hover')}>
                        <Link to="#">GET PRO</Link>
                    </li>
                </ul>
            </div>

            <div className={cx('bar-btn-list')}>
                {btnIcons.map((icon, index) => (
                    <div
                        className={cx('bar-btn-item', 'btn-hover')}
                        key={index}
                    >
                        <FontAwesomeIcon icon={icon} />
                    </div>
                ))}
                <div
                    className={cx('bar-btn-item', 'bar-btn-cart', 'btn-hover')}
                >
                    <FontAwesomeIcon icon={faCartShopping} />
                    <span>(02)</span>
                </div>
            </div>
        </div>
    );
}

export default HeaderBottom;
