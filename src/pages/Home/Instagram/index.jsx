import classNames from "classnames/bind";
import styles from './Instagram.module.scss'
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function Instagram({ images= [] }) {
    return <div className={cx('instagram-page', 'grid', 'wide')}>
        <div className={cx('instagram-title')}>
            <h3>Instagram #shoplite</h3>
        </div>
        <div className={cx('row')}>
            {images.map((image, idx) => (
                <div className={cx('l-2')} key={idx}>
                <figure className={cx('instagram-item')}>
                    <Link to={'#'}>
                        <div className={cx('instagram')}></div>
                        <img src={image} alt="" />
                    </Link>
                </figure>
            </div>
            ))}
        </div>
    </div>;
}

export default Instagram;