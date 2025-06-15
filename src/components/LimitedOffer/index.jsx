import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import styles from './LimitedOffer.module.scss';
import { useEffect, useState } from 'react';

const cx = classNames.bind(styles);
const STORAGE_KEY = 'cycleStartDate';
const CYCLE_MS = 28 * 24 * 60 * 60 * 1000;

function pad(number) {
    return number.toString().padStart(2, '0');
}

function LimitedOffer() {
    const [timeLeft, setTimeLeft] = useState({
        days: '00',
        hours: '00',
        minutes: '00',
        seconds: '00',
    });

    useEffect(() => {
        let start = localStorage.getItem(STORAGE_KEY);
        if (!start) {
            start = new Date().toISOString();
            localStorage.setItem(STORAGE_KEY, start);
        }

        const updateTimer = () => {
            const now = Date.now();
            let diff = now - new Date(start).getTime();

            if (diff >= CYCLE_MS) {
                start = new Date().toISOString();
                localStorage.setItem(STORAGE_KEY, start);
                diff = 0;
            }

            let remaining = CYCLE_MS - diff;

            const days = pad(Math.floor(remaining / (24 * 60 * 60 * 1000)));
            remaining %= (24 * 60 * 60 * 1000);
            const hours = pad(Math.floor(remaining / (60 * 60 * 1000)));
            remaining %= (60 * 60 * 1000);
            const minutes = pad(Math.floor(remaining / (60 * 1000)));
            remaining %= (60 * 1000);
            const seconds = pad(Math.floor(remaining / 1000));

            setTimeLeft({ days, hours, minutes, seconds })
        };

        updateTimer();
        const intervalId = setInterval(updateTimer, 1000);
        return () => clearInterval(intervalId)
    }, []);

    return (
        <div className={cx('limited-offer')}>
            <div className={cx('grid', 'wide')}>
                <div className={cx('row')}>
                    <div className={cx('l-6')}>
                        <div className={cx('image-holder')}>
                            <img src="https://demo.templatesjungle.com/shoplite/images/banner-image3.png" />
                        </div>
                    </div>
                    <div className={cx('l-6')}>
                        <div className={cx('limited-offer-content')}>
                            <h2 className={cx('limited-offer-title')}>
                                30% Discount on apple collection
                            </h2>
                            <div
                                id="countdown-clock"
                                className={cx('countdown-clock')}
                            >
                                <div className={cx('time', 'pe-3')}>
                                    <span>{timeLeft.days}</span>
                                    <small>Days</small>
                                </div>
                                <span className={cx('time-space')}>:</span>
                                <div className={cx('time', 'pe-3', 'ps-3')}>
                                    <span>{timeLeft.hours}</span>
                                    <small>Hrs</small>
                                </div>
                                <span className={cx('time-space')}>:</span>
                                <div className={cx('time', 'pe-3', 'ps-3')}>
                                    <span>{timeLeft.minutes}</span>
                                    <small>Min</small>
                                </div>
                                <span className={cx('time-space')}>:</span>
                                <div className={cx('time', 'ps-3')}>
                                    <span>{timeLeft.seconds}</span>
                                    <small>Sec</small>
                                </div>
                            </div>
                            <Link
                                to={'#'}
                                className={cx(
                                    'button-primary',
                                    'limited-offer-btn'
                                )}
                            >
                                Shop Collection
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LimitedOffer;
