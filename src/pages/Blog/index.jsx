import data from '../../data/homeData';
import LimitedOffer from '../../components/LimitedOffer';
import ItemsListing from '../../components/ItemsListing';
import BestSellingItems from '../../components/BestSellingItems';
import Categories from '../../components/Categories';
import CompanyServices from '../../components/CompanyServices';
import CustomersReviews from '../../components/CustomersReviews';
import LatestpPosts from '../../components/LatestpPosts';
import Brands from '../../components/Brands';
import Instagram from '../../components/Instagram';
import HeroSection from '../../components/HeroSection';
import AboutUs from '../../components/AboutUs';
import BlogElement from './BlogElement';

function Blog() {
    return (
        <div>
            <section id="hero-section">
                <HeroSection pageName="blog us" />
            </section>
            <BlogElement />
            <section id="customers-reviews">
                <CustomersReviews reviews={data.customersReviews} />
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

export default Blog;
