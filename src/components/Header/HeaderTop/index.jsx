import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';

import styles from './HeaderTop.module.scss';

const cx = classNames.bind(styles);

function HeaderTop() {
    return (
        <div className={cx('header-top')}>
            <ul className={cx('header-top-list', 'grid', 'wide')}>
                <li className={cx('header-top-item', 'header-top-item--phone-number')}>
                    <span>
                        Need any help? Call us
                        <Link to={'#'}>{' 112233344455'}</Link>
                    </span>
                </li>
                <li className={cx('header-top-item', 'header-top-item--shop-link')}>
                    <span>
                        Summer sale discount off 60% off!
                        <Link to={'#'}>{'Shop Now'}</Link>
                    </span>
                </li>
                <li className={cx('header-top-item')}>
                    <span>2-3 business days delivery & free returns</span>
                </li>
            </ul>
        </div>
    );
}

export default HeaderTop;
