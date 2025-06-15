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

function About() {
    return <div>
        <section id='hero-section'><HeroSection pageName='about us' /></section>
        <section id="company-services"><CompanyServices companyServices={data.companyServices} /></section>
        <section id='about-us'><AboutUs /></section>
        <section id="categories"><Categories categories={data.categories} /></section>
        <section id="best-selling-items"><BestSellingItems bestSellingItems={data.bestSellingItems} /></section>
        <section id="limited-offer"><LimitedOffer /></section>
        <section id="items-listing"><ItemsListing itemsListing={data.itemsListing} /></section>
        <section id="customers-reviews"><CustomersReviews reviews={data.customersReviews} /></section>
        <section id="latest-posts"><LatestpPosts latestpPosts={data.latestPosts} /></section>
        <section id="brands"><Brands brands={data.brands} /></section>
        <section id="instagram"><Instagram images={data.instagram} /></section>
    </div>;
}

export default About;