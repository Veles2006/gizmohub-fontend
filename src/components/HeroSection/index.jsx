import classNames from "classnames/bind";
import styles from './HeroSection.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function HeroSection({ pageName = '' }) {
    return ( <div className={cx('hero-section')}>
        <h1 className={cx('hero-section-title')}>
            {pageName}
        </h1>
        
        <div className={cx('breadcrumbs')}>
            <span className={cx('item')}>
                <Link to={'/'}>{'Home > '}</Link>
            </span>
            <span className={cx('item', 'item--text-decoration-underline')}>{pageName}</span>
        </div>
    </div> );
}

export default HeroSection;