import classNames from 'classnames/bind';

import data from '../../data/homeData';
import Brands from '../../components/Brands';
import CustomersReviews from '../../components/CustomersReviews';
import HeroSection from '../../components/HeroSection';
import Instagram from '../../components/Instagram';
import LatestpPosts from '../../components/LatestpPosts';
import styles from './Shop.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping, faChevronDown, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import ShopElement from './ShopElement';

const cx = classNames.bind(styles);
const bestSellingItems = data.bestSellingItems;

function Shop() {
    return (
        <div>
            <section id="hero-section">
                <HeroSection pageName="shop" />
            </section>
            <ShopElement />
            <section id="customers-reviews">
                <CustomersReviews reviews={data.customersReviews} />
            </section>
            <section id="latest-posts">
                <LatestpPosts latestpPosts={data.latestPosts} />
            </section>
            <section id="brands">
                <Brands brands={data.brands} />
            </section>
            <section id="instagram">
                <Instagram images={data.instagram} />
            </section>
        </div>
    );
}

export default Shop;
