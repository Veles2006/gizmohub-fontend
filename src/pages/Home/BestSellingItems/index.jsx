import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from './BestSellingItems.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faHeart } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../CustomArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const cx = classNames.bind(styles)

function BestSellingItems({ bestSellingItems = [] }) {
    const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: true,
            prevArrow: <PrevArrow />,
            nextArrow: <NextArrow />,
        };
    return <div className={cx('best-selling-items')}>
        <div className={cx('best-selling-items-title')}>
            <h3>
                Best selling items
            </h3>
        </div>
        <div className={cx('image-carousel')}>
            <Slider {...settings} style={{ height: '100%'}}>
                {bestSellingItems.map((item, idx) => (
                    <div key={idx}>
                        <div className={cx('card')}>
                            <Link to={'#'}>
                                <img src={item.img} />
                            </Link>

                            <h5 className={cx('card__title')}>
                                <Link to={'#'}>{item.title}</Link>
                            </h5>
                            <span>{item.price}</span>
                        </div>
                        <div className={cx('card-concern')}>
                            <Link to={'#'} className={cx('btn')}>
                                <span>
                                    <FontAwesomeIcon icon={faCartShopping}/>
                                </span>
                            </Link>
                            <Link to={'#'} className={cx('btn')}>
                                <span>
                                    <FontAwesomeIcon icon={faHeart}/>
                                </span>
                            </Link>
                        </div>
                    </div>
                ))}
            </Slider>
            </div>
    </div>;
}

export default BestSellingItems;