import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCartShopping,
    faChevronDown,
    faHeart,
    faSearch,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

import data from '../../../data/homeData';
import styles from './BlogElement.module.scss';

const cx = classNames.bind(styles);
const bestSellingItems = data.bestSellingItems;
const latestpPosts = [
    {
        flag: 'Gadgets',
        title: '5 Must-Have Gadgets for the Modern Home',
        paragraph:
            'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadg',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item1.jpg',
    },
    {
        flag: 'Phones',
        title: 'Eco-Friendly Innovations Making a Difference',
        paragraph:
            'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item2.jpg',
    },
    {
        flag: 'Tech',
        title: 'The Future of Wearable Tech: Trends to Watch',
        paragraph:
            'Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology.',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item3.jpg',
    },
    {
        flag: 'Gadgets',
        title: '5 Must-Have Gadgets for the Modern Home',
        paragraph:
            'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadg',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item4.jpg',
    },
    {
        flag: 'Phones',
        title: 'Eco-Friendly Innovations Making a Difference',
        paragraph:
            'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item5.jpg',
    },
    {
        flag: 'Tech',
        title: 'The Future of Wearable Tech: Trends to Watch',
        paragraph:
            'Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology.',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item6.jpg',
    },
    {
        flag: 'Gadgets',
        title: '5 Must-Have Gadgets for the Modern Home',
        paragraph:
            'Dive into the world of cutting-edge technology with our latest blog post, where we highlight five essential gadg',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item7.jpg',
    },
    {
        flag: 'Phones',
        title: 'Eco-Friendly Innovations Making a Difference',
        paragraph:
            'Explore the intersection of technology and sustainability in our latest blog post. Learn about the innovative',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item8.jpg',
    },
    {
        flag: 'Tech',
        title: 'The Future of Wearable Tech: Trends to Watch',
        paragraph:
            'Stay ahead of the curve with our insightful look into the rapidly evolving landscape of wearable technology.',
        image: 'https://demo.templatesjungle.com/shoplite/images/post-item9.jpg',
    },
];

const widgetMenuData = [
    {
        title: 'Categories',
        items: ['All', 'Phones', 'Accessories', 'Tablets', 'Watches'],
        classNames: [
            'widget-product-categories',
            'product-categories',
            'cat-item',
        ],
        links: [],
    },
    {
        title: 'Tags',
        items: ['White', 'Cheap', 'Mobile', 'Modern'],
        classNames: ['widget-product-tags', 'product-tags', 'tags-item'],
        links: [],
    },
    {
        title: 'Social Links',
        items: ['Facebook', 'Instagram', 'Twitter', 'Youtube', 'Pinterest'],
        classNames: ['widget-product-brands', 'product-tags', 'tags-item'],
        links: [],
    },
];

function BlogElement() {
    return (
        <div className={cx('blog-element')}>
            <div className={cx('container')}>
                <div className={cx('grid', 'wide')}>
                    <div className={cx('row')}>
                        <div className={cx('col', 'l-3')}>
                            <div className={cx('sidebar')}>
                                <div className={cx('widget-search-bar')}>
                                    <form
                                        role="search"
                                        className={cx(
                                            'widget-search-bar__form'
                                        )}
                                    >
                                        <input
                                            id="search"
                                            type="search"
                                            placeholder="Search"
                                        />
                                        <button
                                            className={cx(
                                                'btn-search',
                                                'button-primary'
                                            )}
                                        >
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                    </form>
                                </div>
                                {widgetMenuData.map((widget, idx) => (
                                    <div
                                        className={cx(
                                            `${widget.classNames[0]}`
                                        )}
                                        key={idx}
                                    >
                                        <div className={cx('section-title')}>
                                            <h3>{widget.title}</h3>
                                        </div>
                                        <ul
                                            className={cx(
                                                `${widget.classNames[1]}`
                                            )}
                                        >
                                            {widget.items.map((item, idx) => (
                                                <li
                                                    className={cx(
                                                        `${widget.classNames[2]}`
                                                    )}
                                                    key={idx}
                                                >
                                                    <Link to={'#'}>{item}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className={cx('col', 'l-9')}>
                            <div className={cx('latest-posts-content')}>
                                <div className={cx('filter-blog')}>
                                    <div>
                                        <p className={cx('filter-title')}>
                                            {'Showing 1–9 of 55 results'}
                                        </p>
                                    </div>
                                    <div className={cx('filter-btn-wrapper')}>
                                        <div>
                                            <select
                                                id="filter-btn"
                                                className={cx('filter-btn')}
                                            >
                                                <option value={''}>
                                                    {'Default sorting'}
                                                </option>
                                                <option value={'name-asc'}>
                                                    {'Name (A - Z)'}
                                                </option>
                                            </select>
                                            <FontAwesomeIcon icon={faChevronDown} />
                                        </div>
                                    </div>
                                </div>
                                <div className={cx('products-list', 'row')}>
                                    {latestpPosts.map((post, idx) => (
                                        <div className={cx('col', 'l-4')}>
                                            <div className={cx('post')}>
                                                <div className={cx('post-btn')}>
                                                    {post.flag}
                                                </div>
                                                <div className={cx('post-img')}>
                                                    <img src={post.image} />
                                                </div>
                                                <div className="post-content">
                                                    <h4
                                                        className={cx(
                                                            'post-content__title'
                                                        )}
                                                    >
                                                        <Link to={'#'}>
                                                            {post.title}
                                                        </Link>
                                                    </h4>
                                                    <p
                                                        className={cx(
                                                            'post-content__paragraph'
                                                        )}
                                                    >
                                                        {post.paragraph}
                                                    </p>
                                                    <Link
                                                        to={'#'}
                                                        className={cx(
                                                            'post-content__read-more'
                                                        )}
                                                    >
                                                        Read More
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                                <ul className={cx('pagination')}>
                                    <li
                                        className={cx(
                                            'pagination__btn',
                                            'pagination__btn--disabled'
                                        )}
                                    >
                                        <Link>Prev</Link>
                                    </li>
                                    <li
                                        className={cx(
                                            'pagination__btn',
                                            'pagination__btn--active'
                                        )}
                                    >
                                        <Link>1</Link>
                                    </li>
                                    <li className={cx('pagination__btn')}>
                                        <Link>2</Link>
                                    </li>
                                    <li className={cx('pagination__btn')}>
                                        <Link>3</Link>
                                    </li>
                                    <li className={cx('pagination__btn')}>
                                        <Link>Next</Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogElement;
