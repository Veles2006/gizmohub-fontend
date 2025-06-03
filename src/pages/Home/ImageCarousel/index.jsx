import React from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { PrevArrow, NextArrow } from '../CustomArrows';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import classNames from 'classnames/bind';
import styles from './ImageCarousel.module.scss';

const cx = classNames.bind(styles);

export default function ImageCarousel({ values = [] }) {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        prevArrow: <PrevArrow />,
        nextArrow: <NextArrow />,
    };

    return (
        <div className={cx('image-carousel')}>
            <Slider {...settings}>
                {values.map((value, idx) => (
                    <div key={idx}>
                        <div className={cx('grid', 'wide')}>
                            <div className={cx('row', 'banner')}>
                                <div className={cx('l-5', 'banner-content-wrapper')}>
                                    <div className={cx('banner-content')}>
                                        <h2>{value.header}</h2>
                                        <p>{value.description}</p>
                                        <Link to={'#'}>{value.button}</Link>
                                    </div>
                                </div>
                                <div className={cx('l-5', 'banner-image-wrapper')}>
                                    <div className={cx('banner-image')}><img src={value.image} /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    );
}
