import classNames from 'classnames/bind';
import styles from './Instagram.module.scss';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const cx = classNames.bind(styles);

function Instagram({ images = [] }) {
    return (
        <div className={cx('instagram-page')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('instagram-title')}>
                    <h3>Instagram #shoplite</h3>
                </div>
                <div className={cx('row')}>
                    {images.map((image, idx) => (
                        <div className={cx('col', 'l-2')} key={idx}>
                            <figure className={cx('instagram-item')}>
                                <Link to={'#'}>
                                    
                                    <img src={image} alt="" />
                                </Link>
                                <div className={cx('instagram')}>
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </div>
                            </figure>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Instagram;
