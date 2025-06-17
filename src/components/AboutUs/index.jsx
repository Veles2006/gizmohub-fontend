import classNames from 'classnames/bind';
import styles from './AboutUs.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faX } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';

const cx = classNames.bind(styles);

function AboutUs() {
    const [showVideo, setShowVideo] = useState(false);

    const handlePlayVideo = () => {
        setShowVideo(true);
    };

    const handleClose = () => {
        setShowVideo(false);
    };

    useEffect(() => {
    if (showVideo) {
        const scrollBarWidth = window.innerWidth - document.documentElement.clientWidth;
        document.body.style.overflow = 'hidden';
        document.body.style.paddingRight = `${scrollBarWidth}px`; // bù lại chỗ thanh cuộn
    } else {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    }

    return () => {
        document.body.style.overflow = '';
        document.body.style.paddingRight = '';
    };
}, [showVideo]);


    return (
        <div className={cx('about-us')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('image-wrapper')}>
                            <div className={cx('image')}>
                                <img
                                    src="https://demo.templatesjungle.com/shoplite/images/single-image-about.jpg"
                                    alt=""
                                />
                                <div className={cx('image-btn')} onClick={handlePlayVideo}>
                                    <FontAwesomeIcon icon={faPlay} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={cx('col', 'l-6')}>
                        <div className={cx('content')}>
                            <h3 className={cx('content-title')}>
                                Best Digital Store BasicStore
                            </h3>
                            <p>
                                Risus augue curabitur diam senectus congue velit
                                et. Sed vitae metus nibh sit era. Nulla
                                adipiscing pharetra pellentesque maecenas odio
                                eros at. Et libero vulputate amet duis erat
                                volutpat vitae eget. Sed vitae metus nibh sit
                                era. Nulla adipiscing pharetra eros at.
                            </p>
                            <p>
                                Nulla adipiscing pharetra pellentesque maecenas
                                odio eros at. Et libero vulputate amet duis erat
                                volutpat vitae eget. Quam libero etiam et in ac
                                at quis. Risus augue curabitur diam senectus
                                congue velit et.{' '}
                            </p>
                            <Link to={'/'} className={cx('button-primary')}>
                                Go to shop
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            {showVideo && (
                <>
                    <div className={cx('video-overlay')} onClick={handleClose}></div>
                    <div className={cx('video-modal', showVideo ? 'open' : 'close')}>
                        <div className={cx('video-box')}>
                            <div className={cx('video-btn')} onClick={handleClose}>
                                <FontAwesomeIcon icon={faX} />
                            </div>
                            <div className={cx('video-content')}>
                                <iframe
                                    width="100%"
                                    height="100%"
                                    src="https://www.youtube.com/embed/l4MOE3hZATA?autoplay=1&amp;modestbranding=1&amp;showinfo=0&mute=1"
                                    title="YouTube video"
                                    style={{ border: 'none' }}
                                    allow="autoplay"
                                    allowFullScreen={false}
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

export default AboutUs;
