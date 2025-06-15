import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../CustomArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './CustomersReviews.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CustomersReviews({ reviews = [] }) {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };
    return (
        <div className={cx('customers-reviews')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('customers-reviews-title')}>
                    <h3>Customers reviews</h3>
                </div>
                <div className={cx('review-carousel')}>
                    <Slider className={cx('my-slick-slider')} {...settings}>
                        {reviews.map((review, idx) => (
                            <div key={idx}>
                                <div className={cx('review-box-wrapper')}>
                                    <div className={cx('review-box')}>
                                        <blockquote>{review.comment}</blockquote>
                                        <div className={cx('review-stars')}>
                                            {Array.from({ length: review.stars}).map((_, i) => (
                                                <span key={i}><FontAwesomeIcon icon={faStar} /></span>
                                            )) }
                                        </div>
                                        <span className={cx('review-author')}>
                                            {review.user}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    );
}

export default CustomersReviews;
