import { Link } from 'react-router-dom'
import classNames from "classnames/bind";
import styles from './LimitedOffer.module.scss'

const cx = classNames.bind(styles)

function LimitedOffer() {
    return <div className={cx('limited-offer')}>
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('l-6')}>
                    <div className={cx('image-holder')}>
                        <img src="https://demo.templatesjungle.com/shoplite/images/banner-image3.png" />
                    </div>
                </div>
                <div className={cx('l-6')}>
                    <div className={cx('limited-offer-content')}>
                        <h2 className={cx('limited-offer-title')}>30% Discount on apple collection</h2>
                        <div id="countdown-clock" className={cx('countdown-clock')}>
                            <div className={cx('time', 'pe-3')}>
                                <span>27</span>
                                <small>Days</small>
                            </div>
                            <span className={cx('time-space')}>:</span>
                            <div className={cx('time', 'pe-3', 'ps-3')}>
                                <span>27</span>
                                <small>Hrs</small>
                            </div>
                            <span className={cx('time-space')}>:</span>
                            <div className={cx('time', 'pe-3', 'ps-3')}>
                                <span>27</span>
                                <small>Min</small>
                            </div>
                            <span className={cx('time-space')}>:</span>
                            <div className={cx('time', 'ps-3')}>
                                <span>27</span>
                                <small>Sec</small>
                            </div>
                        </div>
                        <Link to={'#'} className={cx('button-primary', 'limited-offer-btn')}>Shop Collection</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default LimitedOffer;