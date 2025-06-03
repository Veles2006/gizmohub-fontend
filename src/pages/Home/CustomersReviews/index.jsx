import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../CustomArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './CustomersReviews.module.scss';

const cx = classNames.bind(styles);

function CustomersReviews({ reviews = [] }) {
    const settings = {
        dots: true,
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
            <div className={cx('customers-reviews-title')}>
                <h3>Customers reviews</h3>
            </div>
            <div className={cx('review-carousel')}>
                <Slider {...settings}>
                    {reviews.map((review, idx) => (
                        <div key={idx}>
                            <div className={cx('card')}>
                                <blockquote>{review.comment}</blockquote>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
}

export default CustomersReviews;
