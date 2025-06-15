import classNames from "classnames/bind";
import styles from './AboutUs.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const cx = classNames.bind(styles)

function AboutUs() {
    return <div className={cx('about-us')}>
        <div className={cx('grid', 'wide')}>
            <div className={cx('row')}>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('image-wrapper')}>
                        <div className={cx('image')}>
                            <img src="https://demo.templatesjungle.com/shoplite/images/single-image-about.jpg" alt="" />
                            <div className={cx('image-btn')}>
                                <FontAwesomeIcon icon={faPlay} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={cx('col', 'l-6')}>
                    <div className={cx('content')}>
                        <h3 className={cx('content-title')}>Best Digital Store BasicStore</h3>
                        <p>Risus augue curabitur diam senectus congue velit et. Sed vitae metus nibh sit era. Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Sed vitae metus nibh sit era. Nulla adipiscing pharetra eros at.
                </p>
                        <p>Nulla adipiscing pharetra pellentesque maecenas odio eros at. Et libero vulputate amet duis erat volutpat vitae eget. Quam libero etiam et in ac at quis. Risus augue curabitur diam senectus congue velit et. </p>
                        <Link to={'/'} className={cx('button-primary')}>Go to shop</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default AboutUs;