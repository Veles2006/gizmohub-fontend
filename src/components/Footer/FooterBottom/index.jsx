import { Link } from 'react-router-dom'
import classNames from 'classnames/bind'
import styles from './FooterBottom.module.scss'

const cx = classNames.bind(styles)

function FooterBottom() {
    return (
        <div className={cx('footer-bottom', 'grid', 'wide')}>
            <div className={cx('ship-and-payment')}>
                <div className={cx('ship')}>
                    <p className={cx('ship-title')}>
                        We ship with:
                    </p>
                    <div className={cx('ship-content')}>
                        <img src="https://demo.templatesjungle.com/shoplite/images/dhl.png" alt="visa" />
                        <img src="https://demo.templatesjungle.com/shoplite/images/shippingcard.png" alt="mastercard" />
                    </div>
                </div>
                <div className={cx('payment')}>
                    <p className={cx('payment-title')}>Payment options:</p>
                    <div className={cx('payment-content')}>
                        <img src="https://demo.templatesjungle.com/shoplite/images/visa.jpg" alt="visa" />
                        <img src="https://demo.templatesjungle.com/shoplite/images/mastercard.jpg" alt="mastercard" />
                        <img src="https://demo.templatesjungle.com/shoplite/images/paypal.jpg" alt="paypal" />
                    </div>
                </div>
            </div>
            <div className={cx('copyright')}>
                <p className={cx('copyright-content')}>
                    © Copyright 2024 ShopLite. HTML Template by 
                    <Link to={'#'}> TemplatesJungle</Link>
                </p>
            </div>
        </div>
    );
}

export default FooterBottom;