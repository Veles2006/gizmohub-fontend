import BestSellingItems from "./BestSellingItems";
import Categories from "./Categories";
import CompanyServices from "./CompanyServices";
import ImageCarousel from "./ImageCarousel";
import { faCartShopping, faMedal, faShield, faTag } from '@fortawesome/free-solid-svg-icons'
import LimitedOffer from "./LimitedOffer";
import ItemsListing from "./ItemsListing";
import data from './homeData'
import CustomersReviews from "./CustomersReviews";
import LatestpPosts from "./LatestpPosts";
import Brands from "./Brands";
import Instagram from "./Instagram";


function Home() {
    return (<div>
        <section id="billboard"><ImageCarousel values={data.values} /></section>
        <section id="company-services"><CompanyServices companyServices={data.companyServices} /></section>
        <section id="categories"><Categories categories={data.categories} /></section>
        <section id="best-selling-items"><BestSellingItems bestSellingItems={data.bestSellingItems} /></section>
        <section id="limited-offer"><LimitedOffer /></section>
        <section id="items-listing"><ItemsListing itemsListing={data.itemsListing} /></section>
        <section id="customers-reviews"><CustomersReviews reviews={data.customersReviews} /></section>
        <section id="latest-posts"><LatestpPosts latestpPosts={data.latestPosts} /></section>
        <section id="brands"><Brands brands={data.brands} /></section>
        <section id="instagram"><Instagram images={data.instagram} /></section>
    </div>);
}

export default Home;